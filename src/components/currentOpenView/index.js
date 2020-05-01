import React, {Component} from 'react';
import { connect } from "react-redux";


class CurrentOpenView extends Component {
    render(){
        return(
            <div >
                <div className="container-fluid" >
                <div className="table-body">
                    <table>
                        <thead>
                            <th>Form Name</th>
                            <th>Form Use Status</th>
                            <th>UserID</th>
                            <th>User Level</th>
                            <th>Open Record ID</th>
                            <th>Date/Time Open</th>
                            <th>Record Type</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>FrmStockCountDetails</td>
                                <td>Open</td>
                                <td>EGUTI001</td>
                                <td>2</td>
                                <td>1796</td>
                                <td>11/04/2019 10:57:58:AM</td>
                                <td>StockCountID</td>
                            </tr>
                            <tr>
                                <td>FrmStockCountDetails</td>
                                <td>Open</td>
                                <td>EGUTI001</td>
                                <td>2</td>
                                <td>1796</td>
                                <td>11/04/2019 10:57:58:AM</td>
                                <td>StockCountID</td>
                            </tr> 
                            <tr>
                                <td>FrmStockCountDetails</td>
                                <td>Open</td>
                                <td>EGUTI001</td>
                                <td>2</td>
                                <td>1796</td>
                                <td>11/04/2019 10:57:58:AM</td>
                                <td>StockCountID</td>
                            </tr>
                            <tr>
                                <td>FrmStockCountDetails</td>
                                <td>Open</td>
                                <td>EGUTI001</td>
                                <td>2</td>
                                <td>1796</td>
                                <td>11/04/2019 10:57:58:AM</td>
                                <td>StockCountID</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            </div>
        )
    }
}
const mapStateToProps = ({CurrentOpenView }) => {
    return {

        batch:CurrentOpenView.batch
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
)(CurrentOpenView);