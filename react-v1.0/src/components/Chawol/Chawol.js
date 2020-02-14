import React from "react";
import Moon from './moon.png'

class Chawol extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello , {this.props.name} !</h1>
                <img src={Moon} alt="Smiley face" height="42" width="42"/>
            </div>
        )
    }
}

export default Chawol