import React from "react";
import { Link } from "react-router-dom";
function Sidebar() {
    return (
        <>
            <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">


                <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                    <div class="sidebar-brand-icon rotate-n-15">
                        <i class="fas fa-laugh-wink"></i>
                    </div>
                    <div class="sidebar-brand-text mx-3">CRUD</div>
                </a>


                <hr class="sidebar-divider my-0" />


                <li class="nav-item active">
                    <Link class="nav-link" to="/mentor">
                    <i class="fas fa-chalkboard-teacher"></i>
                        <span>Create Mentor</span></Link>
                </li>

                <li class="nav-item active">
                    <Link class="nav-link" to="/student">
                    <i class="far fa-user"></i>
                        <span>Create Student</span></Link>
                </li>

                <li class="nav-item active">
                    <Link class="nav-link" to="/viewmentor">
                    <i class="fas fa-chalkboard-teacher"></i>
                        <span>Mentors</span></Link>
                </li>
            </ul>
        </>
    )
}
export default Sidebar;