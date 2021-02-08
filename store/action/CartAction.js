import uri from '../../Api/Uri';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Cart from '../../models/Cart';

export const ADD_TO_CART = 'ADD_TO_CART';

export const addCart = (productid,productname,unit,unitprice,a, storeid, val, cartItem) => {
    return async dispatch => {
    const id = productid;
    let removableId;

    const Item = {
        productId: productid,
        productName: productname,
        unit: unit,
        variant: null,
        quantity: 1,
        productPrice: unitprice,
       // sum: price,
      };

      if (cartItem === undefined) {
        cartItem = [];
        cartItem.push(Item);
    }
    let loadedCart = [];
    for (const key in cartItem) {
      loadedCart.push(
        new Cart(
          cartItem[key].productId,
          cartItem[key].productName,
          cartItem[key].productPrice,
          cartItem[key].variant,
          cartItem[key].unit,
          cartItem[key].quantity,
          cartItem[key].sum,
        ),
      );
    }
    dispatch({
        type: ADD_TO_CART,
        cartItems: loadedCart
    })

  }
}

