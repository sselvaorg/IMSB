package com.example.demo.services.entreestock;

import java.util.List;

import com.example.demo.dtos.entreestock.CreateEntreeStockDto;
import com.example.demo.dtos.entreestock.UpdateEntreeStockDto;
import com.example.demo.models.EntreeStock;;

public interface IEntreeStockService {
    EntreeStock CreateEntreeStock(CreateEntreeStockDto createEntreeStockDto);

    EntreeStock UpdateEntreeStock(UpdateEntreeStockDto updateEntreeStockDto, Long id);

    EntreeStock GetEntreeStockById(Long id);

    List<EntreeStock> GetEntreeStockByArticle(Long id);

    List<EntreeStock> GetEntreeStockByFournisseur(Long id);

    List<EntreeStock> GetAllEntreeStock();
}
