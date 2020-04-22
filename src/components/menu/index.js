import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Line, Polar } from 'react-chartjs-2';
import { Card, CardBody, CardHeader } from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';

const line = {
    labels: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
    datasets: [
        {
            fill: false,
            lineTension: 0,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 2,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 2,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40],
        },
        {
            fill: false,
            lineTension: 0,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(195,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 2,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [29, 40, 50, 51, 36, 50, 20],
        },
    ],
};
const polar = {
    datasets: [
        {
            data: [
                11,
                16,
                7,
                3,
                14,
            ],
            backgroundColor: [
                '#FF6384',
                '#4BC0C0',
                '#FFCE56',
                '#E7E9ED',
                '#36A2EB',
            ],
            label: 'My dataset' // for legend
        }],
    labels: [
        'Red',
        'Green',
        'Yellow',
        'Grey',
        'Blue',
    ],
};
const options = {
    tooltips: {
        enabled: false,
        custom: CustomTooltips
    },
    maintainAspectRatio: false
}
class Menu extends Component {
    render() {
        return (
            <div className="container" id="menu">
                <div className="row">
                    <div className="col-sm-12">
                        <Tabs defaultIndex={0}>
                            <TabList>
                                <Tab><div className="nav-display"><h1>Builds</h1><i className="fa fa-times" /></div></Tab>
                                <Tab><div className="nav-display"><h1>Reviews</h1><i className="fa fa-times" /></div></Tab>
                                <Tab><div className="nav-display"><h1>Time Sheets</h1><i className="fa fa-times" /></div></Tab>
                            </TabList>
                            <TabPanel>
                                <div className="row tab-row">
                                    <div className="col-sm-9">
                                        <div className="row">
                                            <div className="col-sm-6 padd">
                                                <div className="cards">
                                                    <h4>Planning</h4>
                                                    <div className="row">
                                                        <div className="col-sm-6 card-inner">
                                                            <div className="img-div">
                                                                <img src={require('../../Assets/images/calendar(1).svg')} alt="" />
                                                            </div>
                                                            <button>Weekly Build Plan</button>
                                                        </div>
                                                        <div className="col-sm-6 card-inner">
                                                            <div className="img-div">
                                                                <img src={require('../../Assets/images/email.svg')} alt="" />
                                                            </div>
                                                            <button>Pending Builds</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 padd">
                                                <div className="cards">
                                                    <h4>Assignment/Data Input</h4>
                                                    <div className="row">
                                                        <div className="col-sm-6 card-inner">
                                                            <div className="img-div">
                                                                <img src={require('../../Assets/images/diagnosis.svg')} alt="" />
                                                            </div>
                                                            <button>Record Completed Builds</button>
                                                        </div>
                                                        <div className="col-sm-6 card-inner">
                                                            <div className="img-div">
                                                                <img src={require('../../Assets/images/clock.svg')} alt="" />
                                                            </div>
                                                            <button>Other Activities Time Registration</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row padd-1 ">
                                            <div className="col-sm-12 padd">
                                                <div className="cards">
                                                    <h4>Follow Up</h4>
                                                    <div className="row">
                                                        <div className="col-sm-3 card-inner">
                                                            <div className="img-div">
                                                                <img src={require('../../Assets/images/rank.svg')} alt="" />
                                                            </div>
                                                            <button>Open Ranking Excel</button>
                                                        </div>
                                                        <div className="col-sm-3 card-inner">
                                                            <div className="img-div">
                                                                <img src={require('../../Assets/images/review.svg')} alt="" />
                                                            </div>
                                                            <button>Build Review</button>
                                                        </div>
                                                        <div className="col-sm-3 card-inner">
                                                            <div className="img-div">
                                                                <img src={require('../../Assets/images/bag.svg')} alt="" />
                                                            </div>
                                                            <button>Update Operation Time KPI</button>
                                                        </div>
                                                        <div className="col-sm-3 card-inner">
                                                            <div className="two-btn">
                                                                <button>Open Time Reg Data</button>
                                                                <button>Open Build Data</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6 padd">
                                                <div className="cards">
                                                    <h4>Evaluation</h4>
                                                    <div className="row">
                                                        <div className="col-sm-6 card-inner">
                                                            <div className="img-div">
                                                                <img src={require('../../Assets/images/analysis.svg')} alt="" />
                                                            </div>
                                                            <button>Weekly Build Plan</button>
                                                        </div>
                                                        <div className="col-sm-6 card-inner">
                                                            <div className="img-div">
                                                                <img src={require('../../Assets/images/two-way-communication.svg')} alt="" />
                                                            </div>
                                                            <button>Pending Builds</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 padd">
                                                <div className="cards">
                                                    <h4>Feedback Actions</h4>
                                                    <div className="row comingsoon">
                                                        <div className="col-sm-12 card-inner">
                                                            <h5>Coming Soon ...</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-3 padd">
                                        <div className="right-side">
                                            <div className="cards p-0 pt-3">
                                                <div className="graphs">
                                                    <div className="img-div">
                                                        <img src={require('../../Assets/images/graph1.PNG')} alt=""/>
                                                        {/* <CardBody>
                                                            <div className="chart-wrapper">
                                                                <Line data={line} options={options} />
                                                            </div>
                                                        </CardBody> */}
                                                    </div>
                                                    <div className="img-div">
                                                        <img src={require('../../Assets/images/graph2.PNG')} alt="" />
                                                        {/* <CardBody>
                                                            <div className="chart-wrapper">
                                                                <Polar data={polar} options={options} />
                                                            </div>
                                                        </CardBody> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>



                            <TabPanel>
                                Menu 2
                            </TabPanel>
                            <TabPanel>
                                Menu 3
                            </TabPanel>
                        </Tabs>
                    </div>
                </div>
            </div>
        )
    }
}
export default Menu;
