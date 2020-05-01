import React, { Fragment, Component } from 'react';
import Routes from "./routes";
import { connect } from "react-redux";
import  Layout from './components/layout'
class App extends Component {
    render(){
        return(
            <div>
                <Layout>
                <div className="col-sm-10" id="menu"><Routes/></div>
                    
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
)(App);