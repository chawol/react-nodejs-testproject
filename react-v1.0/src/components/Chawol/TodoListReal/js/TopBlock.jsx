import React from "react";
import {BookMark} from "./bookMarkForTop.jsx"

class TopBlock extends React.Component {
    render() {
        return (
            <div id="topBlock">
                <BookMark to="/chawol" name="My Tasks" />
                <BookMark to="/chawol/inProgress" name="In Progress" />
                <BookMark to="/chawol/completed" name="Completed" />
            </div>
        )
    }

}
export {TopBlock};