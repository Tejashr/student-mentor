import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GetMentorData } from "./api";

export default function Viewmentor() {

    let [userData, setuserData] = useState([])

    useEffect(async () => {
        let users = await GetMentorData();
        setuserData(...userData, users.data)
        console.log("Mounted")
    }, [])

    return (
        <>
            <div class="table-responsive">
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <th>Mentor Name</th>
                            <th>Subject</th>
                            <th>Add Student</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userData.map((user, index) => {
                                return (
                                    <tr>
                                        <td>{user.mname}</td>
                                        <td>{user.sub}</td>
                                        <td><Link to={`/viewstudents/${user._id}`}>Add Students</Link></td>
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