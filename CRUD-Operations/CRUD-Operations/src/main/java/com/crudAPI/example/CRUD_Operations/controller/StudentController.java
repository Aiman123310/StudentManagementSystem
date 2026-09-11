package com.crudAPI.example.CRUD_Operations.controller;

import com.crudAPI.example.CRUD_Operations.entity.Students;
import com.crudAPI.example.CRUD_Operations.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class StudentController {

    @Autowired
    private StudentService studentService;

    @PostMapping("/addStudent")
    public Students addStudent( @RequestBody Students student){
        return  studentService.addStudent(student);
    }
    @GetMapping("/getStudents")
    public List<Students>getAllStudents(){
        return  studentService.getAllStudents();

    }

    @PostMapping("/updateStudent")
    public  Students updateStudent(@RequestBody Students students){
        return  studentService.updateStudent(students);
    }

    @GetMapping("/deleteStudent/{id}")
    public  Boolean deleteStudent(@PathVariable int id){
       return
                studentService.deleteStudent(id);
    }

}
