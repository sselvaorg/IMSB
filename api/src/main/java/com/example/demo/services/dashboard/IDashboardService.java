package com.example.demo.services.dashboard;

import com.example.demo.dtos.dashboard.DashboardStats;
import com.example.demo.dtos.dashboard.EntreeStockProgressDto;
import com.example.demo.dtos.dashboard.SortieStockProgressDto;
import java.util.*;

public interface IDashboardService {
    DashboardStats GetDashboardStats();

    List<EntreeStockProgressDto> getEntreeStockProgress();

    List<SortieStockProgressDto> getSortieStockProgress();
}
