package com.example.demo.dtos.article;

import lombok.Data;

@Data
public class UpdateArticleDto {
    private String nom;
    private String description;
    private int quantite;
    private double prix;
    // private Long categoryId;
    // private Long fournisseurId;
    // private String codeBarre;
}
