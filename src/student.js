import { useState } from "react";
import { PostStudentData } from "./api";

export default function Student() {

    let [sname, setsname] = useState("");
    let [age, setage] = useState("");
    
    let userData ={sname,age}

    return (
        <>
            <form onSubmit={async (e)=>{
                    e.preventDefault();
                    await PostStudentData(userData);
                    setsname("");
                    setage("");
                    // handleClick();
                }}>
                <div className="container">
                    <div className="row mt-5">
                        <div class="form-group col-lg-4">
                            <input type="text" class="form-control" placeholder="Enter Student Name" value={sname} onChange={(e) => {
                                setsname(e.target.value);
                            }} />
                        </div>
                        <div class="form-group col-lg-4">
                            <input type="number" class="form-control" placeholder="Enter Student age" value={age} onChange={(e) => {
                                setage(e.target.value);
                            }} />
                        </div>
                    </div>
                    <button class="btn btn-outline-primary col-lg-4 offset-2">Add Student</button>
                </div>
            </form>
        </>
    )

}