import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import banner from "./img/YNAIv6n.png"
import "./css/CPJ.css"
const Author = "/CPJ/"


class CPJ extends React.Component {
    render() {
        return (
            <div class="body">
                <img class="banner" src={banner} alt=""></img>
                <div><App_Link name="App1" /></div>
                <Test />
            </div>
        )
    }
}
class App_Link extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Link to={Author + this.props.name}>{this.props.name}</Link>

                </div>

                <Switch>
                    <Route path={Author + this.props.name}>
                        <div>12345</div>
                    </Route>
                </Switch>
            </Router>

        )
    }
}
function Test() {
    return (
        <div>
            <a href="http://localhost:3000/api">test</a>
        </div>
    )
}
export default CPJ