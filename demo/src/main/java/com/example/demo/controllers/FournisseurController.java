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

import com.example.demo.dtos.fournisseur.CreateFournisseurDto;
import com.example.demo.models.Fournisseur;
import com.example.demo.services.fournisseur.IFournisseurService;

@RestController
@RequestMapping("/Api/Fournisseur/")
public class FournisseurController {
    @Autowired
    private final IFournisseurService fournisseurService;

    public FournisseurController(IFournisseurService fournisseurService) {
        this.fournisseurService = fournisseurService;
    }

    @GetMapping("GetAllFournisseurs")
    public ResponseEntity<List<Fournisseur>> GetAllFournisseurs() {

        return ResponseEntity.ok(fournisseurService.GetAllFournisseurs());
    }

    @GetMapping("GetFournisseurById/{id}")
    public ResponseEntity<Fournisseur> GetFournisseurById(@PathVariable("id") Long id) {
        return ResponseEntity.ok(fournisseurService.GetFournisseurById(id));
    }

    @PostMapping("CreateFournisseur")
    public ResponseEntity<Fournisseur> CreateFournisseur(@RequestBody CreateFournisseurDto fournisseur) {
        return ResponseEntity.ok(fournisseurService.CreateFournisseur(fournisseur));
    }

    @PutMapping("UpdateFournisseur/{id}")
    public ResponseEntity<Fournisseur> UpdateFournisseur(@PathVariable("id") Long id,
            @RequestBody com.example.demo.dtos.fournisseur.UpdateFournisseurDto fournisseur) {

        return ResponseEntity.ok(fournisseurService.UpdateFournisseur(fournisseur, id));
    }
}
