package com.actvn.learnspringboot.controller;

import com.actvn.learnspringboot.dto.requests.helloworldrequests;
import com.actvn.learnspringboot.dto.responses.helloworldresponses;
import org.springframework.web.bind.annotation.*;

@RestController
public class HelloWorldController {

    @GetMapping("hello")
    public helloworldresponses getHello() {
        return new helloworldresponses("Hello World");
    }

    @GetMapping("hello/{name}")
    public helloworldresponses detailHello(@PathVariable String name) {
        return new helloworldresponses("Hello " +name +"!");
    }

    @PostMapping("hello")
    public helloworldresponses postHello(@RequestBody helloworldrequests request) {
        return new helloworldresponses( "Hello" + request.getData());
    }
}
