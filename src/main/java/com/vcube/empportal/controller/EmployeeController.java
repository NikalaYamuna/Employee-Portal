package com.vcube.empportal.controller;



import com.vcube.empportal.model.Employee; 



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.vcube.empportal.service.EmployeeService;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class EmployeeController {
	
	@Autowired
	EmployeeService employeeService;
	
	
	
    @GetMapping("/getEmpList")
	List<Employee> getAllEmployeeDetails(){
		return employeeService.getAllEmployeeDetails();
	}
    
    @GetMapping("/getEmp/{eid}")
    Employee getEmployee(@PathVariable Integer eid) {
    	return employeeService.getEmployee(eid);
    }
    
    
    @PostMapping("/createEmp")
    Employee createEmployee(@RequestBody Employee employee) {
    	return employeeService.createEmployee(employee);
    }
    
    @PutMapping("updateEmp/{eid}")

	 Employee updateEmployee(@RequestBody Employee employee,@PathVariable Integer eid) {
		 return employeeService.updateEmployee(employee, eid);
	 }
    
    @DeleteMapping("/delEmp/{eid}")
    String deleteEmployee(@PathVariable Integer eid) {
    	return employeeService.deleteEmployee(eid);
    
    }
   
}  
