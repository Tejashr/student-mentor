import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { GetStudentById, GetStudentData, GetMentorById, UpdateMentorById, DeleteStudentById } from "./api";

export default function Viewstudents(props) {

    console.log(props.match.params.id);

    let [userData, setuserData] = useState([])

    let history = useHistory();
    function handleClick() {
        history.push("/viewmentor");
    }

    useEffect(async () => {
        let users = await GetStudentData();
        setuserData(...userData, users.data)
        console.log("Mounted")
    }, [])

    return (
        <>
            <div class="table-responsive">
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <th>Student Name</th>
                            <th>Age</th>
                            <th>Add Student</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userData.map((user, index) => {
                                return (
                                    <tr>
                                        <td>{user.sname}</td>
                                        <td>{user.age}</td>
                                        <td><button className="btn btn-primary btn-sm" onClick={async () => {
                                            let stud = await GetStudentById(user._id);
                                            let ment = await GetMentorById(props.match.params.id);
                                            ment.data.student.push(stud.data.sname)
                                            let mentdata = { mname: ment.data.mname, sub: ment.data.sub, student: ment.data.student }
                                            await UpdateMentorById(props.match.params.id, mentdata);
                                            await DeleteStudentById(user._id);
                                            handleClick();
                                        }}><i class="fas fa-user"></i>
                                            <span>add student</span></button></td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>
        </>
    )

}