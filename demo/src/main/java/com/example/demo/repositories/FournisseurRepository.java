package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.models.Fournisseur;

public interface FournisseurRepository extends JpaRepository<Fournisseur, Long> {

}
