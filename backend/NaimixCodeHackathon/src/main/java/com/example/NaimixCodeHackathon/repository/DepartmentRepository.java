package com.example.NaimixCodeHackathon.repository;

import com.example.NaimixCodeHackathon.domain.Department;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface DepartmentRepository extends JpaRepository<Department, UUID> {
}
