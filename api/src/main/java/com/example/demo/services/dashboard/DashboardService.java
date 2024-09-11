package com.example.demo.services.dashboard;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dtos.dashboard.DashboardStats;
import com.example.demo.repositories.ArticleRepository;
import com.example.demo.repositories.CategoryRepository;
import com.example.demo.repositories.FournisseurRepository;

@Service
public class DashboardService implements IDashboardService {
    @Autowired
    private final FournisseurRepository fournisseurRepository;

    @Autowired
    private final ArticleRepository articleRepository;
    @Autowired
    private final CategoryRepository categoryRepository;

    public DashboardService(ArticleRepository articleRepository, CategoryRepository categoryRepository,
            FournisseurRepository fournisseurRepository) {
        this.fournisseurRepository = fournisseurRepository;
        this.articleRepository = articleRepository;
        this.categoryRepository = categoryRepository;
    }

    @Override
    public DashboardStats GetDashboardStats() {
        DashboardStats dashboardStats = new DashboardStats();
        dashboardStats.setNombreFournisseur(fournisseurRepository.count());
        dashboardStats.setNombreArticle(articleRepository.count());
        dashboardStats.setNombreCategorie(categoryRepository.count());
        dashboardStats.setStockEpuisee(articleRepository.countByQuantiteLessThanEqual(10));
        return dashboardStats;
    }

}
