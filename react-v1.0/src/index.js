import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom";
import TopNav from "./components/common/TopNav";
import AppRoute from "./apps/AppRoute";
import {HashRouter as Router} from "react-router-dom";
import "./styles.scss";

ReactDOM.render(
    <Router>
        <TopNav/>
        <div className="container-fluid">
            <AppRoute/>
        </div>
    </Router>,
    document.getElementById("root")
);


const removeComponent = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
}



// setInterval(removeComponent,5000)
//測試Unmount 用