import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {

    const location = useLocation();

    return (
        <nav className="navbar">

            <Link to="/" className="logo">
                👥 Employee Portal
            </Link>

            <div className="menu">

                <Link
                    to="/"
                    className={
                        location.pathname === "/"
                            ? "menu-link active"
                            : "menu-link"
                    }
                >
                    🏠 Home
                </Link>

                <Link
                    to="/add"
                    className={
                        location.pathname === "/add"
                            ? "menu-link active"
                            : "menu-link"
                    }
                >
                    ➕ Add Employee
                </Link>

                <Link
                    to="/update"
                    className={
                        location.pathname.startsWith("/update")
                            ? "menu-link active"
                            : "menu-link"
                    }
                >
                    ✏️ Update
                </Link>

                <Link
                    to="/delete"
                    className={
                        location.pathname.startsWith("/delete")
                            ? "menu-link active"
                            : "menu-link"
                    }
                >
                    🗑️ Delete
                </Link>

            </div>

            <div className="welcome">
                👤 Welcome
            </div>

        </nav>
    );
}

export default Navbar;