package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.models.Article;
import com.example.demo.models.SortieStock;

public interface SortieStockRepository extends JpaRepository<SortieStock, Long> {
    List<SortieStock> findByArticle(Article article);

}
