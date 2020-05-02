import React, { Component } from 'react';
import { connect } from "react-redux";
import {withRouter} from 'react-router-dom';

class Tabs extends Component {

    render() {
        return (
            <div className="col-sm-12" id="menu">
                <div className="tabs-button">
                    <button><h1>Menu</h1><i class="fa fa-times"></i></button>
                    <button><h1>Menu</h1><i class="fa fa-times"></i></button>
                    <button><h1>Menu</h1><i class="fa fa-times"></i></button>
                </div>
            </div>

        )
    }
}

const mapStateToProps = ({ }) => {
    return {

    };
};

const mapDispachToProps = dispatch => {
    return {
        dispatch: dispatch
    };
};
export default connect(
    mapStateToProps,
    {}
)(withRouter(Tabs));


