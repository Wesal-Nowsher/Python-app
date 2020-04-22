import React, { Component } from 'react';

class ReviewForm extends Component {
    render() {
        return (
            <div id="Review">
                <div className="container-fluid" >
                    <div className="row backgroundcol">
                        <div className="col-sm-12">
                            <div className="first">
                                <p>Build Details</p>
                                <button>REVIEWED</button>
                            </div>
                            <div className="second">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <label className="mb-0">ID</label>
                                        <input type="text" />
                                    </div>

                                    <div className="col-sm-3">
                                        <label className="mb-0">Build SKU</label>
                                        <input type="text" />
                                    </div>

                                    <div className="col-sm-3">
                                        <label className="mb-0">EMPID</label>
                                        <input type="text" />
                                    </div>

                                    <div className="col-sm-3">
                                        <label className="mb-0">Date From</label>
                                        <input type="date" />
                                    </div>
                                </div>
                            </div>
                            <div className="third">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <label className="mb-0">PlanQTY</label>
                                        <input type="text" />
                                    </div>

                                    <div className="col-sm-3">
                                        <label className="mb-0">BuildQTY</label>
                                        <input type="text" />
                                    </div>

                                    <div className="col-sm-6">
                                        <label className="mb-0">Void Time</label>
                                        <input type="checkbox" />

                                        <label className="mb-0">Review By</label>
                                        <input type="date" />

                                        <input type="text" />
                                    </div>
                                </div>
                            </div>
                            <div className="third">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <label className="mb-0">ESD AvgDif</label>
                                        <input type="text" />
                                    </div>
                                    <div className="col-sm-3">
                                        <label className="mb-0">Emp AvgDif</label>
                                        <input type="text" />
                                    </div>
                                    <div className="col-sm-6">
                                        <label className="mb-0">Total Min</label>
                                        <input type="text" />

                                        <label className="mb-0">Unit/Hr</label>
                                        <input className="unit" type="text" />

                                        <label className="mb-0">Unit/Min</label>
                                        <input className="unit" type="text" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row p-5">
                        <div className="col-sm-6">
                            <div id="registration">
                                <div className="container-fluid" >
                                    <div className="table-body review" >
                                        <table>
                                            <thead>
                                                <th>Time type</th>
                                                <th>From</th>
                                                <th>To</th>
                                                <th>Total Time</th>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Prep Time</td>
                                                    <td>00:00:00</td>
                                                    <td>00:00:00</td>
                                                    <td>00:00:00</td>
                                                </tr>
                                                <tr>
                                                    <td>Prep Time</td>
                                                    <td>00:00:00</td>
                                                    <td>00:00:00</td>
                                                    <td>00:00:00</td>
                                                </tr>
                                                <tr>
                                                    <td>Prep Time</td>
                                                    <td>00:00:00</td>
                                                    <td>00:00:00</td>
                                                    <td>00:00:00</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-5">
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
export default ReviewForm;