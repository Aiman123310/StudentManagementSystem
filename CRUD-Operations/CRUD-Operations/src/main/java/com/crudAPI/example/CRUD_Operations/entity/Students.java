package com.crudAPI.example.CRUD_Operations.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Students {

    @Id
 //   @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  int id;

    private  String name;
    private int age;
    private  String dept;

    public  Students(){

    }

    public Students(int id, String name, String dept, int age) {
        this.id = id;
        this.name = name;
        this.dept = dept;
        this.age = age;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getDept() {
        return dept;
    }

    public void setDept(String dept) {
        this.dept = dept;
    }

}
