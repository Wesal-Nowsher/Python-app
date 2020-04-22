import React, {Component} from 'react';

class TimeRegistrationForm extends Component {
    render(){
        return(
            <div >
                <div className="container-fluid" >
                <div className="row table-head">
                    <div className="col-sm-6 left-content">
                        <div className="lab-inp">
                            <label className="mb-0 esd">ESD Time Registrator</label>
                        </div>
                        <div className="lab-inp">
                            <label className="mb-0">ID</label>
                            <input type="text"/>
                        </div>
                    </div>
                    <div className="col-sm-6 right-button">
                        <div className="lab-inp">
                            <button>SAVE</button>
                            <button>CLOSE</button>
                        </div>
                        <div className="lab-inp">
                            <button>UNDO</button>
                            <button>DELETE</button>
                        </div>
                    </div>
                </div>
                <div className="row table-head bordertop">
                    <div className="col-sm-3">
                        <div className="lab-inp">
                            <label className="mb-0">Emp ID</label>
                            <input type="text"/>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="lab-inp">
                        <label className="mb-0">Date</label>
                            <input type="Date"/>
                        </div>
                    </div>
                    <div className="col-sm-6">
                    </div>
                </div>
                <div className="table-body excelfile">
                    <table>
                        <thead>
                            <th>Activity ID</th>
                            <th>Description</th>
                            <th>Start</th>
                            <th>End</th>
                            <th>Total Minutes</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Activiy 1</td>
                                <td>Lorem Ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor</td>
                                <td>00:00:00</td>
                                <td>00:00:00</td>
                                <td>55</td>
                            </tr>
                            <tr>
                                <td>Activiy 2</td>
                                <td>Lorem Ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor</td>
                                <td>00:00:00</td>
                                <td>00:00:00</td>
                                <td>66</td>
                            </tr><tr>
                                <td>Activiy 3</td>
                                <td>Lorem Ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor</td>
                                <td>00:00:00</td>
                                <td>00:00:00</td>
                                <td>77</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            </div>
        )
    }
}
export default TimeRegistrationForm;