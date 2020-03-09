import React from "react";
import Moon from '../../assets/pic/moon.png'
import {createStore} from "redux";
import {MessageForem} from "./reduxPritice.jsx"

let objLists =
    [{id: 'a', list: '打文章'}, {id: 'b', list: '寫程式'}, {id: 'c', list: '耍廢'}]
const data = {message:[{key:"1",name:'神Q',message:'嗨！大家好啊！'},
        {key:"2",name:'小馬',message:'早安啊！昨天有沒有好好發文？'},
        {key:"3",name:'王子',message:'ㄛ！別說了，那真的超級累！'},
        {key:"4",name:'神Q',message:'哈哈哈！加油啦！再一下就結束了！'},
        {key:"5",name:'王子',message:'結束後我一定要爆睡一頓！'},]}
const addMessage = article => ({type: 'addMessage', payload: article})
const rootReducer = (state = data, action) => {
    //用Action 判斷她到底在幹嘛
    switch (action.type) {
        case "addMessage":
            action.payload.key = String(state.message.length+1)
            return {...state,message:[...state.message,action.payload]}
        default:
            return state
    }
}
//建立保管資料的store
const store = createStore(rootReducer)

//測試用加上去的，等等再把它拿掉：
window.store = store;
window.addMessage = addMessage;

class Chawol extends React.Component {

    render() {
        return (
            <div>
                <h1>Hello , {this.props.name} !</h1>
                <img src={Moon} alt="Smiley face" height="42" width="42"/>
                {/*<EasyFormTemp/>*/}
                <MessageForem/>
            </div>
        )
    }
}


export  {Chawol , store,addMessage};
