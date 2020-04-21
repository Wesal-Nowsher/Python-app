import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Sidebar extends Component {
    render(){
        return(
        <div className="container-fluid">
            <div className="row ">
                <div className="col-sm-2    sidebarr">
                    <div className="d-flex flex-column">
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

                    </div>
                </div>
            </div>
        </div>
        )
    }
}
export default Sidebar;