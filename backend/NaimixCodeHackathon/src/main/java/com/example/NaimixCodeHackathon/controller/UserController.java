package com.example.NaimixCodeHackathon.controller;

import com.example.NaimixCodeHackathon.dto.UserDTO;
import com.example.NaimixCodeHackathon.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import com.example.NaimixCodeHackathon.dto.UserDTO;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/v1")
public class UserController {
    private final UserService userService;
    @GetMapping("/user")
    public List<UserDTO> getAllUser(){
        return userService
                .getAll()
                .stream()
                .map(UserDTO::toDTO)
                .collect(Collectors.toList());
    }
}
