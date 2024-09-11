package com.example.demo.services.category;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dtos.categorie.CreateCategoryDto;
import com.example.demo.dtos.categorie.UpdateCategoryDto;
import com.example.demo.models.Categorie;
import com.example.demo.repositories.CategoryRepository;

@Service
public class CategoryService implements ICategoryService {
    @Autowired
    private final CategoryRepository categoryRepository;

    public CategoryService(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    @Override
    public Categorie CreateCategory(CreateCategoryDto createCategoryDto) {
        Categorie categorie = new Categorie();
        categorie.setNom(createCategoryDto.getNom());
        categorie.setDescription(createCategoryDto.getDescription());
        return categoryRepository.save(categorie);
    }

    @Override
    public Categorie UpdateCategory(UpdateCategoryDto updateCategoryDto, Long id) {

        Categorie categorie = categoryRepository.findById(id).orElseThrow();
        categorie.setNom(updateCategoryDto.getNom());
        categorie.setDescription(updateCategoryDto.getDescription());
        return categoryRepository.save(categorie);
    }

    @Override
    public List<Categorie> GetAllCategories() {

        return categoryRepository.findAll();
    }

    @Override
    public Categorie GetCategoryId(Long id) {

        Categorie categorie = categoryRepository.findById(id).orElseThrow();
        return categorie;
    }

}
