# Employee Portal

A full-stack Employee Management System built using **React.js** for the frontend and **Spring Boot** for the backend. The application uses REST APIs to perform CRUD operations on employee records stored in MySQL.

## Project Overview

The Employee Portal allows users to:

- View all employees
- View employee details
- Add a new employee
- Update employee information
- Delete an employee

## Technologies Used

### Frontend

- React.js
- React Router
- Axios
- HTML
- CSS
- JavaScript

### Backend

- Java
- Spring Boot
- Spring Data JPA
- REST API
- Maven

### Database

- MySQL

### Development Tools

- Eclipse IDE
- Visual Studio Code
- Git
- GitHub

## Employee Details

The application manages the following employee information:

- Employee ID (`eid`)
- Employee Name (`ename`)
- Salary (`salary`)
- Age (`age`)
- City (`city`)
- State (`state`)

## REST API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/getEmpList` | Get all employees |
| GET | `/getEmp/{id}` | Get employee by ID |
| POST | `/createEmp` | Create a new employee |
| PUT | `/updateEmp/{id}` | Update an employee |
| DELETE | `/delEmp/{id}` | Delete an employee |

## Application Structure

```text
Employee Portal
│
├── Backend - Spring Boot
│   ├── src
│   │   ├── main
│   │   │   ├── java
│   │   │   │   └── com.vcube.empportal
│   │   │   │       ├── controller
│   │   │   │       ├── model
│   │   │   │       ├── repo
│   │   │   │       ├── service
│   │   │   │       └── EmpportalApplication.java
│   │   │   │
│   │   │   └── resources
│   │   │       └── application.properties
│   │   │
│   │   └── test
│   │
│   ├── pom.xml
│   ├── mvnw
│   └── mvnw.cmd
│
└── Frontend - React
    ├── public
    ├── src
    │   ├── components
    │   │   ├── Navbar.js
    │   │   ├── EmployeeList.js
    │   │   ├── EmployeeForm.js
    │   │   ├── EmployeeDetails.js
    │   │   ├── EditEmployee.js
    │   │   └── DeleteEmployee.js
    │   │
    │   ├── api.js
    │   ├── App.js
    │   ├── App.css
    │   └── index.js
    │
    ├── package.json
    └── package-lock.json
```

## Backend Configuration

The Spring Boot backend uses the following configuration file:

```text
src/main/resources/application.properties
```

The application uses:

- MySQL database
- Spring Data JPA
- Port `9999`

The database username, password, and other configuration details should be configured according to the local MySQL setup.

## How the Application Works

The application works in the following way:

```text
User
  ↓
React.js Frontend
  ↓
Axios
  ↓
Spring Boot REST API
  ↓
Spring Data JPA
  ↓
MySQL Database
```

## CRUD Operations

The application supports the following CRUD operations:

### Create

Add a new employee to the database.

### Read

View all employees or view an individual employee.

### Update

Update existing employee information.

### Delete

Delete an employee from the database.

## How to Run the Project

### Backend - Spring Boot

1. Open the Spring Boot project in Eclipse.

2. Make sure MySQL is running.

3. Configure the MySQL database in:

```text
src/main/resources/application.properties
```

4. Run the Spring Boot application.

The backend will run on:

```text
http://localhost:9999
```

### Frontend - React

1. Open the React project in Visual Studio Code.

2. Open the terminal in the React project folder.

3. Install the required packages:

```bash
npm install
```

4. Start the React application:

```bash
npm start
```

The frontend will run on:

```text
http://localhost:3000
```

## Database

The application uses **MySQL** to store employee information.

Employee fields include:

- Employee ID (`eid`)
- Employee Name (`ename`)
- Salary (`salary`)
- Age (`age`)
- City (`city`)
- State (`state`)

## Important Note

The Spring Boot backend must be running before using the React frontend.

Make sure:

- MySQL is running
- Spring Boot is running on port `9999`
- React is running on port `3000`

## Security

Database credentials should be kept private.

The `application.properties` file contains database configuration and should not be uploaded to a public GitHub repository if it contains real passwords.

## Author

**Nikala Yamuna**

GitHub: https://github.com/NikalaYamuna
