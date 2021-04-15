import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { PostMentorData } from "./api";

export default function Mentor() {

    let [mname, setmname] = useState("");
    let [sub, setsub] = useState("");

    let userData = { mname, sub }

    let history = useHistory();
    function handleClick() {
        history.push("/viewmentor");
      }

    return (
        <>
            <form onSubmit={async (e) => {
                e.preventDefault();
                await PostMentorData(userData);
                setmname("");
                setsub("");
                handleClick();
            }}>
                <div className="container">
                    <div className="row mt-5">
                        <div class="form-group col-lg-4">
                            <input type="text" class="form-control" placeholder="Enter Mentor Name" value={mname} onChange={(e) => {
                                setmname(e.target.value);
                            }} />
                        </div>
                        <div class="form-group col-lg-4">
                            <input type="text" class="form-control" placeholder="Enter Subject" value={sub} onChange={(e) => {
                                setsub(e.target.value);
                            }} />
                        </div>
                    </div>
                    <button class="btn btn-outline-primary col-lg-4 offset-2">Add Mentor</button>
                </div>
            </form>
        </>
    )

}