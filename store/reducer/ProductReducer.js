import {VIEW_PRODUCTS} from '../action/ProductAction';

const initialState ={
    products: null,
}

console.log(initialState.products);
export default (state = initialState, action)=>{
   console.log("beforeswitch",action.products);
    switch(action.type){
        case VIEW_PRODUCTS:
            return{
                products: action.products
            }
    }
    return state;
}