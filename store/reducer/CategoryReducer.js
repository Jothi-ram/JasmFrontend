import {VIEW_CATEGORY} from '../action/CategoryActions';

const initialState ={
    categories: null,
}


export default (state = initialState, action)=>{
    switch(action.type){
        case VIEW_CATEGORY:
            return{
                categories: action.categories
            }
    }
    return state;
}