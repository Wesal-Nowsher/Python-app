import React, {Component} from 'react';
import { Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

class BuildDetailsView extends Component {
    render(){
        return(
            <div >
                <div className="container-fluid" >
                <div className="row table-head">
                    <div className="col-sm-3">
                        <div className="lab-inp">
                            <label className="mb-0">BuildID</label>
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
                    <div className="col-sm-3">
                    <div className="lab-inp">
                            <label className="mb-0">SKU</label>
                            <input type="text"/>
                        </div>
                    </div>
                </div>
                <div className="row table-head bordertop">
                    <div className="col-sm-3">
                        <div className="lab-inp">
                            <label className="mb-0">EmployeeID</label>
                            <input type="text"/>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        {/* <div className="sku-ex">
                            <i className="fa fa-times"/>
                            <p>Recently Reviewed</p>
                        </div> */}
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
                <div className="row builddetails" id="openweek">
                    <div className="col-sm-12">
                        <Tabs defaultIndex={0}>
                            <TabList>
                                <Tab><h1>View by SKU</h1></Tab>
                                <Tab><h1>View by SKU and Employee</h1></Tab>
                            </TabList>
                            <TabPanel>
                                <div className="row tab-row">
                                    <div className="col-sm-12">
                                    <div className="table-body weekly">
                    <table>
                        <thead>
                            <th>Week Build #</th>
                            <th>From</th>
                            <th>To</th>
                            <th>Build SKU#</th>
                            <th>SKU</th>
                            <th>Qty Planned</th>
                            <th>QTY Objective</th>
                            <th>QTYBuilt</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>25266</td>
                                <td>10/31/2019</td>
                                <td>10/31/2019</td>
                                <td>12345</td>
                                <td>CYW550505</td>
                                <td>77</td>
                                <td>77</td>
                                <td>77</td>
                            </tr>
                            <tr>
                                <td>25266</td>
                                <td>10/31/2019</td>
                                <td>10/31/2019</td>
                                <td>12345</td>
                                <td>CYW550505</td>
                                <td>77</td>
                                <td>77</td>
                                <td>77</td>
                            </tr><tr>
                                <td>25266</td>
                                <td>10/31/2019</td>
                                <td>10/31/2019</td>
                                <td>12345</td>
                                <td>CYW550505</td>
                                <td>77</td>
                                <td>77</td>
                                <td>77</td>
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
                            <th>Week Build #</th>
                            <th>From</th>
                            <th>To</th>
                            <th>Build SKU#</th>
                            <th>SKU</th>
                            <th>Employee</th>
                            <th>Qty Planned</th>
                            <th>QTY Objective</th>
                            <th>QTYBuilt</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>25266</td>
                                <td>10/31/2019</td>
                                <td>10/31/2019</td>
                                <td>12345</td>
                                <td>CYW550505</td>
                                <td>Richard</td>
                                <td>77</td>
                                <td>77</td>
                                <td>77</td>
                            </tr>
                            <tr>
                                <td>25266</td>
                                <td>10/31/2019</td>
                                <td>10/31/2019</td>
                                <td>12345</td>
                                <td>CYW550505</td>
                                <td>Richard</td>
                                <td>77</td>
                                <td>77</td>
                                <td>77</td>
                            </tr>
                            <tr>
                                <td>25266</td>
                                <td>10/31/2019</td>
                                <td>10/31/2019</td>
                                <td>12345</td>
                                <td>CYW550505</td>
                                <td>Richard</td>
                                <td>77</td>
                                <td>77</td>
                                <td>77</td>
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
            </div>
        )
    }
}
export default BuildDetailsView;