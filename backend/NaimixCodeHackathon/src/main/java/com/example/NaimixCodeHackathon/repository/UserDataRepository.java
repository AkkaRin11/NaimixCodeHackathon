package com.example.NaimixCodeHackathon.repository;

import com.example.NaimixCodeHackathon.domain.UserData;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface UserDataRepository extends JpaRepository<UserData, UUID> {
}
