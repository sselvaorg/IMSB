package com.example.demo.dtos.dashboard;

import lombok.Data;

@Data
public class DashboardStats {
    private Long numberOfSuppliers;
    private Long numberOfArticles;
    private Long numberOfCategories;
    private Long outOfStock;
}
