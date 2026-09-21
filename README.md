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

## Employee Details

The application manages:

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
│   │   │   └── java
│   │   │       └── com.vcube.empportal
│   │   │           ├── controller
│   │   │           ├── model
│   │   │           ├── repo
│   │   │           ├── service
│   │   │           └── EmpportalApplication.java
│   │   └── test
│   ├── pom.xml
│   └── mvnw
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
    │   ├── api.js
    │   ├── App.js
    │   └── App.css
    ├── package.json
    └── package-lock.json

## How to Run the Project

### Backend - Spring Boot

1. Open the Spring Boot project in Eclipse.

2. Make sure MySQL is running.

3. Configure the MySQL database in:

`src/main/resources/application.properties`

4. Run the Spring Boot application.

Backend URL:

`http://localhost:9999`

### Frontend - React

1. Open the React project in Visual Studio Code.

2. Open the terminal in the React project folder.

3. Install the required packages:

```bash
npm install


Start the React application:
'''bash
npm start

Frontend URL:

http://localhost:3000

How the Application Works

The application works in the following way:

React.js Frontend
↓
Axios
↓
Spring Boot REST API
↓
Spring Data JPA
↓
MySQL Database

CRUD Operations
Create Employee
View Employee
Update Employee
Delete Employee
Database

The application uses MySQL to store employee information.

Employee fields:

Employee ID (eid)
Employee Name (ename)
Salary (salary)
Age (age)
City (city)
State (state)
Important Note

The Spring Boot backend must be running before using the React frontend.

Make sure:

MySQL is running
Spring Boot is running on port 9999
React is running on port 3000

## Author

**Nikala Yamuna**

GitHub: https://github.com/NikalaYamuna

