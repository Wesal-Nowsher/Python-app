import React, {Component} from 'react';

class TimeRegistration extends Component {
    render(){
        return(
            <div id="registration">
                <div className="container-fluid" >
                <div className="table-body">
                    <table>
                        <thead>
                            <th>Time ID</th>
                            <th>Employee ID</th>
                            <th>Employee Name</th>
                            <th>Total Minutes</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>00:00:00 AM</td>
                                <td>YCA0012</td>
                                <td>Robert Ruth</td>
                                <td>88</td>
                            </tr>
                            <tr>
                                <td>00:00:00 AM</td>
                                <td>YCA0012</td>
                                <td>Robert Ruth</td>
                                <td>88</td>
                            </tr><tr>
                                <td>00:00:00 AM</td>
                                <td>YCA0012</td>
                                <td>Robert Ruth</td>
                                <td>88</td>
                            </tr><tr>
                                <td>00:00:00 AM</td>
                                <td>YCA0012</td>
                                <td>Robert Ruth</td>
                                <td>88</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            </div>
        )
    }
}
export default TimeRegistration;