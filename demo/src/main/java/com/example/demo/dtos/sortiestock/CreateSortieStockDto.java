package com.example.demo.dtos.sortiestock;

import java.util.Date;
import lombok.Data;

@Data
public class CreateSortieStockDto {
    private Long articleId;

    private int quantite;
    private Date date;
    private String destination;
}
