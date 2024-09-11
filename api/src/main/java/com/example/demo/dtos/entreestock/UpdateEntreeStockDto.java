package com.example.demo.dtos.entreestock;

import java.util.Date;

import lombok.Data;

@Data
public class UpdateEntreeStockDto {
    private int quantite;
    private Date date;
}
