import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteEmployee } from "../api";

function DeleteEmployee() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [eid, setEid] = useState(id || "");
    const [deleting, setDeleting] = useState(false);

    const handleDelete = () => {

        if (!eid) {
            alert("Please enter Employee ID");
            return;
        }

        const confirmDelete = window.confirm(
            "Are you sure you want to delete Employee ID " +
            eid +
            "?"
        );

        if (!confirmDelete) {
            return;
        }

        setDeleting(true);

        deleteEmployee(eid)
            .then(() => {

                alert("Employee deleted successfully");

                navigate("/");
            })
            .catch((error) => {

                console.error("Error deleting employee:", error);

                alert("Unable to delete employee");

                setDeleting(false);
            });
    };

    return (
        <div className="form-container">

            <h1>Delete Employee</h1>

            <p>
                Enter the Employee ID you want to delete.
            </p>

            <label>Employee ID</label>

            <input
                type="number"
                value={eid}
                onChange={(e) => setEid(e.target.value)}
                placeholder="Enter Employee ID"
            />

            <div className="form-buttons">

                <button
                    type="button"
                    className="delete-button-large"
                    onClick={handleDelete}
                    disabled={deleting}
                >
                    {deleting
                        ? "Deleting..."
                        : "🗑️ Delete Employee"}
                </button>

                <button
                    type="button"
                    className="cancel-button"
                    onClick={() => navigate("/")}
                    disabled={deleting}
                >
                    Cancel
                </button>

            </div>

            <p className="delete-warning">
                ⚠️ This action cannot be undone.
            </p>

        </div>
    );
}

export default DeleteEmployee;