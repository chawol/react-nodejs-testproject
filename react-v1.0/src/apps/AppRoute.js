import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Homepage from "../components/common/Homepage";
import CPJ from "../components/CPJ/CPJ";
// import {Chawol} from "../components/Chawol/Chawol";
import Chawol from "../components/Chawol/TodoListReal/index.js"
let name = "chawol";

const AppRoute = () => {
  return (
    <Switch>
      <Route path="/" exact component={Homepage} />
      <Route path="/CPJ" component={CPJ} />
      <Route path="/Chawol" component={Chawol}  />
      <Route component={() => <Redirect to="/" />} />
    </Switch>
  );
};

export default AppRoute;
