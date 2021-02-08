import React  from 'react';
import { View,Text,StyleSheet,FlatList,Image,Dimensions,TouchableOpacity,} from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as cartactions from '../../store/action/CartAction';
import { useSelector, useDispatch } from 'react-redux';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;


const CartScreen = props => {
    return( 
        <View>
           
     <View></View><Text style={styles.subHead}>Shopping cart details</Text>
     <Text style={styles.head}>You are shopping at:</Text>
     <Text style={styles.subHeading}>Kannan departmental stores</Text>
     <Text style={styles.head}>A-12,Mysore Road,sathyRoad</Text>
     <Text style={styles.sub}>Cart Value:RS 1125</Text>
  
     <View style={{marginTop:20}}>
         
     <View style={styles.screen}>
      
      <View style={styles.product}>
<View style={styles.imagecontainer}>
 
</View>
</View>
   </View>
        <Text></Text>
     </View>
     </View>
    
    )
};

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
     sub:{
      fontWeight: 'bold',
      fontSize:20,
      textAlign:'center',
      marginTop:20
     },
     subHeading: {
      fontWeight: 'bold',
      fontSize:22,
      textAlign:'center'
       }, 
       
     subHead: {
      fontWeight: 'bold',
      fontSize:20,
      
      textAlign:'center'
       }, 
       
       RectangleShapeView: {
        marginTop: 35,
        width: 200 * 2,
        height: 30,
        marginLeft:5,
        backgroundColor: 'grey'
       },
       
}); 
  export default CartScreen;