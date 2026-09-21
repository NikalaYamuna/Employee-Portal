import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getEmployee } from "../api";

function EmployeeDetails() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [employee, setEmployee] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        setLoading(true);
        setError("");

        getEmployee(id)
            .then((response) => {
                setEmployee(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error loading employee:", error);
                setError("Unable to load employee details.");
                setLoading(false);
            });

    }, [id]);

    if (loading) {
        return (
            <div className="details-container">

                <h1>Employee Details</h1>

                <div className="message-box">
                    <h2>Loading Employee...</h2>
                    <p>Please wait while the employee details are loaded.</p>
                </div>

                <button
                    className="back-button"
                    onClick={() => navigate("/")}
                >
                    ← Back to Employee List
                </button>

            </div>
        );
    }

    if (error || !employee) {
        return (
            <div className="details-container">

                <h1>Employee Details</h1>

                <div className="message-box error-message">

                    <h2>Employee Not Found</h2>

                    <p>
                        {error || "Unable to find this employee."}
                    </p>

                </div>

                <button
                    className="back-button"
                    onClick={() => navigate("/")}
                >
                    ← Back to Employee List
                </button>

            </div>
        );
    }

    return (
        <div className="details-container">

            <h1>Employee Details</h1>

            <p>
                Complete information about the selected employee.
            </p>

            <div className="details-card">

                <div className="detail-row">
                    <strong>Employee ID</strong>
                    <span>{employee.eid}</span>
                </div>

                <div className="detail-row">
                    <strong>Employee Name</strong>
                    <span>{employee.ename}</span>
                </div>

                <div className="detail-row">
                    <strong>Salary</strong>
                    <span>{employee.salary}</span>
                </div>

                <div className="detail-row">
                    <strong>Age</strong>
                    <span>{employee.age}</span>
                </div>

                <div className="detail-row">
                    <strong>City</strong>
                    <span>{employee.city}</span>
                </div>

                <div className="detail-row">
                    <strong>State</strong>
                    <span>{employee.state}</span>
                </div>

            </div>

            <div className="details-actions">

                <Link
                    to={`/update/${employee.eid}`}
                    className="edit-button"
                >
                    ✏️ Edit Employee
                </Link>

                <button
                    className="back-button"
                    onClick={() => navigate("/")}
                >
                    ← Back to Employee List
                </button>

            </div>

        </div>
    );
}

export default EmployeeDetails;