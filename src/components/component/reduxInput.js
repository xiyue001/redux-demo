

import React,{Component} from 'react'
import actionCreate from '../../store/todolist/actionCreate'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
class reduxInput extends Component {
    constructor(props){
        super(props)
        this.addItem = this.addItem.bind(this)
    }
    addItem (e){
        if(e.keyCode === 13){
            this.props.add(this.el.value)
            this.el.value = ""
        }
    }
    render (){
        return (
            <div className="form-group">
                <input ref = { el => this.el = el } onKeyUp = {this.addItem} type="text" className="form-control"/>
            </div>
        )
    }
}


export default connect((state)=>{
    return state
},(dispatch)=>{
    return bindActionCreators(actionCreate,dispatch)
})(reduxInput)