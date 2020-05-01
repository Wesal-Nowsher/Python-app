import React, {Component} from 'react';
import { Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { connect } from "react-redux";

class OpenWeeklyBuild extends Component {
    render(){
        return(
            <div className="container-fluid" >
                <div className="table-body weekly">
                    <table>
                        <thead>
                            <th>Build SKU</th>
                            <th>Plan QTY</th>
                            <th>Qty Preset</th>
                            <th>OBJ</th>
                            <th>QTY Assigned</th>
                            <th>QTY Built</th>
                            <th>Built ID</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>CYC2001</td>
                                <td>0</td>
                                <td>0</td>
                                <td>75</td>
                                <td>90</td>
                                <td>195</td>
                                <td>7105</td>
                            </tr>
                            <tr>
                                <td>CYC2001</td>
                                <td>0</td>
                                <td>0</td>
                                <td>75</td>
                                <td>90</td>
                                <td>195</td>
                                <td>7105</td>
                            </tr><tr>
                                <td>CYC2001</td>
                                <td>0</td>
                                <td>0</td>
                                <td>75</td>
                                <td>90</td>
                                <td>195</td>
                                <td>7105</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="row beforetab" >
                    <div className="col-sm-2">
                        <p><strong>Product Name</strong></p>
                    </div>
                    <div className="col-sm-10 background">
                        <p>Grape Flavoured Pre-Rolled Hemp Wraps (50 packs)</p>
                    </div>
                </div>
                <div className="row" id="openweek">
                    <div className="col-sm-12">
                        <Tabs defaultIndex={0}>
                            <TabList>
                                <Tab><h1>Builds by SKU</h1></Tab>
                                <Tab><h1>Pending Builds</h1></Tab>
                            </TabList>
                            <TabPanel>
                                <div className="row tab-row">
                                    <div className="col-sm-12">
                                    <div className="table-body weekly">
                    <table>
                        <thead>
                            <th>ID</th>
                            <th>EMPID</th>
                            <th>Plan Date</th>
                            <th>QTY</th>
                            <th>U/Hr(EMP)</th>
                            <th>U/Hr(ESD)</th>
                            <th>BuildSKU</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>25266</td>
                                <td>UNASSIGNED</td>
                                <td>10/31/2019</td>
                                <td>75</td>
                                <td>N/A</td>
                                <td>16.99</td>
                                <td>CYC40052</td>
                            </tr>
                            <tr>
                                <td>25266</td>
                                <td>UNASSIGNED</td>
                                <td>10/31/2019</td>
                                <td>75</td>
                                <td>N/A</td>
                                <td>16.99</td>
                                <td>CYC40052</td>
                            </tr>
                            <tr>
                                <td>25266</td>
                                <td>UNASSIGNED</td>
                                <td>10/31/2019</td>
                                <td>75</td>
                                <td>N/A</td>
                                <td>16.99</td>
                                <td>CYC40052</td>
                            </tr>
                        </tbody>
                    </table>
                </div>       
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                            <div className="row tab-row">
                                    <div className="col-sm-12">
                                    <div className="table-body weekly">
                    <table>
                        <thead>
                            <th>ID</th>
                            <th>EMPID</th>
                            <th>Plan Date</th>
                            <th>QTY</th>
                            <th>U/Hr(EMP)</th>
                            <th>U/Hr(ESD)</th>
                            <th>BuildSKU</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>25266</td>
                                <td>UNASSIGNED</td>
                                <td>10/31/2019</td>
                                <td>75</td>
                                <td>N/A</td>
                                <td>16.99</td>
                                <td>CYC40052</td>
                            </tr>
                            <tr>
                                <td>25266</td>
                                <td>UNASSIGNED</td>
                                <td>10/31/2019</td>
                                <td>75</td>
                                <td>N/A</td>
                                <td>16.99</td>
                                <td>CYC40052</td>
                            </tr>
                            <tr>
                                <td>25266</td>
                                <td>UNASSIGNED</td>
                                <td>10/31/2019</td>
                                <td>75</td>
                                <td>N/A</td>
                                <td>16.99</td>
                                <td>CYC40052</td>
                            </tr>
                        </tbody>
                    </table>
                </div>       
                                    </div>
                                </div>
                            </TabPanel>
                        </Tabs>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = ({openweekly }) => {
    return {

        openweekly:openweekly.openweekly
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
)(OpenWeeklyBuild);