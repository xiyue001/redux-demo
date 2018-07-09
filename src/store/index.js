import {createStore} from "redux"
import reducer from "./reducer"
import actioncreate from './todolist/actionCreate'
// const createStore =require("redux").createStore 
// const reducer =require("./reducer") 
const Store = createStore(reducer)
Store.createStore = createStore
console.log(Store.getState().todos)
export default Store