import * as CategoryAction from '../../store/action/CategoryActions';
import React, { useCallback, useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import * as storeaction from '../../store/action/StoreActions';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from 'react-redux';
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
import Categoryitems from '../../components/Categoryitems';

const Categoryscreen = props => {
    //const stores = useSelector(state => state.StoreReducer.store)
    const category=useSelector(state =>state.CategoryReducer.categories)
    const stores = useSelector(state => state.StoreReducer.store)
    //console.log ("category",category)
    const id=props.route.params.id;
    const storename=props.route.params.name;
    //console.log("display store",storename);
    const dispatch = useDispatch();
    /*const loadstore = useCallback(async () => {
        try {
          await dispatch(storeaction.fetchStores());
        } catch (err) {
          console.log;
        }
      }, [dispatch]);*/
      const loadstore1 = useCallback(async () => {
        try {
      //    await dispatch(storeaction.fetchStores());
          await dispatch(storeaction.fetchStores());
          await dispatch(CategoryAction.fetchcategory(id));
        } catch (err) {
          console.log;
        }
      }, [dispatch]);
      useEffect(() => {
        loadstore1();
        loadstore1();
        //categ();
      }, []);
      return (
        <View> 
        
          <View></View><Text style={styles.subHead}>Select Product Category</Text>
          <Text style={styles.head}>You are shopping at:</Text>
          <Text style={styles.subHeading}>{storename}</Text>
          <Text style={styles.head}>A-12,Mysore Road,sathyRoad</Text>
        <View style={{marginTop:10}}>
         
              <FlatList 
              data= {category}
              
              numColumns={2}
              keyExtractor={item => item.categoryName} //item.id
              renderItem={itemData => (
                <Categoryitems
                  
                     name={itemData.item.categoryName}
                      Image={itemData.item.categoryImage} 
                      onPre = { () => {
                        props.navigation.navigate('ProductScreen',{
                          id:itemData.item.id,
                          storeName:storename
                        });
                      }}
                         
                      />
               ) }
       />
          
          </View>
         </View>
      )
      
 }
  const styles = StyleSheet.create({
  heading: {
  fontWeight: 'bold',
  fontSize:30,
  
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

 
    
export default Categoryscreen;