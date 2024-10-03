package com.actvn.learnspringboot.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

import java.time.LocalDate;

@Entity(name = "bidv")
public class SaoKeEntity {
    @Id
    private int id;
    private LocalDate date;
    private String money;
    private String description;

    public SaoKeEntity() {
    }
    public SaoKeEntity(int id, LocalDate date, String money, String description) {
        this.id = id;
        this.date = date;
        this.money = money;
        this.description = description;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public String getMoney() {
        return money;
    }

    public void setMoney(String money) {
        this.money = money;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
