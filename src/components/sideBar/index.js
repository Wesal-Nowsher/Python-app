import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SideBar extends Component {


    render() {
        
        return (
            <div className="col-sm-2 pl-0 " >
                <div className="sidenav">
                    <Link to="/login">Login</Link>
                    <Link to="/selectDatabase">Select DataBase</Link>
                    <Link to="/createuser">Create User</Link>
                    <Link to="/employeeaccess">Employee Access</Link>
                    <Link to="/useractivity">User Activity</Link>
                    <Link to="/currentopenview">Current Open View</Link>
                    <Link to="/maintaincomments">Maintain Comments</Link>
                    <Link to="/maintainactivity">Maintain Activity</Link>
                    <Link to="/batchprint">Batch Print</Link>
                    <Link to="/individualprint">Individual Print</Link>
                    <Link to="/maintainsetting">Maintain Setting</Link>
                    <Link to="/weeklybuild">Weekly Build</Link>
                    <Link to="/openweeklybuild">Open Weekly Build</Link>
                    <Link to="/pendingreview">Pending Review</Link>
                    <Link to="/builddetailsview">Build Details View</Link>
                    <Link to="/emailprint">Email Print</Link>
                    <Link to="/reviewform">Review Form</Link>
                    <Link to="/timeregistration">Time Registration</Link>
                    <Link to="/managepatch">Manage Patch</Link>
                    <Link to="/recentapplication">Recent Application</Link>
                    <Link to="/excelfile">Excel File</Link>
                    <Link to="/timeregistrationform">Time Reg Form</Link>
                    <Link to="/timeregistrationformtwo">Time Reg Form 2</Link>
                    <Link to="/builddetailsform">Build Det Form</Link>
                </div>
            </div>
        )
    }
}
export default SideBar;
