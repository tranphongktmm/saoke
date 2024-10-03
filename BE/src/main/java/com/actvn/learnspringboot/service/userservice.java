package com.actvn.learnspringboot.service;

import com.actvn.learnspringboot.dto.requests.UserUpdateRequest;
import com.actvn.learnspringboot.dto.requests.userrequest;
import com.actvn.learnspringboot.entity.userentity;
import com.actvn.learnspringboot.repository.userrepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class userservice {
    @Autowired
    private userrepository UserRepository;

    public userentity createUser(userrequest request) {
        userentity user = new userentity();
        user.setUsername(request.getUsername());
        user.setPassword(request.getPassword());
        user.setFirstname(request.getFirstname());
        user.setLastname(request.getLastname());
        user.setBirth(request.getBirth());
        user.setAddress(request.getAddress());

        return UserRepository.save(user);
    }

    public List<userentity> getUsers(){
        return UserRepository.findAll();
    }

    public userentity getUser(String id){
        return UserRepository.findById(id).orElseThrow(() -> new RuntimeException("user not found"));
    }

    public userentity updateUser(String id, UserUpdateRequest request){
        userentity user = getUser(id);
        user.setPassword(request.getPassword());
        user.setFirstname(request.getFirstname());
        user.setLastname(request.getLastname());
        user.setBirth(request.getBirth());
        user.setAddress(request.getAddress());
        return UserRepository.save(user);
    }

    public void deleteUser(String id){
        UserRepository.deleteById(id);
    }
}
