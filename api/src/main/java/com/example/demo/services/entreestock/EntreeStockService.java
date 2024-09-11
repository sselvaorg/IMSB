package com.example.demo.services.entreestock;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dtos.entreestock.CreateEntreeStockDto;
import com.example.demo.dtos.entreestock.UpdateEntreeStockDto;
import com.example.demo.models.Article;
import com.example.demo.models.EntreeStock;
import com.example.demo.models.Fournisseur;
import com.example.demo.repositories.ArticleRepository;
import com.example.demo.repositories.EntreeStockRepository;
import com.example.demo.repositories.FournisseurRepository;

@Service
public class EntreeStockService implements IEntreeStockService {
    @Autowired
    private final ArticleRepository articleRepository;
    @Autowired
    private final EntreeStockRepository entreeStockRepository;
    @Autowired
    private final FournisseurRepository fournisseurRepository;

    public EntreeStockService(ArticleRepository articleRepository,
            EntreeStockRepository entreeStockRepository,
            FournisseurRepository fournisseurRepository) {
        this.articleRepository = articleRepository;
        this.entreeStockRepository = entreeStockRepository;
        this.fournisseurRepository = fournisseurRepository;

    }

    @Override
    public EntreeStock CreateEntreeStock(CreateEntreeStockDto createEntreeStockDto) {
        EntreeStock entreeStock = new EntreeStock();
        entreeStock.setDate(createEntreeStockDto.getDate());
        entreeStock.setQuantite(createEntreeStockDto.getQuantite());
        Article article = articleRepository.findById(createEntreeStockDto.getArticleId()).orElseThrow();
        Fournisseur fournisseur = fournisseurRepository.findById(createEntreeStockDto.getFournisseurId()).orElseThrow();
        article.setQuantite(article.getQuantite() + createEntreeStockDto.getQuantite());
        articleRepository.save(article);
        entreeStock.setArticle(article);
        entreeStock.setFournisseur(fournisseur);

        return entreeStockRepository.save(entreeStock);
    }

    @Override
    public EntreeStock UpdateEntreeStock(UpdateEntreeStockDto updateEntreeStockDto, Long id) {
        EntreeStock entreeStock = entreeStockRepository.findById(id).orElseThrow();
        Article article = entreeStock.getArticle();

        // Revert the previous stock quantity change
        article.setQuantite(article.getQuantite() - entreeStock.getQuantite());

        // Update EntreeStock with new values from DTO
        entreeStock.setQuantite(updateEntreeStockDto.getQuantite());
        entreeStock.setDate(updateEntreeStockDto.getDate());

        // Apply the new quantity change
        article.setQuantite(article.getQuantite() + updateEntreeStockDto.getQuantite());

        // Save the updated article
        articleRepository.save(article);

        // Save the updated entreeStock
        return entreeStockRepository.save(entreeStock);
    }

    @Override
    public EntreeStock GetEntreeStockById(Long id) {
        return entreeStockRepository.findById(id).orElseThrow();
    }

    @Override
    public List<EntreeStock> GetEntreeStockByArticle(Long id) {
        Article article = articleRepository.findById(id).orElseThrow();
        return entreeStockRepository.findByArticle(article);

    }

    @Override
    public List<EntreeStock> GetEntreeStockByFournisseur(Long id) {
        Fournisseur fournisseur = fournisseurRepository.findById(id).orElseThrow();
        return entreeStockRepository.findByFournisseur(fournisseur);
    }

    @Override
    public List<EntreeStock> GetAllEntreeStock() {
        return entreeStockRepository.findAll();

    }

}
