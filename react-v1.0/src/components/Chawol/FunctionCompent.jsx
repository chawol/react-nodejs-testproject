import React from "react";

class CheckButton extends React.Component {
    writeConsole() {

        console.log("YOYOYO 你到底要點幾下")
    }
    render() {
        return <input type="button" onClick={this.writeConsole}
        value="快 點爆我!!"
        />

    }

}
export default CheckButton;