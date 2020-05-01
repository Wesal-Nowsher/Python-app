import React, { Component } from 'react';
import { connect } from "react-redux";

class UserActivity extends Component {
    render() {
        return (
            <div >
                <div className="container-fluid" >
                    <div className="row table-head">
                        <div className="col-sm-3">
                            <div className="lab-inp">
                                <label className="mb-0">Search</label>
                                <div className="position-relative-search">
                                    <input type="text" className=" w-auto"/>
                                    <i className="fa fa-search" />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="lab-inp">
                                <label className="mb-0">Employee ID</label>
                                <div className="position-relative-search">
                                    <input type="text" className=" w-auto"/>
                                    <i className="fa fa-search" />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="lab-inp">
                                <label className="mb-0">Date From</label>
                                <div className="position-relative-search">
                                    <input type="date" className=" w-auto" />
                                    <i className="fa fa-calendar" />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="lab-inp">
                                <label className="mb-0">Date To</label>
                                <div className="position-relative-search">
                                    <input type="date" className=" w-auto" />
                                    <i className="fa fa-calendar" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="table-body">
                        <table>
                            <thead>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Location</th>
                                <th>Employee</th>
                                <th>Refrence</th>
                                <th>Activity    </th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>11/23/2019</td>
                                    <td>11/25/2019</td>
                                    <td>7549 Cobblestone St.Batside, Ny 13316</td>
                                    <td>23</td>
                                    <td>Tesxt Placeholder</td>
                                    <td>Activity 1</td>
                                </tr>
                                <tr>
                                    <td>11/23/2019</td>
                                    <td>11/25/2019</td>
                                    <td>7549 Cobblestone St.Batside, Ny 13316</td>
                                    <td>23</td>
                                    <td>Tesxt Placeholder</td>
                                    <td>Activity 1</td>
                                </tr>
                                <tr>
                                    <td>11/23/2019</td>
                                    <td>11/25/2019</td>
                                    <td>7549 Cobblestone St.Batside, Ny 13316</td>
                                    <td>23</td>
                                    <td>Tesxt Placeholder</td>
                                    <td>Activity 1</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = ({UserActivity }) => {
    return {

        batch:UserActivity.batch
    };
};

const mapDispachToProps = dispatch => {
    return {
        dispatch: dispatch
    };
};
export default connect(
    mapStateToProps,
    {}
)(UserActivity);