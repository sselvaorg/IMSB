package com.example.demo.repositories;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.models.Article;
import com.example.demo.models.EntreeStock;
import com.example.demo.models.Fournisseur;

public interface EntreeStockRepository extends JpaRepository<EntreeStock, Long> {
    List<EntreeStock> findByArticle(Article article);

    List<EntreeStock> findByFournisseur(Fournisseur fournisseur);

}
