import axios from "axios";

const BASE_URL = "http://localhost:9999";

export const getAllEmployees = () => {
    return axios.get(`${BASE_URL}/getEmpList`);
};

export const getEmployee = (eid) => {
    return axios.get(`${BASE_URL}/getEmp/${eid}`);
};

export const createEmployee = (employee) => {
    return axios.post(`${BASE_URL}/createEmp`, employee);
};

export const updateEmployee = (eid, employee) => {
    return axios.put(`${BASE_URL}/updateEmp/${eid}`, employee);
};

export const deleteEmployee = (eid) => {
    return axios.delete(`${BASE_URL}/delEmp/${eid}`);
};