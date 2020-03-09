import React from "react";
import {TopBlock} from "./TopBlock.jsx"
import {HashRouter} from "react-router-dom";
import {InputTask} from "./InputTask.jsx";
import Route from "react-router-dom/es/Route";
import {MyTasks} from "./MyTask.jsx";

class Main extends React.Component {
    render() {

        return <div>
            <HashRouter>
                <TopBlock/>
                <Route exact path="/chawol" component={MyTasks} />
            </HashRouter>
        </div>
    }

}

export default Main;
