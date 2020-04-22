import React, { Component } from 'react';

class TimeRegistrationFormTwo extends Component {
    render() {
        return (
            <div >
                <div className="container-fluid" >
                    <div className="row table-head">
                        <div className="col-sm-6 left-content">
                            <div className="lab-inp">
                                <label className="mb-0 esd">ESD Time Registrator</label>
                            </div>
                            <div className="lab-inp">
                                <label className="mb-0">ID</label>
                                <input type="text" />
                            </div>
                        </div>
                        <div className="col-sm-6 right-button">

                        </div>
                    </div>
                    <div className="row table-head bordertop">
                        <div className="col-sm-3">
                            <div className="lab-inp">
                                <label className="mb-0">Emp ID</label>
                                <select>
                                    <option>CHERN01</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="lab-inp">
                                <label className="mb-0">Date</label>
                                <input type="Date" />
                            </div>
                        </div>
                        <div className="col-sm-6 d-flex justify-content-center">
                            <div className="lab-inp">
                                <label className="mb-0">Total minutes</label>
                                <input type="text" value="0" />
                            </div>
                        </div>
                    </div>
                    <div className="row paddtab">
                        <div className="col-sm-6">
                            <div>
                                <label className="mb-0">Activity 1:</label>
                                <div className="activitytab">
                                    <select>
                                        <option></option>
                                    </select>
                                    <table>
                                        <tr>
                                            <th>Start</th>
                                            <th>End</th>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div>
                                <label className="mb-0">Activity 1:</label>
                                <div className="activitytab">
                                    <select>
                                        <option>something</option>
                                    </select>
                                    <table>
                                        <tr>
                                            <th>Start</th>
                                            <th>End</th>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row paddtab">
                        <div className="col-sm-6">
                            <div>
                                <label className="mb-0">Activity 1:</label>
                                <div className="activitytab">
                                    <select>
                                        <option></option>
                                    </select>
                                    <table>
                                        <tr>
                                            <th>Start</th>
                                            <th>End</th>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div>
                                <label className="mb-0">Activity 1:</label>
                                <div className="activitytab">
                                    <select>
                                        <option>something</option>
                                    </select>
                                    <table>
                                        <tr>
                                            <th>Start</th>
                                            <th>End</th>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row paddtab">
                        <div className="col-sm-6">
                            <div>
                            <label className="mb-0">Comment List</label>
                            <div className="comment-div">
                                <table>
                                    <tr>
                                        <th>Current ID</th>
                                        <th>Description</th>
                                    </tr>
                                    <tr>
                                        <td>999999</td>
                                        <td>orum ipsum dolor sit amit, consectetuer adipiscing elit. Aenean commado ligula eget dolor.</td>
                                    </tr>
                                    <tr>
                                        <td>999999</td>
                                        <td>orum ipsum dolor sit amit, consectetuer adipiscing elit. Aenean commado ligula eget dolor.</td>
                                    </tr>
                                    <tr>
                                        <td>999999</td>
                                        <td>orum ipsum dolor sit amit, consectetuer adipiscing elit. Aenean commado ligula eget dolor.</td>
                                    </tr>
                                    <tr>
                                        <td>999999</td>
                                        <td>orum ipsum dolor sit amit, consectetuer adipiscing elit. Aenean commado ligula eget dolor.</td>
                                    </tr>
                                </table>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default TimeRegistrationFormTwo;