import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getEmployee, updateEmployee } from "../api";

function EditEmployee() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [eid, setEid] = useState(id || "");

    const [employee, setEmployee] = useState({
        ename: "",
        salary: "",
        age: "",
        city: "",
        state: ""
    });

    const [loaded, setLoaded] = useState(false);
    const [loading, setLoading] = useState(false);

    const loadEmployee = (employeeId) => {

        if (!employeeId) {
            alert("Please enter Employee ID");
            return;
        }

        setLoading(true);

        getEmployee(employeeId)
            .then((response) => {

                const data = response.data;

                setEmployee({
                    ename: data.ename || "",
                    salary: data.salary || "",
                    age: data.age || "",
                    city: data.city || "",
                    state: data.state || ""
                });

                setEid(data.eid);
                setLoaded(true);
                setLoading(false);
            })
            .catch((error) => {

                console.error("Error loading employee:", error);

                alert("Employee not found");

                setLoaded(false);
                setLoading(false);
            });
    };

    useEffect(() => {

        if (id) {
            loadEmployee(id);
        }

    }, [id]);

    const handleChange = (e) => {

        setEmployee({
            ...employee,
            [e.target.name]: e.target.value
        });
    };

    const handleUpdate = (e) => {

        e.preventDefault();

        const employeeData = {
            ename: employee.ename,
            salary: Number(employee.salary),
            age: Number(employee.age),
            city: employee.city,
            state: employee.state
        };

        updateEmployee(eid, employeeData)
            .then(() => {

                alert("Employee updated successfully");

                navigate("/");
            })
            .catch((error) => {

                console.error("Error updating employee:", error);

                alert("Unable to update employee");
            });
    };

    return (
        <div className="form-container">

            <h1>Update Employee</h1>

            <p>
                Enter an Employee ID to load and update employee details.
            </p>

            {!id && !loaded && (

                <div>

                    <label>Employee ID</label>

                    <input
                        type="number"
                        value={eid}
                        onChange={(e) => setEid(e.target.value)}
                        placeholder="Enter Employee ID"
                    />

                    <button
                        type="button"
                        className="submit-button"
                        onClick={() => loadEmployee(eid)}
                        disabled={loading}
                    >
                        {loading
                            ? "Loading..."
                            : "🔍 Load Employee"}
                    </button>

                    <button
                        type="button"
                        className="cancel-button"
                        onClick={() => navigate("/")}
                    >
                        Cancel
                    </button>

                </div>
            )}

            {loaded && (

                <form onSubmit={handleUpdate}>

                    <label>Employee ID</label>

                    <input
                        type="number"
                        value={eid}
                        readOnly
                    />

                    <label>Employee Name</label>

                    <input
                        type="text"
                        name="ename"
                        value={employee.ename}
                        onChange={handleChange}
                        required
                    />

                    <label>Salary</label>

                    <input
                        type="number"
                        name="salary"
                        value={employee.salary}
                        onChange={handleChange}
                        required
                    />

                    <label>Age</label>

                    <input
                        type="number"
                        name="age"
                        value={employee.age}
                        onChange={handleChange}
                        required
                    />

                    <label>City</label>

                    <input
                        type="text"
                        name="city"
                        value={employee.city}
                        onChange={handleChange}
                        required
                    />

                    <label>State</label>

                    <input
                        type="text"
                        name="state"
                        value={employee.state}
                        onChange={handleChange}
                        required
                    />

                    <div className="form-buttons">

                        <button
                            type="submit"
                            className="submit-button"
                        >
                            ✏️ Update Employee
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

            )}

            {!id && !loaded && (
                <button
                    type="button"
                    className="back-button"
                    onClick={() => navigate("/")}
                >
                    ← Back to Employee List
                </button>
            )}

        </div>
    );
}

export default EditEmployee;