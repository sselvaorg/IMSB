package com.example.demo.dtos.dashboard;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class StockEntryProgressDto {
    private String month;
    private int totalQuantite;
}
