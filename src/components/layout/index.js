import React, { Component } from 'react';
import { connect } from "react-redux";
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import SideBar from "../sideBar";
import Menu from "../menu";
import Routes from '../../routes' 

class Layout extends Component {
    state = {
        openstate: true,
    }
    open1 = () => {
        this.setState({ openstate: !this.state.openstate });
    }
    render() {
        console.log("layout ", this.state.openstate)
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 pl-0 pr-0">
                        <div className="topbar">
                            {/* <i className="fa fa-search" onClick={() => { this.open1() }}></i> */}
                            <button role="button" className="sidenav-toggle---23_Hl" aria-expanded="false" onClick={() => { this.open1() }}>
                                <span className="icon-bar---2jamJ"></span>
                                <span className="icon-bar---2jamJ"></span>
                                <span className="icon-bar---2jamJ"></span>
                            </button>
                            {/* <button onClick={()=>{this.open1()}}>File </button> */}
                            <DropdownButton id="dropdown-item-button" title="File">
                                <Dropdown.Item as="button">Sign in</Dropdown.Item>
                                <Dropdown.Item as="button">Log out</Dropdown.Item>
                            </DropdownButton>
                            <DropdownButton id="dropdown-item-button" title="Edit">
                                <Dropdown.Item as="button">Action</Dropdown.Item>
                                <Dropdown.Item as="button">Another action</Dropdown.Item>
                                <Dropdown.Item as="button">Something else</Dropdown.Item>
                            </DropdownButton>                        
                            </div>

                    </div>
                </div>
                <div className="row">
                    {
                        this.state.openstate ? <SideBar/> : null
                    }
                   {this.props.children}  
                    {/* <Menu /> */}
                </div>
            </div>
        )
    }
}
const mapStateToProps = ({BatchPrint }) => {
    return {

        batch:BatchPrint.batch
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
)(Layout);
