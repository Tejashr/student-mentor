import axios from "axios";

export function PostStudentData(data){
    return axios.post(`http://localhost:8000/student`,data)
}

export function PostMentorData(data){
    return axios.post(`http://localhost:8000/mentor`,data)
}

export function GetMentorData(){
    return axios.get(`http://localhost:8000/mentors`)
}

export function GetStudentData(){
    return axios.get(`http://localhost:8000/students`)
}

export function GetStudentById(id){
    return axios.get(`http://localhost:8000/student/${id}`)
}

export function GetMentorById(id){
    return axios.get(`http://localhost:8000/mentor/${id}`)
}

export function UpdateMentorById(id,data){
    return axios.put(`http://localhost:8000/mentor/${id}`,data)
}

export function DeleteStudentById(id){
    return axios.delete(`http://localhost:8000/student/${id}`)
}