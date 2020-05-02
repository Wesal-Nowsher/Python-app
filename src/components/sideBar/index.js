import React, { Component } from 'react';
import {withRouter, Link } from 'react-router-dom';
import { connect } from "react-redux";
class SideBar extends Component {


    render() {

        return (
            <div className="col-sm-2 pl-0 " >
                <div className="sidenav">
                    <div onClick={()=>{this.props.history.push("/menu")}}>Menu</div>
                    <div onClick={()=>{this.props.history.push("/login")}}>login</div>
                    <div onClick={()=>{this.props.history.push("/selectdatabase")}}>{this.props.selectdatabase}</div>
                     <div onClick={()=>{this.props.history.push("/createuser")}}>{this.props.createuser}</div>
                    <div  onClick={()=>{this.props.history.push("/employeeaccess")}}>{this.props.employeeaccess}</div>
                    <div onClick={()=>{this.props.history.push("/useractivity")}}>{this.props.useractivity}</div>
                    <div onClick={()=>{this.props.history.push("/currentopenview")}}>{this.props.currentopenview}</div>
                    <div onClick={()=>{this.props.history.push("/maintaincomments")}}>{this.props.maintaincomments}</div>
                    <div onClick={()=>{this.props.history.push("/maintainactivity")}}>{this.props.maintainactivity}</div>
                    <div onClick={()=>{this.props.history.push("/batchprint")}}>{this.props.batchprint}</div>
                    <div onClick={()=>{this.props.history.push("/individualprint")}}>{this.props.individualprint}</div>
                    <div onClick={()=>{this.props.history.push("/maintainsetting")}}>{this.props.maintainsetting}</div>
                    <div onClick={()=>{this.props.history.push("/weeklybuild")}} >{this.props.weeklybuild}</div>
                    <div onClick={()=>{this.props.history.push("/openweeklybuild")}} >{this.props.openweekly}</div>
                    <div onClick={()=>{this.props.history.push("/pendingreview")}} >{this.props.pendingreview}</div>
                    <div onClick={()=>{this.props.history.push("/builddetailsview")}} >{this.props.builddetailsview}</div>
                    <div onClick={()=>{this.props.history.push("/emailprint")}} >{this.props.emailprint}</div>
                    <div onClick={()=>{this.props.history.push("/reviewform")}}>{this.props.reviewform}</div>
                    <div onClick={()=>{this.props.history.push("/timeregistration")}} >{this.props.timeregistration}</div>
                    <div onClick={()=>{this.props.history.push("/managepatch")}}>{this.props.managepatch}</div>
                    <div onClick={()=>{this.props.history.push("/recentapplication")}}>{this.props.recentapplication}</div>
                    <div onClick={()=>{this.props.history.push("/excelfile")}} >{this.props.excelfile}</div>
                    <div onClick={()=>{this.props.history.push("/timeregistrationform")}} >{this.props.timeregistrationform}</div>
                    <div onClick={()=>{this.props.history.push("/timeregistrationformtwo")}} >{this.props.timeregistrationformtwo}</div>
                    <div onClick={()=>{this.props.history.push("/builddetailsform")}} >{this.props.builddetailsform}</div>
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
    BuildDetailsForm
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
        builddetailsform:BuildDetailsForm.builddetailsform


    };
};

const mapDispachToProps = dispatch => {
    return {
        dispatch: dispatch
    };
};
export default withRouter(connect(
    mapStateToProps,
    {}
)(SideBar));
// export default connect(
//     mapStateToProps,
//     {}
// )(withRouter());
//
