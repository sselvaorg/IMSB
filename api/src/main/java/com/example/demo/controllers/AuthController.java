package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dtos.auth.RegisterDto;
import com.example.demo.models.Utilisateur;
import com.example.demo.repositories.RoleRepository;
import com.example.demo.repositories.UtilisateurRepository;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/Api/Auth/")
public class AuthController {
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private UtilisateurRepository utilisateurRepository;
    @Autowired
    private RoleRepository roleRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    public AuthController(AuthenticationManager authenticationManager, UtilisateurRepository utilisateurRepository,
            RoleRepository roleRepository, PasswordEncoder passwordEncoder) {
        this.authenticationManager = authenticationManager;
        this.utilisateurRepository = utilisateurRepository;
        this.roleRepository = roleRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @PostMapping("Register")
    public ResponseEntity<String> register(@RequestBody RegisterDto registerDto) {
        if (utilisateurRepository.existsByNom(registerDto.getUserName())) {
            return ResponseEntity.badRequest().body("user already exist");
        }
        Utilisateur utilisateur = new Utilisateur();
        utilisateur.setNom(registerDto.getUserName());
        utilisateur.setMotDePasse(passwordEncoder.encode(registerDto.getPassword()));
        utilisateur.setEmail(registerDto.getEmail());
        utilisateur.setRole(registerDto.getRole());
        return ResponseEntity.ok(";swjfe");
    }

}
