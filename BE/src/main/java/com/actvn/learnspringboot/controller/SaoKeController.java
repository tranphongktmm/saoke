package com.actvn.learnspringboot.controller;

import com.actvn.learnspringboot.dto.requests.SaoKeRequest;
import com.actvn.learnspringboot.entity.SaoKeEntity;
import com.actvn.learnspringboot.service.SaoKeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@RestController
public class SaoKeController {
    @Autowired
    private SaoKeService saoKeService;

    @PostMapping("/bidv")
    public SaoKeEntity create (@RequestBody SaoKeRequest request){
        return saoKeService.create(request);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/bidv")
    public List<SaoKeEntity> getListSaoke(){
        return saoKeService.getListSaoKe();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/bidv/search")
    public List<SaoKeEntity> getListSaokeParam(@RequestParam String search,
                                               @RequestParam(required = false) LocalDate startdate,
                                               @RequestParam(required = false) LocalDate enddate,
                                               @RequestParam(required = false) String follow,
                                               @RequestParam(required = false) String money,
                                               @RequestParam(required = false) String bank){
        return saoKeService.getSaoKeParam(search,startdate,enddate,follow,money,bank);
    }


    @PutMapping("/bidv/{id}")
    public SaoKeEntity saoKeUpdate(@PathVariable int id, @RequestBody SaoKeRequest request){
        return saoKeService.updateSaoKe(id,request);
    }

    @DeleteMapping("/bidv/{id}")
    public String deleteSaoKe(@PathVariable int id){
        saoKeService.deleteSaoKe(id);
        return "Deleted Success !!";
    }

}
