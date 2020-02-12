import "bootstrap/dist/css/bootstrap.css";
import React from 'react';
import ReactDOM from 'react-dom';
import CPJ from './apps/CPJ/CPJ'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './styles.scss';
const Index = () => {
    return (
        <Router>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    Navbar
          </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        {/* <li className="nav-item active">
                            <Link className="nav-link" to="/Chawol">
                                Chawol
                </Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/Shsh">
                                Shsh
                </Link>
                        </li> */}
                        <li className="nav-item active">
                            <Link className="nav-link" to="/CPJ">
                                CPJ
                </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <Switch>
                {/* <Route path="/Chawol">
                    <Chawol />
                </Route>
                <Route path="/Shsh">
                    <Shsh />
                </Route> */}
                <Route path="/CPJ">
                    <CPJ />
                </Route>
            </Switch>
        </Router>
    )
};
ReactDOM.render(<Index />, document.getElementById('root'));