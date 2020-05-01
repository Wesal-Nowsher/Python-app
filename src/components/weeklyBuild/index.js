import React, { Component } from 'react';
import { connect } from "react-redux";

class WeeklyBuild extends Component {
    render() {
        return (
            <div >
                <div className="container-fluid" >
                    <div className="row table-head">
                        <div className="col-sm-3">
                            <div className="lab-inp">
                                <label className="mb-0">BuildID</label>
                                <div className="position-relative-search">
                                    <input type="text" className=" w-auto" />
                                    <i className="fa fa-search" />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="lab-inp">
                                <label className="mb-0">Search</label>
                                <div className="position-relative-search">
                                    <input type="text" className=" w-auto" />
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
                                <th>BuildID</th>
                                <th>From</th>
                                <th>To</th>
                                <th>Qty SKUs</th>
                                <th>Qty Employees</th>
                                <th>Total Planned</th>
                                <th>Total Built</th>
                                <th>Total Hours</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>5064</td>
                                    <td>10/29/2019</td>
                                    <td>10/29/2019</td>
                                    <td>7</td>
                                    <td>7</td>
                                    <td>90</td>
                                    <td>85</td>
                                    <td>195</td>
                                </tr>
                                <tr>
                                    <td>5064</td>
                                    <td>10/29/2019</td>
                                    <td>10/29/2019</td>
                                    <td>8</td>
                                    <td>8</td>
                                    <td>90</td>
                                    <td>85</td>
                                    <td>195</td>
                                </tr>
                                <tr>
                                    <td>5064</td>
                                    <td>10/29/2019</td>
                                    <td>10/29/2019</td>
                                    <td>7</td>
                                    <td>7</td>
                                    <td>90</td>
                                    <td>85</td>
                                    <td>195</td>
                                </tr>
                                <tr>
                                    <td>5064</td>
                                    <td>10/29/2019</td>
                                    <td>10/29/2019</td>
                                    <td>7</td>
                                    <td>7</td>
                                    <td>90</td>
                                    <td>85</td>
                                    <td>195</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = ({WeeklyBuild }) => {
    return {

        batch:WeeklyBuild.batch
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
)(WeeklyBuild);