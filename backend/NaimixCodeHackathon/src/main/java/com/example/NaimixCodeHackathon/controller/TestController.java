package com.example.NaimixCodeHackathon.controller;

import com.example.NaimixCodeHackathon.dto.TestDTO;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1")
public class TestController {
    @GetMapping("/test/{str}")
    public TestDTO uploadFile(@PathVariable String str){
        return new TestDTO("hi " + str);
    }
}
