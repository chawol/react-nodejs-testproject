import React from "react";
import Chawol from "./Chawol";

class CheckButton extends React.Component {
    writeConsole() {
        let url = 'http://newsapi.org/v2/top-headlines?' +
            'sources=bbc-news&' +
            'apiKey=c4f1f0ff093246d19b24c1dd9d488e40';
        let req = new Request(url);
        fetch(req)
            .then(function (response) {
                console.log(response.json().PromiseValue);
            })
        console.log("YOYOYO 你到底要點幾下")
    }

    render() {
        return <input type="button" onClick={this.writeConsole}
                      value="快 點爆我!!"/>
    }
}

class AddButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = ({clickCount: 0})
        this.addCount = this.addCount.bind(this)
        //綁定this 給這個class 避免出現undefined
    }

    addCount(count) {
        //增加一個count的參數，用來表示每次增加多少
        console.log(`點一次加${count}下`)
        this.setState({clickCount: this.state.clickCount + count}, () => {
            console.log(`我點了${this.state.clickCount}下`)
            //方法2 呼叫setState 第二個參數callback function
        })

    }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     console.log(`我點了${this.state.clickCount}下`)
    //     //可以確實顯示修改後的值 避免出現初始值的問題
    // }
    render() {
        return <input type="button"
                      onClick={this.addCount.bind(this, 20)} value="點我"/>
        //在onClick中指定觸發的函式後面添加.bind(this)並填上傳入的第一個參數count的數值
    }

}

class HelloTitle extends React.Component {
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(`這次是${this.props.title}`)
    }

    render() {
        if (this.props.title == '小姐')
            return (<h1>{this.props.title}! 你好 !</h1>)
        else {
            return null
        }
    }

}

class InputGender extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({gender: ''})
        this.changeGender = this.changeGender.bind(this)
    }

    changeGender(event) {
        //嘗試取得DOM event target
        console.log(event.target)
        //取得畫面上資料的值傳給state
        this.setState({gender: event.target.value})
    }

    // changeGender(strA) {
    //     //嘗試取得傳參數近來
    //     console.log(`傳入參數為${strA}`)
    //     console.log(window.event.target)
    //     //取得畫面上資料的值傳給state
    //     this.setState({gender: event.target.value})
    // }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(`已將state.gender變更為${this.state.gender}`)
    }

    render() {
        let tittle;
        if (this.state.gender == "M")
            tittle = <HelloTitle title={"先生"}></HelloTitle>
        else if (this.state.gender == "F")
            tittle = <HelloTitle title={"小姐"}></HelloTitle>
        else if (this.state.gender == "None")
            tittle = <HelloTitle title={"阿....扶他?"}></HelloTitle>


        return (
            <div>
                {tittle}
                <select onChange={this.changeGender.bind(this)}>
                    <option value={"M"}>男</option>
                    <option value={"F"}>女</option>
                    <option value={"None"}>第三性</option>
                </select>
            </div>
        )
    }

}

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
        // console.log("Time's ticking")
    }

    componentWillUnmount() {
        console.log(`SomeBody want to kill me!!! ${this.state.time}`)
    }

    render() {
        //使用this(呼叫該建構器的物件)中的state(剛剛建立的物件屬性)內的time
        return <h1>現在時間是{this.state.time}</h1>
    }
}

class EasyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            introduction: "",
            gender: "M"
        }
        this.changeState = this.changeState.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }

    changeState(event) {
        let changeName = event.target.name
        this.setState({[changeName]: event.target.value})
        //上方的[] 是為了讓Js 知道changeName 是變數
        // this.setState({name: event.target.value})
        console.log(`現在輸入的名字是：${this.state.name}`)
        console.log(`現在選擇的性別是：${(this.state.gender == 'M') ? '男' : '女'}`)
        console.log(`現在輸入的介紹內容是：${this.state.introduction}`)
    }

    submitForm(event) {

        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.submitForm}>
                <div>
                    <label>姓名：</label>
                    <input id="name" name="name" value={this.state.name} onChange={this.changeState}/>
                    <br/>
                </div>
                <div>
                    <label>性別：</label>
                    <select id="gender" name="gender"
                            value={this.state.gender}
                            onChange={this.changeState}>
                        <option value="M">男</option>
                        <option value="W">女</option>
                    </select>
                </div>
                <div>
                    <label>自我介紹：</label><br/>
                    <textarea id="introduction" name="introduction"
                              value={this.state.introduction}
                              onChange={this.changeState}></textarea>
                    <br/>
                </div>
                <input type="submit" value="送出表單"/>
            </form>
        )
    }
}

class EasyFormCheckBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lists:
                [{id: '01', listName: '寫文章', check: false},
                    {id: '02', listName: '打程式', check: false},
                    {id: '03', listName: '耍廢', check: true}]
        }
        this.changeState = this.changeState.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }

    changeState(index) {
        let arrLists = this.state.lists
        //先把當前狀態存起來
        //確認清單中的該事項目前狀態是不是已完成
        if (arrLists[index].check)
            //原本是true的話這時候會變false
            arrLists[index].check = false
        else
            //原本是false的話這時候會變true
            arrLists[index].check = true
        //改完後用setState將lists重新設定為arrLists
        this.setState({lists: arrLists})
    }

    submitForm(event) {
        let status = '現在做了'
        //將陣列中check為true的事項都列出來，代表完成
        this.state.lists.map((list) => {
            (list.check) ? status += `${list.listName}  ` : ""
        })
        console.log(status)
        event.preventDefault()
    }

    render() {
        let lists = this.state.lists.map((list, index) => (
            <div key={list.id}>
                <input type="checkbox" checked={list.check}
                       onChange={this.changeState.bind(this, index)}
                       key={list.id}
                />
                <label>{list.listName}</label>
            </div>
        ))
        return (
            <form onSubmit={this.submitForm}>
                <div>
                    <label>每日待辦清單：</label>
                    {/*直接將剛剛跑完迴圈的變數放進來*/}
                    {lists}
                </div>
                <input type="submit" value="送出表單"/>
            </form>
        )
    }
}

export class EasyFormFitUnStateCompment extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this)
        //做一個物件給 filebox
        this.filebox = React.createRef();
    }

    onSubmit(event) {
        /*在function內就可以直接取用
       React.createRef()建立的this.filebox來取得對應設定ref的組件*/
        console.log(`選擇檔案為：${this.filebox.current.files[0].name}`)
        event.preventDefault()
    }
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div>
                    <label>上傳檔案：</label>
                    <input type="file"
                        /*這裡將用React.createRef的filebox指定給該組件的ref屬性
                        讓class內的function可以依照ref取得組件*/
                           ref={this.filebox} />
                </div>
                <input type="submit" value="送出表單" />
            </form>
        )
    }
}


export {CheckButton, AddButton, InputGender, HelloTitle, NowTime, EasyForm, EasyFormCheckBox}  ;