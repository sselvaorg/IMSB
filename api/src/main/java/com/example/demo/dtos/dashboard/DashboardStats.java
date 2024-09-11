package com.example.demo.dtos.dashboard;

import lombok.Data;

@Data
public class DashboardStats {
    private Long nombreFournisseur;
    private Long nombreArticle;
    private Long nombreCategorie;
    private Long stockEpuisee;
}
