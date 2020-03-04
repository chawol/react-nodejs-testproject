import React from "react";
import Moon from '../../assets/pic/moon.png'
import {NowTime, EasyForm, EasyFormCheckBox, EasyFormFitUnStateCompment} from "./FunctionCompent.jsx";
import {TodoList} from "./TodoList.js"
import {EasyFormTemp, MessageBlock} from "./OutpostStatePrictice.jsx"

let objLists =
    [{id: 'a', list: '打文章'}, {id: 'b', list: '寫程式'}, {id: 'c', list: '耍廢'}]

class Chawol extends React.Component {

    render() {
        return (
            <div>
                <h1>Hello , {this.props.name} !</h1>
                <img src={Moon} alt="Smiley face" height="42" width="42"/>
                <EasyFormTemp/>
                <MessageBlock/>
            </div>
        )
    }
}



export default Chawol;
