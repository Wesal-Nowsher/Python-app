import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Line, Polar } from 'react-chartjs-2';
import { Card, CardBody, CardHeader } from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import MenuComponent from './menuComponent';
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
                            <MenuComponent/>   
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
