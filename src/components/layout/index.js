import React, { Component} from 'react';
import SideBar from "../sideBar";
import Menu from "../menu";

class Layout extends Component {
    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <SideBar/>
                    <Menu/>
                </div>
            </div>
        )
    }
}
export default Layout;
