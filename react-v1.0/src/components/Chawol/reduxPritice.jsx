import React from "react";
import ReactDOM from "react-dom"
import {Provider, connect} from "react-redux"
import {store, addMessage} from "./Chawol.js";

/*建立一個變數來存放connect回傳的組件，
注意這邊不是兩個參數哦！是兩個括號，
第一個給入mapStateToProps，第二個給要使用資料的組件*/

class MessageList extends React.Component {
    render() {
        let message = this.props.data.map((item) => {
            console.log(item)
            return <li key={item.key}>{item.name}：{item.message}</li>
        })
        return (
            <ul>
                {message}
            </ul>
        )
    }
}

const mapStateToProps = state => {
    return {data: state.message}
}

const List = connect(mapStateToProps)(MessageList)

class MessageFormRe extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <List/>
            </Provider>
        )
    }
}

class InputMessage extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({name: '', message: ''})
        this.changeState = this.changeState.bind(this)
        this.clearMessage = this.clearMessage.bind(this)
        this.submitMessage = this.submitMessage.bind(this)

    }

    clearMessage() {
        this.setState({name: '', message: ""})
    }

    changeState(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    submitMessage() {
        let messageData = {
            key: '',
            name: this.state.name,
            message: this.state.message
        }
        this.props.addMessage(messageData)
        this.clearMessage()
    }


}

export {MessageFormRe};