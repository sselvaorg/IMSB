package com.example.demo.services.dashboard;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dtos.dashboard.DashboardStats;
import com.example.demo.dtos.dashboard.EntreeStockProgressDto;
import com.example.demo.repositories.ArticleRepository;
import com.example.demo.repositories.CategoryRepository;
import com.example.demo.repositories.EntreeStockRepository;
import com.example.demo.repositories.SortieStockRepository;

import com.example.demo.repositories.FournisseurRepository;
import java.util.*;
import com.example.demo.dtos.dashboard.SortieStockProgressDto;

@Service
public class DashboardService implements IDashboardService {
    @Autowired
    private final FournisseurRepository fournisseurRepository;
    @Autowired
    private final EntreeStockRepository entreeStockRepository;
    private final SortieStockRepository sortieStockRepository;
    @Autowired
    private final ArticleRepository articleRepository;
    @Autowired
    private final CategoryRepository categoryRepository;

    public DashboardService(SortieStockRepository sortieStockRepository, ArticleRepository articleRepository,
            EntreeStockRepository entreeStockRepository, CategoryRepository categoryRepository,
            FournisseurRepository fournisseurRepository) {
        this.fournisseurRepository = fournisseurRepository;
        this.articleRepository = articleRepository;
        this.categoryRepository = categoryRepository;
        this.entreeStockRepository = entreeStockRepository;
        this.sortieStockRepository = sortieStockRepository;
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

    @Override
    public List<EntreeStockProgressDto> getEntreeStockProgress() {
        List<Object[]> result = entreeStockRepository.getEntreeStockProgress();
        List<EntreeStockProgressDto> progressDTOs = new ArrayList<>();

        for (Object[] row : result) {
            String month = (String) row[0];
            int totalQuantite = ((Number) row[1]).intValue();
            progressDTOs.add(new EntreeStockProgressDto(month, totalQuantite));
        }

        return progressDTOs;
    }

    public List<SortieStockProgressDto> getSortieStockProgress() {
        List<Object[]> result = sortieStockRepository.getSortieStockProgress();
        List<SortieStockProgressDto> progressDTOs = new ArrayList<>();

        for (Object[] row : result) {
            String month = (String) row[0];
            int totalQuantite = ((Number) row[1]).intValue();
            progressDTOs.add(new SortieStockProgressDto(month, totalQuantite));
        }

        return progressDTOs;
    }
}
