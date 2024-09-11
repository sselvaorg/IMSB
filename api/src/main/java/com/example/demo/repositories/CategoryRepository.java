package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.models.Categorie;

public interface CategoryRepository extends JpaRepository<Categorie, Long> {

}
