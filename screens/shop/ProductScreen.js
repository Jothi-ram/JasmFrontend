import * as ProductAction from '../../store/action/ProductAction';
import React, { useCallback, useEffect } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import * as cartactions from '../../store/action/CartAction';
import { useSelector, useDispatch } from 'react-redux';
import ProductItem from '../../components/Productitem';
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Dimensions,
  Button,
  ScrollView,
} from 'react-native';



const ProductScreen = props => {
  let addedCartIds = [];
    const displayproduct=useSelector(state =>state.ProductReducer.products)
    const cartItem = useSelector(state => state.CartReducer.cartItems);
    console.log('cartItem', cartItem);
    //console.log ("product",displayproduct)
    const id=props.route.params.id;
    const storename=props.route.params.storeName;
    const checkStore = (productid,productname,unit,unitprice,a, storeid, val, cartItem) => {
        dispatch(cartactions.addCart(productid,productname,unit,unitprice,a, storeid, val));
      }
  //  console.log("display stores",storename);
    const dispatch = useDispatch();
      const loadproduct1 = useCallback(async () => {
        try {
          await dispatch(ProductAction.fetchProduct(id));
        } catch (err) {
          console.log;
        }
      }, [dispatch]);
      useEffect(() => {
        loadproduct1();
        //categ();
      }, []);
      return (
        <View>
            <TouchableOpacity style ={{marginLeft:310}}
           onPress={()=>{props.navigation.navigate('CartScreen')}}>
               <AntDesign name="shoppingcart" size={24} color="black"  />
           </TouchableOpacity>
           <Text style={styles.head}>You are shopping at:</Text>
          <Text style={styles.subHeading}> {storename}</Text>
         
          <Text style={styles.head}>A-12,Mysore Road,sathyRoad</Text>
        <View style={{marginTop:20}}>
         
              <FlatList 
              data= {displayproduct}
              numColumns={2}
              keyExtractor={item => item.id}
              renderItem={itemData  => (  
                 <ProductItem
                 Image={itemData.item.productimage}
                name={itemData.item.productname}
                cartItems={cartItem}
                addedCartIds={addedCartIds}
                quan={itemData.item.quan}
                categoryname={itemData.item.productcategoryname1}
                add={async () => {
                  checkStore(
                    itemData.item.productid,
                    itemData.item.unitprice,
                    1,
                    itemData.item.storeids,
                    null,
                    cartItem,
                  );
                  // await dispatch(getCart.getCart());
                }}
                sub={async () => {
                  checkStore(
                    itemData.item.productid,
                    itemData.item.unitprice,
                    2,
                    itemData.item.storeids,
                    null,
                    cartItem,
                  );
                  //    await dispatch(getCart.getCart());
                }}
              />
              )}
        />
        </View>
          </View>
      )
      
 }

 const styles = StyleSheet.create({
  heading: {
  fontWeight: 'bold',
  fontSize:30,
  marginTop:-35,
  marginLeft:20,
  //backgroundColor: 'grey',
  //alignSelf: 'flex-start'
   },  
   head:{
    fontWeight: 'bold',
    fontSize:15,
    textAlign:'center'
   },
   subHeading: {
    fontWeight: 'bold',
    fontSize:22,
    textAlign:'center'
     }, 
     
   subHead: {
    fontWeight: 'bold',
    fontSize:20,
    marginTop:-20,
    textAlign:'center'
     }, 
     
     RectangleShapeView: {
      marginTop: 35,
      width: 200 * 2,
      height: 30,
      marginLeft:5,
      backgroundColor: 'grey'
     }
  });

export default ProductScreen;