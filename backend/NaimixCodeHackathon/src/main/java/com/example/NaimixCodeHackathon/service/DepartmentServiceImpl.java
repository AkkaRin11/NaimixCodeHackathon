package com.example.NaimixCodeHackathon.service;

import com.example.NaimixCodeHackathon.domain.Department;
import com.example.NaimixCodeHackathon.repository.DepartmentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class DepartmentServiceImpl implements DepartmentService{
    private final DepartmentRepository departmentRepository;
    @Override
    public void insert(Department department) {
        departmentRepository.save(department);
    }

    @Override
    public Department getById(UUID id) {
        return departmentRepository.findById(id).get();
    }

    @Override
    public void deleteById(UUID id) {
        departmentRepository.deleteById(id);
    }
}
