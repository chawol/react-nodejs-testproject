import React from "react";
import ReactDOM from "react-dom"
import {Provider, connect} from "react-redux"
import {store, addMessage} from "./Chawol.js";

/*建立一個變數來存放connect回傳的組件，
注意這邊不是兩個參數哦！是兩個括號，
第一個給入mapStateToProps，第二個給要使用資料的組件*/

class InputMessage extends React.Component {
    constructor(props) {
        super(props)
        this.state = ({name: '', message: ''})
        this.changeState = this.changeState.bind(this)
        this.clearMessage = this.clearMessage.bind(this)
        this.submitMessage = this.submitMessage.bind(this)
    }

    changeState(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    clearMessage() {
        this.setState({name: '', message: ''})
    }

    submitMessage() {
        let messageData = {
            key: '',
            name: this.state.name,
            message: this.state.message,
        }
        this.props.addMessage(messageData)
        this.clearMessage()
    }

    render() {
        return (
            <div>
                暱稱：<input type="text" name="name"
                          value={this.state.name}
                          onChange={this.changeState}/>
                <br/>
                訊息：
                <br/><textarea name="message"
                               value={this.state.message}
                               onChange={this.changeState}></textarea>
                <input type="button" value="送出留言"
                       onClick={this.submitMessage}/>
            </div>
        )
    }
}

class MessageList extends React.Component {
    render() {
        let message = this.props.data.map((item) => {
            return <li>{item.name}：{item.message}</li>
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

const mapDispatchToProps = dispatch => {
    return {
        addMessage: article => dispatch(addMessage(article))
    }
}


class ConnectMessageForm extends React.Component {
    render() {
        return (
            <div>
                {/*把兩個組件放進來，一個需要資料一個需要事件
                這裡用props來傳，因為ConnectMessageForm等等會被connect
                資料也是傳到他的props中*/}
                <InputMessage addMessage={this.props.addMessage}/>
                <MessageList data={this.props.data}/>
            </div>
        )
    }
}

const MessageForm = connect(mapStateToProps, mapDispatchToProps)(ConnectMessageForm);

class MessageForem extends React.Component {
    render() {
        return (
            <div>
                <Provider store={store}>
                    <MessageForm></MessageForm>
                </Provider>
            </div>
        )
    }
}

export {MessageForem};