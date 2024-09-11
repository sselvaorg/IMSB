package com.example.demo.services.article;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dtos.article.CreateArticleDto;
import com.example.demo.dtos.article.UpdateArticleDto;
import com.example.demo.models.Article;
import com.example.demo.models.Categorie;
import com.example.demo.models.Fournisseur;
import com.example.demo.repositories.ArticleRepository;
import com.example.demo.repositories.CategoryRepository;
import com.example.demo.repositories.FournisseurRepository;

@Service
public class ArticleService implements IArticleService {
    @Autowired
    private final ArticleRepository articleRepository;
    @Autowired
    private final CategoryRepository categoryRepository;
    @Autowired
    private final FournisseurRepository fournisseurRepository;

    public ArticleService(
            FournisseurRepository fournisseurRepository, ArticleRepository articleRepository,
            CategoryRepository categoryRepository) {
        this.articleRepository = articleRepository;
        this.categoryRepository = categoryRepository;
        this.fournisseurRepository = fournisseurRepository;

    }

    @Override
    public Article CreateArticle(CreateArticleDto createArticleDto) {
        Article article = new Article();
        article.setNom(createArticleDto.getNom());
        article.setDescription(createArticleDto.getDescription());
        article.setCodeBarre(createArticleDto.getCodeBarre());
        Categorie categorie = categoryRepository.findById(createArticleDto.getCategoryId()).orElseThrow();
        article.setCategorie(categorie);
        Fournisseur fournisseur = fournisseurRepository.findById(createArticleDto.getFournisseurId()).orElseThrow();
        article.setFournisseur(fournisseur);
        article.setPrix(createArticleDto.getPrix());
        article.setQuantite(createArticleDto.getQuantite());
        return articleRepository.save(article);
    }

    @Override
    public Article UpdateArticle(UpdateArticleDto updateArticleDto, Long id) {
        Article article = articleRepository.findById(id).orElseThrow();
        article.setNom(updateArticleDto.getNom());
        article.setDescription(updateArticleDto.getDescription());
        article.setPrix(updateArticleDto.getPrix());
        article.setQuantite(updateArticleDto.getQuantite());
        return articleRepository.save(article);
    }

    @Override
    public List<Article> GetAllArticles() {
        return articleRepository.findAll();
    }

    @Override
    public List<Article> GetAllArticlesByCategorie(Long id) {
        Categorie categorie = categoryRepository.findById(id).orElseThrow();
        return articleRepository.findByCategorie(categorie);
    }

    @Override
    public List<Article> GetAllArticlesByFournisseur(Long id) {

        Fournisseur fournisseur = fournisseurRepository.findById(id).orElseThrow();
        return articleRepository.findByFournisseur(fournisseur);
    }

}
