package com.example.demo.services.fournisseur;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dtos.fournisseur.CreateFournisseurDto;
import com.example.demo.dtos.fournisseur.UpdateFournisseurDto;
import com.example.demo.models.Fournisseur;
import com.example.demo.repositories.FournisseurRepository;

@Service
public class FournisseurService implements IFournisseurService {
    @Autowired
    private final FournisseurRepository fournisseurRepository;

    public FournisseurService(FournisseurRepository fournisseurRepository) {
        this.fournisseurRepository = fournisseurRepository;
    }

    @Override
    public Fournisseur CreateFournisseur(CreateFournisseurDto createFournisseurDto) {
        Fournisseur fournisseur = new Fournisseur();
        fournisseur.setNom(createFournisseurDto.getNom());
        fournisseur.setAdresse(createFournisseurDto.getAdresse());
        fournisseur.setContact(createFournisseurDto.getContact());
        fournisseur.setTelephone(createFournisseurDto.getTelephone());
        return fournisseurRepository.save(fournisseur);

    }

    @Override
    public Fournisseur UpdateFournisseur(UpdateFournisseurDto updateFournisseurDto, Long id) {
        Fournisseur fournisseur = fournisseurRepository.findById(id).orElseThrow();
        fournisseur.setNom(updateFournisseurDto.getNom());
        fournisseur.setAdresse(updateFournisseurDto.getAdresse());
        fournisseur.setContact(updateFournisseurDto.getContact());
        fournisseur.setTelephone(updateFournisseurDto.getTelephone());
        return fournisseurRepository.save(fournisseur);
    }

    @Override
    public List<Fournisseur> GetAllFournisseurs() {
        return fournisseurRepository.findAll();
    }

    @Override
    public Fournisseur GetFournisseurById(Long id) {
        return fournisseurRepository.findById(id).orElseThrow();
    }

}
