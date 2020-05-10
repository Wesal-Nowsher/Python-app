import React, { Component } from 'react';
import { addTabs } from '../tabs/actions'
import { withRouter, Link } from 'react-router-dom';
import { connect } from "react-redux";

class menuComponent extends Component {
    addTabs(name) {
        let { tabs } = this.props;
        let Tabs = [];
        let isThere = true;
        tabs.map((item) => {
            if (item.name === name) {
                isThere = false
            }
        });
        if (isThere) {
            Tabs.push(...tabs, { id: `${tabs.length + 1}`, name: name })
        }
        else {
            Tabs.push(...tabs);
        }
        this.props.addTabs(Tabs);
        this.props.history.push(`/${name}`);
    }
    render() {
        return (
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
                                        <button onClick={() => { this.addTabs("openweeklybuild") }}>Weekly Build Plan</button>
                                    </div>
                                    <div className="col-sm-6 card-inner">
                                        <div className="img-div">
                                            <img src={require('../../Assets/images/email.svg')} alt="" />
                                        </div>
                                        <button onClick={() => { this.addTabs("pendingreview") }}>Pending Builds</button>
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
                                        <button >Record Completed Builds</button>
                                    </div>
                                    <div className="col-sm-6 card-inner">
                                        <div className="img-div">
                                            <img src={require('../../Assets/images/clock.svg')} alt="" />
                                        </div>
                                        <button onClick={() => { this.addTabs("timeregistration") }}>Other Activities Time Registration</button>
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
                                        <button onClick={() => { this.addTabs("reviewform") }}>Build Review</button>
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
                                            <button onClick={() => { this.addTabs("builddetailsview") }}>Open Build Data</button>
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
                                <div className="img-div img-ext">
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
const mapStateToProps = ({ openweekly,
    login,
    SelectDatabase,
    CreateUser,
    EmployeeAccess,
    UserActivity,
    CurrentOpenView,
    MaintainComments,
    MaintainActivity,
    MaintainSetting,
    WeeklyBuild,
    PendingReview,
    BuildDetailsView,
    BatchPrint,
    IndividualPrint,
    EmailPrint,
    ReviewForm,
    TimeRegistration,
    ManagePatch,
    RecentApplication,
    ExcelFile,
    TimeRegistrationForm,
    TimeRegistrationFormTwo,
    BuildDetailsForm,
    tabs
}) => {
    return {

        login: login.login,
        openweekly: openweekly.openweekly,
        selectdatabase: SelectDatabase.selectdatabase,
        createuser: CreateUser.createuser,
        employeeaccess: EmployeeAccess.employeeaccess,
        useractivity: UserActivity.useractivity,
        currentopenview: CurrentOpenView.currentopenview,
        maintaincomments: MaintainComments.maintaincomments,
        maintainactivity: MaintainActivity.maintainactivity,
        maintainsetting: MaintainSetting.maintainsetting,
        weeklybuild: WeeklyBuild.weeklybuild,
        pendingreview: PendingReview.pendingreview,
        builddetailsview: BuildDetailsView.builddetailsview,
        batchprint: BatchPrint.batchprint,
        individualprint: IndividualPrint.individualprint,
        emailprint: EmailPrint.emailprint,
        reviewform: ReviewForm.reviewform,
        timeregistration: TimeRegistration.timeregistration,
        managepatch: ManagePatch.managepatch,
        recentapplication: RecentApplication.recentapplication,
        excelfile: ExcelFile.excelfile,
        timeregistrationform: TimeRegistrationForm.timeregistrationform,
        timeregistrationformtwo: TimeRegistrationFormTwo.timeregistrationformtwo,
        builddetailsform: BuildDetailsForm.builddetailsform,
        tabs: tabs.tabs


    };
};

const mapDispachToProps = dispatch => {
    return {
        dispatch: dispatch
    };
};
export default withRouter(connect(
    mapStateToProps,
    { addTabs }
)(menuComponent));