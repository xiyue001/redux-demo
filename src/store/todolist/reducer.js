import {ADD_NEW_TO , CHANGE_ID,REMOVE} from './const'

import state from './state'
const reducer = (pre = state , action)=>{
    const new_state = Object.assign({},pre)
    switch (action.type) {
        case ADD_NEW_TO : new_state.todos.push({id : addId(new_state.todos) , title : action.title})
        break;
        case CHANGE_ID:
        //更改某一条数据的isFinished
        new_state.todos = change.bind(new_state.todos,action.id)()
    break;
        case REMOVE:
            //更改某一条数据的isFinished
            new_state.todos = remove.bind(new_state.todos,action.id)()
        break;
        default : break
    }
    return new_state
}

export default reducer

function addId(todos){
    let arr = todos.slice()
    if(!arr.length) return 1
    return arr.sort((a , b)=>{
        return b.id - a.id
    })[0].id + 1
}

function change(id){
    let arr = this.slice()
    for(var i = 0 ; i < arr.length ; i ++){
        let item = arr[i]
        if(item.id === id ){
            item.isflash = !item.isflash
            break
        }
    }
    return arr
}

function remove(id){
    let arr = this.slice()
    return arr.filter((item)=>{
        if ( item.id === id ) return false;
        return true;
    })
}