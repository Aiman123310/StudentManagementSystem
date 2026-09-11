import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";

function ViewStudents() {
    const [students, setStudents] = useState([]); // list of all students
    const [selectedStudent, setSelectedStudent] = useState({
        id: "",
        name: "",
        dept: "",
        age: ""
    }); // single student for editing
    const [isFormOpen, setIsFormOpen] = useState(false);

    useEffect(() => {
        fetchStudents();
    }, []);

    const fetchStudents = async () => {
        const baseURL = "http://localhost:8080/getStudents";
        const response = await axios.get(baseURL);
        setStudents(response.data);
    };

    const deleteStudent = async (id) => {
        const baseURL = `http://localhost:8080/deleteStudent/${id}`;
        await axios.delete(baseURL); // DELETE request
        fetchStudents();
    };

    const handleUpdate = (student) => {
        setSelectedStudent(student); // set the whole student object
        setIsFormOpen(true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSelectedStudent({
            ...selectedStudent,
            [name]: value
        });
    };

    const updateStudent = async (e) => {
        e.preventDefault();
        const baseURL = `http://localhost:8080/updateStudent`;
        await axios.post(baseURL, selectedStudent);
        setIsFormOpen(false);
        fetchStudents();
    };

    return (
        <>
            <h1>Students List</h1>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>age</th>
                        <th>department</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => (
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.dept}</td>
                            <td>
                                <button onClick={() => deleteStudent(student.id)}>Delete</button>
                                <button onClick={() => handleUpdate(student)}>Update</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {isFormOpen && (
                <Form onSubmit={updateStudent}>
                    <Form.Group className="mb-3">
                        <Form.Label>Id</Form.Label>
                        <Form.Control
                            type="text"
                            name="id"
                            value={selectedStudent.id}
                            onChange={handleChange}
                            readOnly
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            value={selectedStudent.name}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Age</Form.Label>
                        <Form.Control
                            type="number"
                            name="age"
                            value={selectedStudent.age}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Department</Form.Label>
                        <Form.Control
                            type="text"
                            name="dept"
                            value={selectedStudent.dept}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Update Student
                    </Button>
                </Form>
            )}
        </>
    );
}

export default ViewStudents;
