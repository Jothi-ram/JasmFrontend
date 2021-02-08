import { ADD_TO_CART } from '../../store/action/CartAction';
import CartItem from '../../models/Cart';

let cartLength;

const initialState = {
  cartItems: [],
 
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        cartItems: action.cartItems,
       
      };
  }
 // console.log('staate', state);
  return state;
};
