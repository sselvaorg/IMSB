package com.example.demo.controllers;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dtos.sortiestock.CreateSortieStockDto;
import com.example.demo.dtos.sortiestock.UpdateSortieStockDto;
import com.example.demo.models.SortieStock;
import com.example.demo.services.sortiestock.ISortieStockService;

@RestController
@RequestMapping("/Api/SortieStock/")
public class SortieStockController {
    private final ISortieStockService sortieStockService;

    public SortieStockController(ISortieStockService sortieStockService) {
        this.sortieStockService = sortieStockService;
    }

    @PostMapping("CreateSortieStock")
    public ResponseEntity<SortieStock> CreateSortieStock(@RequestBody CreateSortieStockDto createSortieStockDto) {
        return ResponseEntity.ok(sortieStockService.CreateSortieStock(createSortieStockDto));
    }

    @PutMapping("UpdateSortieStock/{id}")
    public ResponseEntity<SortieStock> UpdateSortieStock(@PathVariable("id") Long id,
            @RequestBody UpdateSortieStockDto SortieStockDto) {

        return ResponseEntity.ok(sortieStockService.UpdateSortieStock(SortieStockDto, id));
    }

    @GetMapping("GetSortieStockById/{id}")
    public ResponseEntity<SortieStock> GetSortieStockById(@PathVariable("id") Long id) {
        return ResponseEntity.ok(sortieStockService.GetSortieStockById(id));
    }

    @GetMapping("GetSortieStockByArticle/{id}")
    public ResponseEntity<List<SortieStock>> GetSortieStockByArticle(@PathVariable("id") Long id) {
        return ResponseEntity.ok(sortieStockService.GetSortieStockByArticle(id));
    }

    @GetMapping("GeAlltSortieStock")
    public ResponseEntity<List<SortieStock>> GetAllSortieStock() {
        return ResponseEntity.ok(sortieStockService.GetAllSortieStock());
    }
}
