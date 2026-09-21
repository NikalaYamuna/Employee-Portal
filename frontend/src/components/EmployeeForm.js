import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createEmployee } from "../api";

function EmployeeForm() {

    const navigate = useNavigate();

    const [employee, setEmployee] = useState({
        ename: "",
        salary: "",
        age: "",
        city: "",
        state: ""
    });

    const handleChange = (e) => {

        setEmployee({
            ...employee,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {

        e.preventDefault();

        const employeeData = {
            ename: employee.ename,
            salary: Number(employee.salary),
            age: Number(employee.age),
            city: employee.city,
            state: employee.state
        };

        createEmployee(employeeData)
            .then(() => {
                alert("Employee created successfully");
                navigate("/");
            })
            .catch((error) => {
                console.error("Error creating employee:", error);
                alert("Unable to create employee");
            });
    };

    return (
        <div className="form-container">

            <h1>Add Employee</h1>

            <p>
                Enter the employee details below.
            </p>

            <form onSubmit={handleSubmit}>

                <label>Employee Name</label>

                <input
                    type="text"
                    name="ename"
                    value={employee.ename}
                    onChange={handleChange}
                    placeholder="Enter employee name"
                    required
                />

                <label>Salary</label>

                <input
                    type="number"
                    name="salary"
                    value={employee.salary}
                    onChange={handleChange}
                    placeholder="Enter salary"
                    required
                />

                <label>Age</label>

                <input
                    type="number"
                    name="age"
                    value={employee.age}
                    onChange={handleChange}
                    placeholder="Enter age"
                    required
                />

                <label>City</label>

                <input
                    type="text"
                    name="city"
                    value={employee.city}
                    onChange={handleChange}
                    placeholder="Enter city"
                    required
                />

                <label>State</label>

                <input
                    type="text"
                    name="state"
                    value={employee.state}
                    onChange={handleChange}
                    placeholder="Enter state"
                    required
                />

                <div className="form-buttons">

                    <button
                        type="submit"
                        className="submit-button"
                    >
                        ➕ Create Employee
                    </button>

                    <button
                        type="button"
                        className="cancel-button"
                        onClick={() => navigate("/")}
                    >
                        Cancel
                    </button>

                </div>

            </form>

        </div>
    );
}

export default EmployeeForm;