import React from "react"

class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let items = ["coding", "sleep","play","New"];
        // let lists = items.map(function (list) {return <li>{list}</li>})
       // let lists = items.map((list)=><li>{list}</li>)
        let lists = this.props.objList.map((list)=><li Key={list.id} id={list.id}>{list.list}</li>)
        return (
            <ul>
                {lists}
            </ul>
        )
    }
}

export {TodoList}