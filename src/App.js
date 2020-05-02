import React, { Fragment, Component } from 'react';
import Routes from "./routes";
import { connect } from "react-redux";
import  Layout from './components/layout'
import {withRouter} from "react-router"
import { Route, Switch} from "react-router-dom";
import Login from './components/login';
import Menu from "./components/menu";
import SelectDatabase from "./components/selectDatabase";
import CreateUser from "./components/createUser";
import EmployeeAccess from "./components/employeeAccess";
import UserActivity from "./components/userActivity";
import CurrentOpenView from "./components/currentOpenView";
import MaintainComments from "./components/maintainComments";
import MaintainActivity from "./components/maintainActivity";
import MaintainSetting from "./components/maintainSetting";
import WeeklyBuild from "./components/weeklyBuild";
import OpenWeeklyBuild from "./components/openWeeklyBuild";
import PendingReview from "./components/pendingReview";
import BuildDetailsView from "./components/buildDetailsView";
import BatchPrint from "./components/batchPrint";
import IndividualPrint from "./components/individualPrint";
import EmailPrint from "./components/emailPrint";
import ReviewForm from "./components/reviewForm";
import TimeRegistration from "./components/timeRegistration";
import ManagePatch from "./components/managePatch";
import RecentApplication from "./components/recentApplication";
import ExcelFile from "./components/excelFile";
import TimeRegistrationForm from "./components/timeRegistrationForm";
import TimeRegistrationFormTwo from "./components/timeRegistrationFormTwo";
import BuildDetailsForm from "./components/buildDetailsForm";
// import Layout from "./components/layout";

import { BrowserRouter } from "react-router-dom";
class App extends Component {
    render(){
        return(
            <div>
                <Layout>
                <div className="col-sm-10" id="menu">
                    <Switch>

                        <Route  path="/login" exact component={Login}  />
                        <Route  path="/" component={Menu}  />
                        <Route  path="/selectdatabase" component={SelectDatabase}  />
                        <Route path="/createuser" component={CreateUser}  />
                        <Route path="/employeeaccess" component={EmployeeAccess}  />
                        <Route path="/useractivity" component={UserActivity}  />
                        <Route path="/currentopenview" component={CurrentOpenView}  />
                        <Route path="/maintaincomments" component={MaintainComments}  />
                        <Route path="/maintainactivity" component={MaintainActivity}  />
                        <Route path="/maintainsetting" component={MaintainSetting}  />
                        <Route path="/weeklybuild" component={WeeklyBuild}  />
                        <Route path="/openweeklybuild" component={OpenWeeklyBuild}  />
                        <Route path="/pendingreview" component={PendingReview}  />
                        <Route path="/builddetailsview" component={BuildDetailsView}  />
                        <Route path="/batchprint" component={BatchPrint}  />
                        <Route path="/individualprint" component={IndividualPrint}  />
                        <Route path="/emailprint" component={EmailPrint}  />
                        <Route path="/reviewform" component={ReviewForm}  />
                        <Route path="/timeregistration" component={TimeRegistration}  />
                        <Route path="/managepatch" component={ManagePatch}  />
                        <Route path="/recentapplication" component={RecentApplication}  />
                        <Route path="/excelfile" component={ExcelFile}  />
                        <Route path="/timeregistrationform" component={TimeRegistrationForm}  />
                        <Route path="/timeregistrationformtwo" component={TimeRegistrationFormTwo}  />
                        <Route path="/builddetailsform" component={BuildDetailsForm}  />
                    </Switch>
                </div>
                    
                    </Layout>  
                {/* <Routes/> */}
            </div>
        )
    }
}
const mapStateToProps = ({ }) => {
    return {
    };
};

export default connect(
    mapStateToProps,
    { }
)(withRouter(App));