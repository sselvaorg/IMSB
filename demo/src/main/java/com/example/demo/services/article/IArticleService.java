package com.example.demo.services.article;

import com.example.demo.dtos.article.CreateArticleDto;
import com.example.demo.dtos.article.UpdateArticleDto;
import com.example.demo.models.Article;
import java.util.List;

public interface IArticleService {
    Article CreateArticle(CreateArticleDto createArticleDto);

    Article UpdateArticle(UpdateArticleDto updateArticleDto, Long id);

    List<Article> GetAllArticles();

    List<Article> GetAllArticlesByCategorie(Long id);

    List<Article> GetAllArticlesByFournisseur(Long id);

}
