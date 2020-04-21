import React, {Component} from 'react';

class CreateUser extends Component {
    render(){
        return(
            <div className="container" id="login">
                <div className="row pop">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-top">
                                <div className="createuserimg">
                                    <img src={require('../../Assets/images/user.svg')} alt=""/>
                                </div>
                                <div className="lab-inp">
                                    <label className="mb-0">Username</label>
                                    <input type="text"/>
                                </div>
                                <div className="lab-inp">
                                    <label className="mb-0">Name</label>
                                    <input type="text"/>
                                </div>
                                <div className="lab-inp">
                                    <label className="mb-0">Password</label>
                                    <input type="text"/>
                                </div>
                                <div className="lab-inp">
                                    <label className="mb-0">Confirm Password</label>
                                    <input type="text"/>
                                </div>
                                <div className="lab-inp">
                                    <label className="mb-0">Select</label>
                                    <select>
                                        <option>0 - User</option>
                                        <option>1 - Admin</option>
                                        <option>2 - SuperAdmin</option>
                                    </select>
                                </div>
                                <div className="createuser">
                                    <div className="right">
                                        <button>Save</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default CreateUser;