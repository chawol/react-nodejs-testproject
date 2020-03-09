import React from "react";
import {InputTasksForm} from "./inputTasksForm.jsx"

class InputTask extends React.Component {

    render() {
        return (
            <div>
                <div className="inputTaskTitle">
                    <input type="checkbox" className="taskChk"/>
                    <input type="text" className="taskTitle" placeholder="Type Something Here…"/>
                    <i className="far fa-star fa-lg icon"></i>
                    <i className="fas fa-pen fa-lg icon icon_edit"></i>
                </div>
                <InputTasksForm closeAdd={this.props.closeAdd}></InputTasksForm>
            </div>

        )
    }
}
export {InputTask}