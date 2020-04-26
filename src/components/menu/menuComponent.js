import React,{ Component} from 'react';

export default class  menuComponent extends Component{
    render(){
        return(
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
                                                            <img src={require('../../Assets/images/graph1.PNG')} alt="" />
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
        )
    }
  
} 