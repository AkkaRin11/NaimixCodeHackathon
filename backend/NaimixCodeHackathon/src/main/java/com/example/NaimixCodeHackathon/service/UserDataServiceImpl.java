package com.example.NaimixCodeHackathon.service;

import com.example.NaimixCodeHackathon.domain.UserData;
import com.example.NaimixCodeHackathon.repository.UserDataRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class UserDataServiceImpl implements UserDataService{
    private final UserDataRepository userDataRepository;
    @Override
    public void insert(UserData userData) {
        userDataRepository.save(userData);
    }

    @Override
    public UserData getById(UUID id) {
        return userDataRepository.findById(id).get();
    }


    @Override
    public void deleteById(UUID id) {
        userDataRepository.deleteById(id);
    }

}
