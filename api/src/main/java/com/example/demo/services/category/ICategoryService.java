package com.example.demo.services.category;

import java.util.List;
import com.example.demo.dtos.categorie.CreateCategoryDto;
import com.example.demo.dtos.categorie.UpdateCategoryDto;
import com.example.demo.models.Categorie;

public interface ICategoryService {
    Categorie CreateCategory(CreateCategoryDto createCategoryDto);

    Categorie UpdateCategory(UpdateCategoryDto updateCategoryDto, Long id);

    List<Categorie> GetAllCategories();

    Categorie GetCategoryId(Long id);

}
