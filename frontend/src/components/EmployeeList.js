import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllEmployees, deleteEmployee } from "../api";

function EmployeeList() {

    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const loadEmployees = () => {

        setLoading(true);
        setError("");

        getAllEmployees()
            .then((response) => {
                setEmployees(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error loading employees:", error);
                setError("Unable to load employees.");
                setLoading(false);
            });
    };

    useEffect(() => {
        loadEmployees();
    }, []);

    const handleDelete = (eid) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this employee?"
        );

        if (!confirmDelete) {
            return;
        }

        deleteEmployee(eid)
            .then(() => {
                alert("Employee deleted successfully");
                loadEmployees();
            })
            .catch((error) => {
                console.error("Error deleting employee:", error);
                alert("Unable to delete employee");
            });
    };

    return (
        <div className="page-container">

            <div className="page-header">

                <div>
                    <h1>Employee List</h1>

                    <p>
                        View and manage all employees
                    </p>
                </div>

                <Link
                    to="/add"
                    className="add-button"
                >
                    ➕ Add Employee
                </Link>

            </div>

            <div className="table-container">

                {loading ? (

                    <div className="message-box">
                        <h2>Loading Employees...</h2>

                        <p>
                            Please wait while employee data is loaded.
                        </p>
                    </div>

                ) : error ? (

                    <div className="message-box error-message">

                        <h2>Unable to Load Employees</h2>

                        <p>
                            {error}
                        </p>

                        <button
                            className="submit-button"
                            onClick={loadEmployees}
                        >
                            🔄 Try Again
                        </button>

                    </div>

                ) : employees.length === 0 ? (

                    <div className="message-box">

                        <h2>No Employees Found</h2>

                        <p>
                            No employee records are available in the database.
                        </p>

                        <Link
                            to="/add"
                            className="add-button"
                        >
                            ➕ Add Employee
                        </Link>

                    </div>

                ) : (

                    <table>

                        <thead>

                            <tr>
                                <th>EID</th>
                                <th>Employee Name</th>
                                <th>Salary</th>
                                <th>Age</th>
                                <th>City</th>
                                <th>State</th>
                                <th>Actions</th>
                            </tr>

                        </thead>

                        <tbody>

                            {employees.map((employee) => (

                                <tr key={employee.eid}>

                                    <td>
                                        {employee.eid}
                                    </td>

                                    <td>
                                        {employee.ename}
                                    </td>

                                    <td>
                                        {employee.salary}
                                    </td>

                                    <td>
                                        {employee.age}
                                    </td>

                                    <td>
                                        {employee.city}
                                    </td>

                                    <td>
                                        {employee.state}
                                    </td>

                                    <td>

                                        <Link
                                            to={`/employee/${employee.eid}`}
                                            className="view-button"
                                        >
                                            👁️ View
                                        </Link>

                                        <Link
                                            to={`/update/${employee.eid}`}
                                            className="edit-button"
                                        >
                                            ✏️ Edit
                                        </Link>

                                        <button
                                            onClick={() =>
                                                handleDelete(employee.eid)
                                            }
                                            className="delete-button"
                                        >
                                            🗑️ Delete
                                        </button>

                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                )}

            </div>

        </div>
    );
}

export default EmployeeList;