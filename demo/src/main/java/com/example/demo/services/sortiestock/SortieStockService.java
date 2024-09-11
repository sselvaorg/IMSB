package com.example.demo.services.sortiestock;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dtos.sortiestock.CreateSortieStockDto;
import com.example.demo.dtos.sortiestock.UpdateSortieStockDto;
import com.example.demo.models.Article;
import com.example.demo.models.SortieStock;
import com.example.demo.repositories.ArticleRepository;
import com.example.demo.repositories.SortieStockRepository;

@Service
public class SortieStockService implements ISortieStockService {
    @Autowired
    private final SortieStockRepository sortieStockRepository;

    @Autowired
    private final ArticleRepository articleRepository;

    public SortieStockService(SortieStockRepository sortieStockRepository, ArticleRepository articleRepository) {
        this.sortieStockRepository = sortieStockRepository;
        this.articleRepository = articleRepository;
    }

    @Override

    public SortieStock CreateSortieStock(CreateSortieStockDto createSortieStockDto) {
        SortieStock sortieStock = new SortieStock();
        sortieStock.setDate(createSortieStockDto.getDate());
        sortieStock.setQuantite(createSortieStockDto.getQuantite());
        sortieStock.setDestination(createSortieStockDto.getDestination());
        Article article = articleRepository.findById(createSortieStockDto.getArticleId()).orElseThrow();
        int newQuantity = article.getQuantite() - createSortieStockDto.getQuantite();

        // Check if the new quantity would be less than 0
        if (newQuantity < 0) {
            throw new RuntimeException("Insufficient stock! Article quantity cannot be less than 0.");
        }
        article.setQuantite(newQuantity);
        sortieStock.setArticle(article);
        return sortieStockRepository.save(sortieStock);

    }

    @Override
    public SortieStock GetSortieStockById(Long id) {
        return sortieStockRepository.findById(id).orElseThrow();
    }

    @Override
    public List<SortieStock> GetSortieStockByArticle(Long id) {
        Article article = articleRepository.findById(id).orElseThrow();

        return sortieStockRepository.findByArticle(article);
    }

    @Override
    public List<SortieStock> GetAllSortieStock() {
        return sortieStockRepository.findAll();
    }

    @Override
    public SortieStock UpdateSortieStock(UpdateSortieStockDto updateSortieStockDto, Long id) {
        SortieStock sortieStock = sortieStockRepository.findById(id).orElseThrow();
        sortieStock.setDate(updateSortieStockDto.getDate());

        sortieStock.setDestination(updateSortieStockDto.getDestination());
        Article article = sortieStock.getArticle();
        article.setQuantite(article.getQuantite() + sortieStock.getQuantite());

        int newQuantity = article.getQuantite() - updateSortieStockDto.getQuantite();

        // Check if the new quantity would be less than 0
        if (newQuantity < 0) {
            throw new RuntimeException("Insufficient stock! Article quantity cannot be less than 0.");
        }
        sortieStock.setQuantite(updateSortieStockDto.getQuantite());
        article.setQuantite(newQuantity);
        articleRepository.save(article);
        return sortieStockRepository.save(sortieStock);

    }

}
