package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.models.Article;
import com.example.demo.models.Categorie;
import com.example.demo.models.Fournisseur;

public interface ArticleRepository extends JpaRepository<Article, Long> {

    List<Article> findByCategorie(Categorie categorie);

    List<Article> findByFournisseur(Fournisseur fournisseur);

    long countByQuantiteLessThanEqual(Integer a);

    List<Article> findByQuantiteLessThanEqual(Integer a);
}
