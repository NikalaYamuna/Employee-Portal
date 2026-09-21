import React from "react";

import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import Navbar from "./components/Navbar";

import EmployeeList from "./components/EmployeeList";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeDetails from "./components/EmployeeDetails";
import EditEmployee from "./components/EditEmployee";
import DeleteEmployee from "./components/DeleteEmployee";

import "./App.css";

function App() {

    return (
        <Router>

            <Navbar />

            <Routes>

                <Route
                    path="/"
                    element={<EmployeeList />}
                />

                <Route
                    path="/add"
                    element={<EmployeeForm />}
                />

                <Route
                    path="/employee/:id"
                    element={<EmployeeDetails />}
                />

                <Route
                    path="/update"
                    element={<EditEmployee />}
                />

                <Route
                    path="/update/:id"
                    element={<EditEmployee />}
                />

                <Route
                    path="/delete"
                    element={<DeleteEmployee />}
                />

                <Route
                    path="/delete/:id"
                    element={<DeleteEmployee />}
                />

            </Routes>

            <footer>
                © 2026 Employee Portal | Built with React
            </footer>

        </Router>
    );
}

export default App;