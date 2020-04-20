import React, {Component} from 'react';
import { Route, Switch} from "react-router-dom";
import Login from './components/login';
import Menu from "./components/menu";
class Routes extends Component {
    render(){
        return(
        <Switch>
        <Route exact path="/" component={Menu}  />
        <Route path="/login" component={Login}  />
        </Switch>
        )
    }
}

export default Routes;