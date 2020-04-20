import React, {Component} from 'react';

class Login extends Component {
    render(){
        return(
            <div className="login d-flex flex-column align-items-center">
                <div className="login-cred-box ">
                    <div>
                        <div className="text-center"><img src={require('../../Assets/login.png')} alt=""/></div>
                        <div className="text-center">
                            <label>Username</label>
                            <input type="text"/>
                        </div>
                        <div className="text-center">
                            <label>Password</label>
                            <input type="text"/>
                        </div>
                        <div className="text-center ml-4">
                            <a href="#">Forgot your password ?</a>
                        </div>
                    </div>
                    <div>
                        <div className="text-center"><input type="checkbox"/>Remember me</div>
                        <div className="text-center"><button>LOGIN</button></div>
                    </div>
                </div>
                <div>
                    <div>
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
        )
    }
}
export default Login;