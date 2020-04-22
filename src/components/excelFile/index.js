import React, {Component} from 'react';

class ExcelFile extends Component {
    render(){
        return(
            <div >
                <div className="container-fluid" >
                <div className="row table-head">
                    <div className="col-sm-3">
                        <div className="lab-inp">
                            <label className="mb-0">File Name</label>
                            <input type="text"/>
                        </div>
                    </div>
                    <div className="col-sm-3">
                    <div className="lab-inp">
                            <label className="mb-0">Group</label>
                            <input type="text"/>
                        </div>
                    </div>
                    <div className="col-sm-3">
                    <div className="lab-inp">
                        </div>
                    </div>
                    <div className="col-sm-3">
                    <div className="lab-inp">
                        </div>
                    </div>
                </div>
                <div className="table-body excelfile">
                    <table>
                        <thead>
                            <th>File Name</th>
                            <th>Description</th>
                            <th>Created</th>
                            <th>Updated</th>
                            <th>Last Open</th>
                            <th>Group</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <select>
                                        <option>Temp_2345344B34(64545)</option>
                                        <option>Temp_2345344B34(64545)</option>
                                    </select>
                                </td>
                                <td>Lorem Ipsum dolor sit amet, consectutuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</td>
                                <td>
                                    <input value="10/29/2019"/>
                                </td>
                                <td><input value="10/29/2019"/></td>
                                <td><input value="10/29/2019"/></td>
                                <td>
                                    <select>
                                        <option>AmazoneHistory Comparison</option>
                                        <option>AmazoneHistory Comparison</option>
                                    </select>
                                </td>
                            </tr>
                            <tr className="border-bot">
                                <td colSpan="2">Amazone History Comparison Form : 05/31/2019 to 06/12/2019</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>
                                    <select>
                                        <option>Temp_2345344B34(64545)</option>
                                        <option>Temp_2345344B34(64545)</option>
                                    </select>
                                </td>
                                <td>Lorem Ipsum dolor sit amet, consectutuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</td>
                                <td>
                                    <input value="10/29/2019"/>
                                </td>
                                <td><input value="10/29/2019"/></td>
                                <td><input value="10/29/2019"/></td>
                                <td>
                                    <select>
                                        <option>AmazoneHistory Comparison</option>
                                        <option>AmazoneHistory Comparison</option>
                                    </select>
                                </td>
                            </tr>
                            <tr className="border-bot">
                                <td colSpan="2">Amazone History Comparison Form : 05/31/2019 to 06/12/2019</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>
                                    <select>
                                        <option>Temp_2345344B34(64545)</option>
                                        <option>Temp_2345344B34(64545)</option>
                                    </select>
                                </td>
                                <td>Lorem Ipsum dolor sit amet, consectutuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</td>
                                <td>
                                    <input value="10/29/2019"/>
                                </td>
                                <td><input value="10/29/2019"/></td>
                                <td><input value="10/29/2019"/></td>
                                <td>
                                    <select>
                                        <option>AmazoneHistory Comparison</option>
                                        <option>AmazoneHistory Comparison</option>
                                    </select>
                                </td>
                            </tr>
                            <tr className="border-bot">
                                <td colSpan="2">Amazone History Comparison Form : 05/31/2019 to 06/12/2019</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>
                                    <select>
                                        <option>Temp_2345344B34(64545)</option>
                                        <option>Temp_2345344B34(64545)</option>
                                    </select>
                                </td>
                                <td>Lorem Ipsum dolor sit amet, consectutuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</td>
                                <td>
                                    <input value="10/29/2019"/>
                                </td>
                                <td><input value="10/29/2019"/></td>
                                <td><input value="10/29/2019"/></td>
                                <td>
                                    <select>
                                        <option>AmazoneHistory Comparison</option>
                                        <option>AmazoneHistory Comparison</option>
                                    </select>
                                </td>
                            </tr>
                            <tr className="border-bot">
                                <td colSpan="2">Amazone History Comparison Form : 05/31/2019 to 06/12/2019</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            </div>
        )
    }
}
export default ExcelFile;