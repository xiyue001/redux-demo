

import React,{Component} from 'react';
import './index.scss'
import actionCreat from '../../store/todolist/actionCreate'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const TodoItem = ({data , change , remove  })=>{
    return (
        <li className={"list-group-item " + (data.isflash? 'finished' : '')}>
            <input onChange = {change} type = "checkbox" defaultChecked = {data.isflash}/>
            <span className="title" >{ data.title }</span>
            <button onClick = { remove } type="button" className="close" ><i >&times;</i></button>
        </li>
    )
}
class Todocontent extends Component {
    renderItem (){
        let { todos } = this.props.todolist;
        return todos.map((item)=>{
            let change = this.props.change.bind(this,item.id)
            let remove = this.props.remove.bind(this,item.id)
            return (
                <TodoItem change = {change} remove = {remove} key = {item.id} data = {item}/>
            )
        })
    }
    render (){
        return (
            <ul>
                {this.renderItem()}
            </ul>
        )
    }
}

export default connect((state)=>{return state},(dispatch)=>{
    return bindActionCreators(actionCreat,dispatch)
})(Todocontent)