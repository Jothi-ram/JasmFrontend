import React, { useCallback, useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import {FontAwesome5} from '@expo/vector-icons';
import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  Button,
  BackHandler,
  TextInput,
} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import Reac, { useState } from 'react';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const ProductScreen = props => {
  const [count,setCount]=useState(10)
  return (
    <View style={styles.screen}>
      
              <View style={styles.product}>
       <View style={styles.imagecontainer}>
         <Image
           style={styles.image}
           source={{
             uri:
               'https://s1.1zoom.me/b5050/413/Fruit_Apples_Pears_442309_3840x2400.jpg',
           }}
         />
       </View>
     </View>
           <View>
                <View style={styles.txtc}>
                  <Text style={styles.txt}>{props.name}{props.image}</Text>
            </View>
            {props.addedCartIds.find(item => {
         if (props.id === item) {
           return true;
         }
       }) ? (
         <View style={styles.quan}>
           <TouchableOpacity style={styles.plus} onPress={props.sub}>
             <AntDesign name="minuscircleo" size={15} color="black" />
           </TouchableOpacity>
           <View>
             {props.cartItems !== undefined && (
               <FlatList
                 data={props.cartItems}
                 keyExtractor={item => item.productid.toString()}
                 listKey={item => item.productid.toString()}
                 style={{ flex: 1 }}
                 renderItem={itemData => (
                   <View style={{ justifyContent: 'center' }}>
                     {itemData.item.productid === props.id && (
                       <View>
                         <View>
                           <Text>{itemData.item.quantity}</Text>
                         </View>
                       </View>
                     )}
                   </View>
                 )}
               />
             )}
           </View>
           <TouchableOpacity style={styles.plus} onPress={props.add}>
             <AntDesign name="pluscircleo" size={15} color="black" />
           </TouchableOpacity>
         </View>
       ) : (
         <TouchableOpacity
           style={styles.addToCart}
           onPress={props.add}
           activeOpacity={0.8}
         >
           <Text>Add to Cart</Text>
           <FontAwesome5 name="cart-plus" size={15} color="black" />
         </TouchableOpacity>
       )}
      </View>

    </View>
  );
};
const styles = StyleSheet.create({
  screen: {

    /*flex: 1,
    height: HEIGHT,
    width: WIDTH,
    backgroundColor: 'white',*/
  },
  product: {
    // flex: 0.5,
    //shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    // shadowRadius: 8,
    
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
    width: WIDTH / 2.2,
    height: HEIGHT / 5,
    
    //  borderWidth: 1,
    //borderColor: 'grey',
   elevation: 5,
    overflow: 'visible',
    
    //  backgroundColor: 'skyblue',
  },
  quan: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '7%',
    //   padding: 10,
    margin: 5,
    //backgroundColor: 'green',
    overflow: 'hidden',
    width: '90%',
  },
  plus: {
    //  backgroundColor: 'lightgrey',
    height: 18,
    width: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },
  addToCart: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '7%',
    padding: 10,
    margin: 5,
    backgroundColor: '#f6f6f6',
    overflow: 'hidden',
    width: '50%',
    borderRadius: 15,
    padding: 10,
    borderWidth: 0.2,
    borderColor: 'lightgrey',
    elevation: 2,
  },
  txtc: {
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
  },
  txt: {
    fontSize: 13,
   // marginTop:40,
    color: 'black',
  },
  imagecontainer: {
    // flex: 1,
    width: '90%',
    height: '85%',
    overflow: 'scroll',
    marginTop:5,
    
    // backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
     
     //marginLeft: 6,
     //marginBottom: -1,
    // marginLeft: 3,
  },
  image: {
   // marginTop:100,
    width: '100%',
    height: '100%',
  },
  Buttoncontainer:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 95,
    alignItems:'center',
    paddingHorizontal:15,
    height: 50
    
    
  }
});
export default ProductScreen;
/*</View>
<View>
<LinearGradient
  colors={['#1f9691', '#7ef5fb']}
  start={{ x: -0.5, y: 0.5 }}
  end={{ x: 1, y: 1 }}
  style={styles.product}
>
*/ //</LinearGradient>
//
//<Icon name="ios-add-circle" color={"white"}/>
