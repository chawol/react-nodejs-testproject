import "bootstrap/dist/css/bootstrap.css";
import React from 'react';
import ReactDOM from 'react-dom';
import CPJ from './apps/CPJ/CPJ'
import Chawol from './apps/Chawol/Chawol'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import './styles.scss';

const Index = () => {
    return (
        <Router>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <a className="navbar-brand" href="#">
                    Navbar
          </a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        {/*
                        <li className="nav-item active">
                            <Link className="nav-link" to="/Shsh">
                                Shsh
                </Link>
                        </li> */}
                        <li className="nav-item active">
                            <Link className="nav-link" to="/Chawol">
                                Chawol
                            </Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/CPJ">
                                CPJ
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <Redirect></Redirect>
            <Switch>
                {/*

                <Route path="/Shsh">
                    <Shsh />
                </Route> */}
                <Route path="/Chawol">
                    <Chawol name={"Chawol"}/>
                </Route>
                <Route path="/CPJ">
                    <CPJ/>
                </Route>
            </Switch>
        </Router>
    )
};
ReactDOM.render(<Index/>, document.getElementById('root'));