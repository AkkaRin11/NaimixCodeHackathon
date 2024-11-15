package com.example.NaimixCodeHackathon.service;

import com.example.NaimixCodeHackathon.domain.User;
import com.example.NaimixCodeHackathon.repository.UserDataRepository;
import com.example.NaimixCodeHackathon.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService{
    private final UserRepository userRepository;
    @Override
    public void insert(User user) {
        userRepository.save(user);
    }

    @Override
    public List<User> getAll() {
        return userRepository.findAll();
    }

    @Override
    public User getById(UUID id) {
        return userRepository.findById(id).get();
    }

    @Override
    public void deleteById(UUID id) {
        userRepository.deleteById(id);
    }

}
