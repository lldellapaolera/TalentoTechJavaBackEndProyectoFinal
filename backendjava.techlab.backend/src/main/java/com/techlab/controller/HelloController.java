package com.techlab.controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping("hello")
    public String Hello(){
        return "Hola mundo clase 12!";
    }
}
