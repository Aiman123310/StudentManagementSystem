package com.crudAPI.example.CRUD_Operations.service;

import com.crudAPI.example.CRUD_Operations.entity.Students;
import com.crudAPI.example.CRUD_Operations.repository.StudentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {

    @Autowired
    private StudentRepo studentRepo;

    public Students addStudent(Students students){
        return  studentRepo.save(students);
    }

    public List<Students>getAllStudents(){
        return studentRepo.findAll();
    }

    public  Students updateStudent(Students updateStudent){
        Students student= studentRepo.getReferenceById(updateStudent.getId());
        student.setAge(updateStudent.getAge());
        student.setDept(updateStudent.getDept());
        student.setName(updateStudent.getName());

        return  studentRepo.save(student);
    }
    public Boolean deleteStudent(int id) {
        if (studentRepo.existsById(id)) {
            studentRepo.deleteById(id);
            return true;   // deleted successfully
        } else {
            return false;  // nothing to delete
        }
    }



}
