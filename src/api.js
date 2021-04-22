import axios from "axios";

export function PostStudentData(data){
    return axios.post(`https://studentmentornode.herokuapp.com/student`,data)
}

export function PostMentorData(data){
    return axios.post(`https://studentmentornode.herokuapp.com/mentor`,data)
}

export function GetMentorData(){
    return axios.get(`https://studentmentornode.herokuapp.com/mentors`)
}

export function GetStudentData(){
    return axios.get(`https://studentmentornode.herokuapp.com/students`)
}

export function GetStudentById(id){
    return axios.get(`https://studentmentornode.herokuapp.com/student/${id}`)
}

export function GetMentorById(id){
    return axios.get(`https://studentmentornode.herokuapp.com/mentor/${id}`)
}

export function UpdateMentorById(id,data){
    return axios.put(`https://studentmentornode.herokuapp.com/mentor/${id}`,data)
}

export function DeleteStudentById(id){
    return axios.delete(`https://studentmentornode.herokuapp.com/student/${id}`)
}