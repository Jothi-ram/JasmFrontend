import {VIEW_STORE} from '../action/StoreActions';
import { VIEW_CATEGORY } from '../action/CategoryActions';

const initialState ={
    store: null,
}


export default (state = initialState, action)=>{
    switch(action.type){
        case VIEW_STORE:
            return{
                store: action.stores
            }
    }
    return state;
}