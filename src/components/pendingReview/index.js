import React, {Component} from 'react';

class PendingReview extends Component {
    render(){
        return(
            <div >
                <div className="container-fluid" >
                <div className="row table-head">
                    <div className="col-sm-3">
                        <div className="lab-inp">
                            <label className="mb-0">Status</label>
                            <input type="text"/>
                        </div>
                    </div>
                    <div className="col-sm-3">
                    <div className="lab-inp">
                            <label className="mb-0">EmployeeID</label>
                            <input type="text"/>
                        </div>
                    </div>
                    <div className="col-sm-3">
                    <div className="lab-inp">
                            <label className="mb-0">Date From</label>
                            <input type="date"/>
                        </div>
                    </div>
                    <div className="col-sm-3">
                    <div className="lab-inp">
                            <label className="mb-0">Date To</label>
                            <input type="date"/>
                        </div>
                    </div>
                </div>
                <div className="row table-head bordertop">
                    <div className="col-sm-3">
                        <div className="lab-inp">
                            <label className="mb-0">SKU</label>
                            <input type="text"/>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="sku-ex">
                            <i className="fa fa-times"/>
                            <p>Recently Reviewed</p>
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
                <div className="table-body">
                    <table>
                        <thead>
                            <th>SKU#</th>
                            <th>Description</th>
                            <th>Total</th>
                            <th>Build#</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>CYC10091</td>
                                <td>Lorem Ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor</td>
                                <td>50</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>CYC10091</td>
                                <td>Lorem Ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor</td>
                                <td>50</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>CYC10091</td>
                                <td>Lorem Ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor</td>
                                <td>50</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>CYC10091</td>
                                <td>Lorem Ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor</td>
                                <td>50</td>
                                <td>1</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="table-body secondtable">
                    <table>
                        <thead>
                            <th>ID</th>
                            <th>EmpID</th>
                            <th>SKU</th>
                            <th>Build Date</th>
                            <th>Total Date</th>
                            <th>Build Hours</th>
                            <th>PS</th>
                            <th>BTI</th>
                            <th>Comments</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>5064</td>
                                <td>FSCOA01</td>
                                <td>CYC10091</td>
                                <td>10/29/2019</td>
                                <td>25</td>
                                <td>34.5</td>
                                <td>-1</td>
                                <td></td>
                                <td>Dummy Text placement for a comment to see how it will be displayed instead of the actual text</td>
                            </tr>
                            <tr>
                                <td>5064</td>
                                <td>FSCOA01</td>
                                <td>CYC10091</td>
                                <td>10/29/2019</td>
                                <td>25</td>
                                <td>34.5</td>
                                <td>-1</td>
                                <td></td>
                                <td>Dummy Text placement for a comment to see how it will be displayed instead of the actual text</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            </div>
        )
    }
}
export default PendingReview;