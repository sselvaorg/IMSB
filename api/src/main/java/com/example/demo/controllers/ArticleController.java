package com.example.demo.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dtos.article.CreateArticleDto;
import com.example.demo.dtos.article.UpdateArticleDto;
import com.example.demo.models.Article;
import com.example.demo.services.article.IArticleService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import java.util.*;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;

@RestController
@RequestMapping("/Api/Article/")
public class ArticleController {
    @Autowired
    private final IArticleService articleService;

    public ArticleController(IArticleService articleService) {
        this.articleService = articleService;
    }

    @GetMapping("GetAllArticles")
    public ResponseEntity<List<Article>> GetAllArticles() {

        return ResponseEntity.ok(articleService.GetAllArticles());
    }

    @GetMapping("GetArticlesByCategoriy/{id}")
    public ResponseEntity<List<Article>> GetArticlesByCategoriy(@PathVariable("id") Long id) {
        return ResponseEntity.ok(articleService.GetAllArticlesByCategorie(id));
    }

    @GetMapping("GetArticlesByFournisseur/{id}")
    public ResponseEntity<List<Article>> GetArticlesByFournisseur(@PathVariable("id") Long id) {
        return ResponseEntity.ok(articleService.GetAllArticlesByFournisseur(id));
    }

    @PostMapping("CreateArticle")
    public ResponseEntity<Article> CreateArticle(@RequestBody CreateArticleDto article) {
        return ResponseEntity.ok(articleService.CreateArticle(article));
    }

    @PutMapping("UpdateArticle/{id}")
    public ResponseEntity<Article> UpdateArticle(@PathVariable("id") Long id, @RequestBody UpdateArticleDto Article) {

        return ResponseEntity.ok(articleService.UpdateArticle(Article, id));
    }
}
