package com.example.demo.services.fournisseur;

import java.util.List;

import com.example.demo.dtos.fournisseur.CreateFournisseurDto;
import com.example.demo.dtos.fournisseur.UpdateFournisseurDto;
import com.example.demo.models.Fournisseur;

public interface IFournisseurService {
    Fournisseur CreateFournisseur(CreateFournisseurDto createFournisseurDto);

    Fournisseur UpdateFournisseur(UpdateFournisseurDto updateFournisseurDto, Long id);

    List<Fournisseur> GetAllFournisseurs();

    Fournisseur GetFournisseurById(Long id);

}
