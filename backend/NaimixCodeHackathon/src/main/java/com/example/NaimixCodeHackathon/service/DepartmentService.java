package com.example.NaimixCodeHackathon.service;
import com.example.NaimixCodeHackathon.domain.Department;

import java.util.UUID;

public interface DepartmentService {
    void insert(Department department);
    Department getById(UUID id);
    void deleteById(UUID id);
}
