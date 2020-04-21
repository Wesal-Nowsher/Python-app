import React, {Component} from 'react';
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
import SideBar from "./components/sidebar";
class Routes extends Component {
    render(){
        return(
        <Switch>
        <Route exact path="/" component={SideBar}  />    
        <Route exact path="/menu" component={Menu}  />
        <Route path="/login" component={Login}  />
        <Route path="/selectdatabase" component={SelectDatabase}  />
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
        </Switch>
        )
    }
}

export default Routes;