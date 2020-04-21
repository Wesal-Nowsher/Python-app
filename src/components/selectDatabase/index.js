import React, {Component} from 'react';

class SelectData extends Component {
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
                                    <label className="mb-0">Select</label>
                                    <select>
                                        <option>Production</option>
                                        <option>Test1</option>
                                        <option>Test2</option>
                                    </select>
                                </div>
                            </div>
                            <div className="card-bottom">
                                <div className="right">
                                    <button>OK</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default SelectData;