import React , {Component} from 'react'

import store from '../../store'

class TodoInfo extends Component {
    constructor(props){
        super(props)
        this.state = {
            todos : store.getState().todolist.todos
        }
    }
    componentWillMount(){
        store.subscribe(() => {
            //通知组件去或者最新的状态
            this.setState({ todos: store.getState().todolist.todos })
        })
    }
    getinfo(){
        let info = {
            num : 0,
            finishedNum : 0,
            unfinishedNum : 0
        }
        if(!this.state.todos.length) return info
        info.num = this.state.todos.length;
        this.state.todos.forEach(element => {
            if(element.isflash){
                info.finishedNum ++
            }else{
                info.unfinishedNum ++
            }
        });
        return info
    }
    render (){
        let info = this.getinfo();
        return (
            <div className="alert alert-info">
                总共有 <label className="label label-primary">{info.num}</label> 条;
                其中 <label className="label label-primary">{info.finishedNum}</label> 条完成事项;
                <label className="label label-primary">{info.unfinishedNum}</label> 条未完成事项;
            </div>
        )
    }
}

export default TodoInfo