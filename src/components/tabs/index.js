import React, { Component } from 'react';
import { connect } from "react-redux";
import {withRouter} from 'react-router-dom';
import {closetabs} from "./actions"
class Tabs extends Component {
    state={
        tabs:[]
    }
    closeTabs=(id)=>{
    console.log("wesa;")
    let {tabs} = this.props;
    let Tabs=[];
        tabs.map((item)=>{
            if(item.id!== id){
                Tabs.push(item);
            }
        })
    // Tabs.splice(index,1);
    console.log("Tabs", Tabs)
    this.props.closetabs(Tabs);
    }
    componentDidMount(){

    }



    render() {
        let {tabs}=this.props;
        console.log("tabs",tabs)
        return (
            <div className="col-sm-12" id="menu">
                <div className="tabs-button">
                    {
                        this.props.tabs && this.props.tabs.map((item,index)=>{
                            return <button key={index}><h1>{item.name}</h1><i className="fa fa-times" onClick={()=>{this.closeTabs(item.id)}}></i></button>
                        })
                    }

                </div>
            </div>

        )
    }
}

const mapStateToProps = ({ tabs}) => {
    return {
        tabs:tabs.tabs
    };
};

const mapDispachToProps = dispatch => {
    return {
        dispatch: dispatch
    };
};
export default connect(
    mapStateToProps,
    {closetabs}
)(withRouter(Tabs));


