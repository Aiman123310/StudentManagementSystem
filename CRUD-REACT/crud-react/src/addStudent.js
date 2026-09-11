import React from 'react';
import { Form, Button } from "react-bootstrap";
import axios from 'axios';

function AddStudent() {
    const [formData, setFormData] = React.useState({
        id: "",
        name: "",
        dept: "",
        age: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        const response = await axios.post('http://localhost:8080/addStudent', formData)
            .then(
                alert("Student added successfully")
            ).catch(
                alert("Error adding student")
            )
        // You can add your logic to send the formData to the server or perform any other action here.
    }

    return (
        <>
            <h1>Add Student</h1>

            <Form onSubmit={handleSubmit}>
                {/* id */}
                <Form.Group className="mb-3" >
                    <Form.Label>id</Form.Label>
                    <Form.Control type="text" placeholder="id" name="id" onChange={handleChange} />
                </Form.Group>

                <br></br>
                {/* Name */}
                <Form.Group className="mb-3" >
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name : " name="name" onChange={handleChange} />
                </Form.Group>

                <br></br>
                {/* Age */}
                <Form.Group className="mb-3" controlId="formAge">
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="number" placeholder="Enter age" name="age" onChange={handleChange} />
                </Form.Group>

                <br></br>
                <br></br>
                {/* Department */}
                <Form.Group className="mb-3" >
                    <Form.Label>Department</Form.Label>
                    <Form.Control type="text" placeholder="Enter department" name="dept" onChange={handleChange} />
                </Form.Group>


                {/* Submit Button */}
                <Form.Group className="mb-3" >
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form.Group>
            </Form>

        </>
    );
}

export default AddStudent;
