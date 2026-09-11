package com.crudAPI.example.CRUD_Operations.repository;

import com.crudAPI.example.CRUD_Operations.entity.Students;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepo  extends JpaRepository<Students,Integer> {
}
