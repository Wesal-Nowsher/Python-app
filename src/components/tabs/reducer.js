import React, { Component } from 'react';
import Login from '../login';
import Menucomp from '../menu/menuComponent';
import SelectDatabase from "../selectDatabase";
import CreateUser from "../createUser";
import EmployeeAccess from "../employeeAccess";
import UserActivity from "../userActivity";
import CurrentOpenView from "../currentOpenView";
import MaintainComments from "../maintainComments";
import MaintainActivity from "../maintainActivity";
import MaintainSetting from "../maintainSetting";
import WeeklyBuild from "../weeklyBuild";
import OpenWeeklyBuild from "../openWeeklyBuild";
import PendingReview from "../pendingReview";
import BuildDetailsView from "../buildDetailsView";
import BatchPrint from "../batchPrint";
import IndividualPrint from "../individualPrint";
import EmailPrint from "../emailPrint";
import ReviewForm from "../reviewForm";
import TimeRegistration from "../timeRegistration";
import ManagePatch from "../managePatch";
import RecentApplication from "../recentApplication";
import ExcelFile from "../excelFile";
import TimeRegistrationForm from "../timeRegistrationForm";
import TimeRegistrationFormTwo from "../timeRegistrationFormTwo";
import BuildDetailsForm from "../buildDetailsForm";

const initialState = {
    tabs:[{id:"1",name:"menu"},{id:"2",name:"menu"}]
};

export default (state = initialState, action) => {
const newState = { ...state };
switch (action.type) {
    case "tabs":
        console.log("action ", action.payload)
        newState.tabs = action.payload;
        break;
    default:
    break;
}
return newState;
};
