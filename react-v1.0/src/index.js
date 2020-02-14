import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom";
import TopNav from "./components/common/TopNav";
import AppRoute from "./apps/AppRoute";
import { HashRouter as Router } from "react-router-dom";
import "./styles.scss";

ReactDOM.render(
  <Router>
    <TopNav />
    <div className="container">
      <AppRoute />
    </div>
  </Router>,
  document.getElementById("root")
);
