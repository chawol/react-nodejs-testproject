import React from "react";
import Moon from './moon.png'
import CheckButton from "./FunctionCompent.jsx";

class Chawol extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello , {this.props.name} !</h1>
                <img src={Moon} alt="Smiley face" height="42" width="42"/>
                <TodoList/>
                <NowTime></NowTime>
                <CheckButton></CheckButton>
            </div>
        )
    }

}
class ToDoItems extends React.Component {

    render() {
        let displayItems = this.props.items.map(function (item) {
            // return (<li key={item.id}>{item.data}</li>);
            return (<TodoItem key={item.id}>{item.data}</TodoItem>);
        });
        return (
            <div>
                {displayItems}
            </div>

        )
    }
}

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<li key={this.props.key}>{this.props.children}</li>);
    }
}

class AddTodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoText: "default"
        }
    }

    handleTodoChange(e) {
        this.setState({todoText: e.target.value});
    }

    handleAddTodoItem(e) {
        console.log(this.state.todoText);
        // 如何將資料新增到TodoItems中?
    }

    render() {
        return (
            <div>
                <input type="text"
                       value={this.state.todoText}
                       onChange={this.handleTodoChange}/>
                <button
                    onClick={this.handleAddTodoItem}>Add Todo Item
                </button>
            </div>
        );
    }
}

// class AddTodoForm extends React.Component {
//
//     render() {
//         return (
//             <div>我用來增加TodoItem</div>
//         );
//     }
// }
class NowTime extends React.Component {
    //使用類別中的constructor建構子，參數中傳入props是必要的
    constructor(props) {
        //super呼叫上一層類別也就是React.Component內的props屬性
        super(props)
        /*設定該類別的屬性，this就是指定到使用NowTime建構出來的物件
        這裡針對那個物件建立一個state的物件屬性，並在裡面設定該類別的值*/
        this.state = {time: new Date().toLocaleTimeString()}
    }

    componentDidMount() {
        /*在建構完成後，每秒都去刷新this.state.time的值
        (1)先去宣告一個更新state內容的function
        (2)每秒去執行一次該function刷新*/
        const upTiame = () => {
            //這裡面的setState()能夠重新設定state的值
            this.setState({time: new Date().toLocaleTimeString()})
        }
        setInterval(upTiame, 1000)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        console.log("Time's ticking")
    }

    componentWillUnmount() {
        console.log(`SomeBody want to kill me!!! ${this.state.time}`)
    }

    render() {
        //使用this(呼叫該建構器的物件)中的state(剛剛建立的物件屬性)內的time
        return <h1>現在時間是{this.state.time}</h1>
    }
}

class TodoList extends React.Component {
    render() {
        let todoItems = [
            {id: 1, data: "Item 1"},
            {id: 2, data: "Item 2"}];
        return (
            <div className="todoList">
                <h1>我是一個TodoList容器</h1>
                <h2>我組合了TodoItems以及AddTodoForm兩個元件</h2>
                <ToDoItems items={todoItems}/>
                <AddTodoForm/>
            </div>
        );
    }
}
//宣告一個function，來移除document.getElementById('root')中的組件


export default Chawol