package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dtos.categorie.CreateCategoryDto;
import com.example.demo.dtos.categorie.UpdateCategoryDto;

import com.example.demo.models.Categorie;
import com.example.demo.services.category.ICategoryService;

@RestController
@RequestMapping("/Api/Category/")
public class CategorieController {
    @Autowired
    private final ICategoryService categoryService;

    public CategorieController(ICategoryService categoryService) {
        this.categoryService = categoryService;
    }

    @GetMapping("GetAllCategories")
    public ResponseEntity<List<Categorie>> GetAllCategories() {

        return ResponseEntity.ok(categoryService.GetAllCategories());
    }

    @GetMapping("GetCategoryById/{id}")
    public ResponseEntity<Categorie> GetCategoryById(@PathVariable("id") Long id) {
        return ResponseEntity.ok(categoryService.GetCategoryId(id));
    }

    @PostMapping("CreateCategory")
    public ResponseEntity<Categorie> CreateCategory(@RequestBody CreateCategoryDto categorie) {
        return ResponseEntity.ok(categoryService.CreateCategory(categorie));
    }

    @PutMapping("UpdateCategory/{id}")
    public ResponseEntity<Categorie> UpdateCategory(@PathVariable("id") Long id,
            @RequestBody UpdateCategoryDto Categorie) {

        return ResponseEntity.ok(categoryService.UpdateCategory(Categorie, id));
    }
}
