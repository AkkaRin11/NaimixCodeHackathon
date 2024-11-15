package com.example.NaimixCodeHackathon.service;
import com.example.NaimixCodeHackathon.domain.UserData;

import java.util.List;
import java.util.UUID;

public interface UserDataService {
    void insert(UserData userData);
    UserData getById(UUID id);
    void deleteById(UUID id);
}
