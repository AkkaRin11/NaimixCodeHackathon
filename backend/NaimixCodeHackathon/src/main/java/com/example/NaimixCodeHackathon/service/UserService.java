package com.example.NaimixCodeHackathon.service;
import com.example.NaimixCodeHackathon.domain.User;

import java.util.List;
import java.util.UUID;

public interface UserService {
    void insert(User user);
    List<User> getAll();
    User getById(UUID id);
    void deleteById(UUID id);
}
