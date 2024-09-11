package com.example.demo.dtos.entreestock;

import java.util.Date;
import lombok.Data;

@Data
public class CreateEntreeStockDto {
    private Long articleId;
    private int quantite;
    private Date date;
    private Long fournisseurId;

}
