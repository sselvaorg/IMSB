package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.config.JwtConfig;
import com.example.demo.dtos.auth.AuthResponseDto;
import com.example.demo.dtos.auth.LoginDto;
import com.example.demo.dtos.auth.RegisterDto;
import com.example.demo.models.Role;
import com.example.demo.models.Utilisateur;
import com.example.demo.repositories.RoleRepository;
import com.example.demo.repositories.UtilisateurRepository;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import java.util.Collections;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

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
    @Autowired
    private JwtConfig jwtConfig;

    public AuthController(AuthenticationManager authenticationManager, UtilisateurRepository utilisateurRepository,
            RoleRepository roleRepository, PasswordEncoder passwordEncoder) {
        this.authenticationManager = authenticationManager;
        this.utilisateurRepository = utilisateurRepository;
        this.roleRepository = roleRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @PostMapping("Register")
    public ResponseEntity<AuthResponseDto> register(@RequestBody RegisterDto registerDto) {
        if (utilisateurRepository.existsByNom(registerDto.getUserName())) {
            return ResponseEntity.badRequest().body(new AuthResponseDto(null));
        }

        // Create new user
        Utilisateur utilisateur = new Utilisateur();
        utilisateur.setNom(registerDto.getUserName());
        utilisateur.setMotDePasse(passwordEncoder.encode(registerDto.getPassword()));
        utilisateur.setEmail(registerDto.getEmail());
        utilisateur.setRole(registerDto.getRole());

        // Assign role to user
        Role role = roleRepository.findByName("User").orElseThrow(() -> new RuntimeException("Role not found"));
        utilisateur.setRoles(Collections.singletonList(role));

        // Save user to repository
        utilisateurRepository.save(utilisateur);

        // Authenticate the user automatically after registration
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(registerDto.getUserName(), registerDto.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);

        // Generate JWT token
        String token = jwtConfig.generateToken(authentication);

        // Return the JWT token as part of the response
        return ResponseEntity.ok(new AuthResponseDto(token));
    }

    @PostMapping("Login")
    public ResponseEntity<AuthResponseDto> Login(@RequestBody LoginDto loginDto) {
        Authentication authentication = authenticationManager
                .authenticate(new UsernamePasswordAuthenticationToken(loginDto.getUserName(), loginDto.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String token = jwtConfig.generateToken(authentication);
        return ResponseEntity.ok(new AuthResponseDto(token));

    }

}
