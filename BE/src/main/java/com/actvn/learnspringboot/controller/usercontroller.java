package com.actvn.learnspringboot.controller;

import com.actvn.learnspringboot.dto.requests.UserUpdateRequest;
import com.actvn.learnspringboot.dto.requests.userrequest;
import com.actvn.learnspringboot.dto.responses.helloworldresponses;
import com.actvn.learnspringboot.entity.userentity;
import com.actvn.learnspringboot.service.userservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class usercontroller {
    @Autowired
    private userservice UserService;

    @PostMapping("/users")
    public userentity getusers(@RequestBody userrequest request){
        return UserService.createUser(request);
    }

    @GetMapping("/users")
    public List<userentity> getUsers(){
        return UserService.getUsers();
    }

    @GetMapping("/users/{userid}")
    public userentity getUser(@PathVariable("userid") String userid){
        return UserService.getUser(userid);
    }

    @PutMapping("/users/{userid}")
    public userentity updateUser(@PathVariable String userid,@RequestBody UserUpdateRequest updateRequest) {
        return UserService.updateUser(userid,updateRequest);
    }

    @DeleteMapping("/users/{userid}")
    public String delete(@PathVariable String userid,helloworldresponses response){
        UserService.deleteUser(userid);
        response.setMessage("user has deleted !!");
        return response.getMessage();
    }
}
