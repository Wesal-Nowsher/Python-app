import React, {Component} from 'react';
import { connect } from "react-redux";
import {withRouter} from 'react-router-dom';
class Login extends Component {
    render(){
        return(
            <div className="container" id="login">
                <div className="row pop">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-top height">
                                <div className="text-center">
                                    <img src={require('../../Assets/images/login.png')} alt=""/>
                                </div>
                                <div className="lab-inp">
                                    <label className="mb-0">Username</label>
                                    <input type="text"/>
                                </div>
                                <div className="lab-inp">
                                    <label className="mb-0">Password</label>
                                    <input type="text"/>
                                </div>
                                <div className="text-center">
                                    <a href="#">Forgot your password ?</a>
                                </div>
                            </div>
                            <div className="card-bottom">
                                <div className="right">
                                    <input type="checkbox"/>Remember me
                                </div>
                                <div className="right">
                                    <button>LOGIN</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="terms-con">
                            <div className="input">
                                <input type="checkbox"/>I have read and accepted Terms and Conditions
                            </div>
                            <div>
                                <p>
                                All the materials, products and services covered on this file shall be protected by the Copyright Law. ES distributions, LLC. owns all the copyrights
                                unless otherwise stated. Without prior written permission of ES Distributions, any content on the file shall not be copied, distributed, played, linked,
                                transmitted or used for any other commercial purpose by any person in any means.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = ({login }) => {
    return {

        login:login.login
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
)(Login));


// export default connect(
//     mapStateToProps,
//     {}
// )(withRouter(Login));