package com.example.demo.services.sortiestock;

import java.util.List;

import com.example.demo.dtos.sortiestock.CreateSortieStockDto;
import com.example.demo.dtos.sortiestock.UpdateSortieStockDto;
import com.example.demo.models.SortieStock;

public interface ISortieStockService {
    SortieStock CreateSortieStock(CreateSortieStockDto createSortieStockDto);

    SortieStock GetSortieStockById(Long id);

    List<SortieStock> GetSortieStockByArticle(Long id);

    List<SortieStock> GetAllSortieStock();

    SortieStock UpdateSortieStock(UpdateSortieStockDto updateSortieStockDto, Long id);

}
