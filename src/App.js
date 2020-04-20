import React, { Fragment, Component } from 'react';
import Routes from "./routes";
import { connect } from "react-redux";

class App extends Component {
    render(){
        return(
            <div>
                <Routes/>
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
)(App);