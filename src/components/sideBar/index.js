import React, { Component } from 'react';
import {withRouter, Link } from 'react-router-dom';
import { connect } from "react-redux";
import {addTabs} from '../tabs/actions'
class SideBar extends Component {

    addTabs(name){
        let {tabs}=this.props;
        let Tabs=[];
        let isThere=true;
        tabs.map((item)=>{
            if(item.name ===name){
                isThere=false
            }
        });
        if(isThere){
            Tabs.push(...tabs,{id:`${tabs.length+1}`,name:name})
        }
        else{
            Tabs.push(...tabs);
        }
        this.props.addTabs(Tabs);
        this.props.history.push(`/${name}`);
    }
    render() {

        return (
            <div className="col-sm-2 pl-0 " >
                <div className="sidenav">
                    <div onClick={()=>{this.addTabs("menu")}}>Menu</div>
                    <div onClick={()=>{this.addTabs("login")}}>login</div>
                    <div onClick={()=>{this.addTabs("selectdatabase")}}>{this.props.selectdatabase}</div>
                     <div onClick={()=>{this.addTabs("createuser")}}>{this.props.createuser}</div>
                    <div  onClick={()=>{this.addTabs("employeeaccess")}}>{this.props.employeeaccess}</div>
                    <div onClick={()=>{this.addTabs("useractivity")}}>{this.props.useractivity}</div>
                    <div onClick={()=>{this.addTabs("currentopenview")}}>{this.props.currentopenview}</div>
                    <div onClick={()=>{this.addTabs("maintaincomments")}}>{this.props.maintaincomments}</div>
                    <div onClick={()=>{this.addTabs("maintainactivity")}}>{this.props.maintainactivity}</div>
                    <div onClick={()=>{this.addTabs("batchprint")}}>{this.props.batchprint}</div>
                    <div onClick={()=>{this.addTabs("individualprint")}}>{this.props.individualprint}</div>
                    <div onClick={()=>{this.addTabs("maintainsetting")}}>{this.props.maintainsetting}</div>
                    <div onClick={()=>{this.addTabs("weeklybuild")}} >{this.props.weeklybuild}</div>
                    <div onClick={()=>{this.addTabs("openweeklybuild")}} >{this.props.openweekly}</div>
                    <div onClick={()=>{this.addTabs("pendingreview")}} >{this.props.pendingreview}</div>
                    <div onClick={()=>{this.addTabs("builddetailsview")}} >{this.props.builddetailsview}</div>
                    <div onClick={()=>{this.addTabs("emailprint")}} >{this.props.emailprint}</div>
                    <div onClick={()=>{this.addTabs("reviewform")}}>{this.props.reviewform}</div>
                    <div onClick={()=>{this.addTabs("timeregistration")}} >{this.props.timeregistration}</div>
                    <div onClick={()=>{this.addTabs("managepatch")}}>{this.props.managepatch}</div>
                    <div onClick={()=>{this.addTabs("recentapplication")}}>{this.props.recentapplication}</div>
                    <div onClick={()=>{this.addTabs("excelfile")}} >{this.props.excelfile}</div>
                    <div onClick={()=>{this.addTabs("timeregistrationform")}} >{this.props.timeregistrationform}</div>
                    <div onClick={()=>{this.addTabs("timeregistrationformtwo")}} >{this.props.timeregistrationformtwo}</div>
                    <div onClick={()=>{this.addTabs("builddetailsform")}} >{this.props.builddetailsform}</div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = ({openweekly,
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

        login:login.login,
        openweekly:openweekly.openweekly,
        selectdatabase:SelectDatabase.selectdatabase,
        createuser:CreateUser.createuser,
        employeeaccess:EmployeeAccess.employeeaccess,
        useractivity:UserActivity.useractivity,
        currentopenview:CurrentOpenView.currentopenview,
        maintaincomments:MaintainComments.maintaincomments,
        maintainactivity:MaintainActivity.maintainactivity,
        maintainsetting:MaintainSetting.maintainsetting,
        weeklybuild:WeeklyBuild.weeklybuild,
        pendingreview:PendingReview.pendingreview,
        builddetailsview:BuildDetailsView.builddetailsview,
        batchprint:BatchPrint.batchprint,
        individualprint:IndividualPrint.individualprint,
        emailprint:EmailPrint.emailprint,
        reviewform:ReviewForm.reviewform,
        timeregistration:TimeRegistration.timeregistration,
        managepatch:ManagePatch.managepatch,
        recentapplication:RecentApplication.recentapplication,
        excelfile:ExcelFile.excelfile,
        timeregistrationform:TimeRegistrationForm.timeregistrationform,
        timeregistrationformtwo:TimeRegistrationFormTwo.timeregistrationformtwo,
        builddetailsform:BuildDetailsForm.builddetailsform,
        tabs:tabs.tabs


    };
};

const mapDispachToProps = dispatch => {
    return {
        dispatch: dispatch
    };
};
export default withRouter(connect(
    mapStateToProps,
    {addTabs}
)(SideBar));
// export default connect(
//     mapStateToProps,
//     {}
// )(withRouter());
//
