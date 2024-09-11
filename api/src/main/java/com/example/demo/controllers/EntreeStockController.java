package com.example.demo.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dtos.entreestock.CreateEntreeStockDto;
import com.example.demo.dtos.entreestock.UpdateEntreeStockDto;
import com.example.demo.models.EntreeStock;
import com.example.demo.services.entreestock.IEntreeStockService;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;

@RestController
@RequestMapping("/Api/EntreeStock/")
public class EntreeStockController {
    private final IEntreeStockService entreeStockService;

    public EntreeStockController(IEntreeStockService entreeStockService) {
        this.entreeStockService = entreeStockService;
    }

    @PostMapping("CreateEntreeStock")
    public ResponseEntity<EntreeStock> CreateEntreeStock(@RequestBody CreateEntreeStockDto createEntreeStockDto) {
        return ResponseEntity.ok(entreeStockService.CreateEntreeStock(createEntreeStockDto));
    }

    @PutMapping("UpdateEntreeStock/{id}")
    public ResponseEntity<EntreeStock> UpdateEntreeStock(@PathVariable("id") Long id,
            @RequestBody UpdateEntreeStockDto entreeStockDto) {

        return ResponseEntity.ok(entreeStockService.UpdateEntreeStock(entreeStockDto, id));
    }

    @GetMapping("GetEntreeStockById/{id}")
    public ResponseEntity<EntreeStock> GetEntreeStockById(@PathVariable("id") Long id) {
        return ResponseEntity.ok(entreeStockService.GetEntreeStockById(id));
    }

    @GetMapping("GetEntreeStockByFournisseur/{id}")
    public ResponseEntity<List<EntreeStock>> GetEntreeStockByFournisseur(@PathVariable("id") Long id) {
        return ResponseEntity.ok(entreeStockService.GetEntreeStockByFournisseur(id));
    }

    @GetMapping("GetEntreeStockByArticle/{id}")
    public ResponseEntity<List<EntreeStock>> GetEntreeStockByArticle(@PathVariable("id") Long id) {
        return ResponseEntity.ok(entreeStockService.GetEntreeStockByArticle(id));
    }

    @GetMapping("GeAllEntreeStock")
    public ResponseEntity<List<EntreeStock>> GetAllEntreeStock() {
        return ResponseEntity.ok(entreeStockService.GetAllEntreeStock());
    }
}
