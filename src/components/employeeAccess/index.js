import React, {Component} from 'react';

class EmployeeAccess extends Component {
    render(){
        return(
            <div id="employee">
                <div className="container" >
                <div className="row">
                    <div className="col-sm-12">
                        <div className="">
                            <div className="form-set width2">
                                <label className="mb-0">Add Form</label>
                                <select>
                                    <option>Select Form</option>
                                    <option>Test1</option>
                                    <option>Test2</option>
                                </select>
                            </div>
                            <div className="d-flex d-md-inline-flex">
                                <div className="employeebox">
                                    <h4>Build Form</h4>
                                    <i className="fa fa-times"/>
                                </div>
                                <div className="employeebox">
                                    <h4>Review Form</h4>
                                    <i className="fa fa-times"/>
                                </div>
                                <div className="employeebox">
                                    <h4>Time Sheet Entry</h4>
                                    <i className="fa fa-times"/>
                                </div>
                                <div className="employeebox">
                                    <h4>Admin Panel</h4>
                                    <i className="fa fa-times"/>
                                </div>
                                <div className="employeebox">
                                    <h4>Search Builds</h4>
                                    <i className="fa fa-times"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-3">
                                    <div className="form-set">
                                        <label className="mb-0">User List</label>
                                        <select>
                                            <option>Select Form</option>
                                            <option>Test1</option>
                                            <option>Test2</option>
                                        </select>
                                    </div>
                                    </div>
                                <div className="col-sm-3">
                                    <div className="form-set">
                                        <label className="mb-0">Action List</label>
                                        <select>
                                            <option>Select Form</option>
                                            <option>Test1</option>
                                            <option>Test2</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
export default EmployeeAccess;