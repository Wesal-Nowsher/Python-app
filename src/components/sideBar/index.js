import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import {withRouter} from 'react-router';
import { connect } from "react-redux";
class SideBar extends Component {


    render() {

        return (
            <div className="col-sm-2 pl-0 " >
                <div className="sidenav">
                    <Link to="/">Menu</Link>
                    <Link to="/login">{this.props.login}</Link>
                    <Link to="/selectDatabase">{this.props.selectdatabase}</Link>
                    <Link to="/createuser">{this.props.createuser}</Link>
                    <Link to="/employeeaccess">{this.props.employeeaccess}</Link>
                    <Link to="/useractivity">{this.props.useractivity}</Link>
                    <Link to="/currentopenview">{this.props.currentopenview}</Link>
                    <Link to="/maintaincomments">{this.props.maintaincomments}</Link>
                    <Link to="/maintainactivity">{this.props.maintainactivity}</Link>
                    <Link to="/batchprint">{this.props.batchprint}</Link>
                    <Link to="/individualprint">{this.props.individualprint}</Link>
                    <Link to="/maintainsetting">{this.props.maintainsetting}</Link>
                    <Link to="/weeklybuild">{this.props.weeklybuild}</Link>
                    <Link to="/openweeklybuild">{this.props.openweekly}</Link>
                    <Link to="/pendingreview">{this.props.pendingreview}</Link>
                    <Link to="/builddetailsview">{this.props.builddetailsview}</Link>
                    <Link to="/emailprint">{this.props.emailprint}</Link>
                    <Link to="/reviewform">{this.props.reviewform}</Link>
                    <Link to="/timeregistration">{this.props.timeregistration}</Link>
                    <Link to="/managepatch">{this.props.managepatch}</Link>
                    <Link to="/recentapplication">{this.props.recentapplication}</Link>
                    <Link to="/excelfile">{this.props.excelfile}</Link>
                    <Link to="/timeregistrationform">{this.props.timeregistrationform}</Link>
                    <Link to="/timeregistrationformtwo">{this.props.timeregistrationformtwo}</Link>
                    <Link to="/builddetailsform">{this.props.builddetailsform}</Link>
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
