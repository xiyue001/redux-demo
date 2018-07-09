
import { ADD_NEW_TO , CHANGE_ID , REMOVE} from './const'
import store from '../index'

const actionCreate = {
    add (title){
       
        let action = {
            title,
            type : ADD_NEW_TO
        }
        return action
    },
    change (id) {
        
        let action = {
            type : CHANGE_ID,
            id 
        }
        return action
    },
    remove (id){
        
        let action = {
            id , 
            type : REMOVE
        }
        return action
    }
}

export default actionCreate