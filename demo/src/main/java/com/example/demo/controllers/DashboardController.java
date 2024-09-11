package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dtos.dashboard.DashboardStats;
import com.example.demo.services.dashboard.IDashboardService;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
@RequestMapping("/Api/Dashboard/")
public class DashboardController {
    @Autowired
    private final IDashboardService dashboardService;

    public DashboardController(IDashboardService dashboardService) {
        this.dashboardService = dashboardService;
    }

    @GetMapping("GetDashboardStats")
    public ResponseEntity<DashboardStats> GetDashboardStats() {
        return ResponseEntity.ok(dashboardService.GetDashboardStats());
    }

}
