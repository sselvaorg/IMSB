package com.example.demo.dtos.sortiestock;

import java.util.Date;

import lombok.Data;

@Data
public class UpdateSortieStockDto {
    private int quantite;
    private Date date;
    private String destination;
}
