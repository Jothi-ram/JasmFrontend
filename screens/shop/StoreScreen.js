import React, { useCallback, useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import StoreItem from '../../components/StoreItems';
import {Icon} from 'react-native-elements';

import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Dimensions,
  Button,
  Image,
  ScrollView,
  AsyncStorage,
} from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import * as storeaction from '../../store/action/StoreActions';

const StoreScreen = props => {
    const stores = useSelector(state => state.StoreReducer.store)
    //const category=useSelector(state =>state.CategoryReducer.categories)
    //console.log ("category",category)
    const dispatch = useDispatch();
    const loadstore = useCallback(async () => {
        try {
          await dispatch(storeaction.fetchStores());
        } catch (err) {
          console.log('');
        }
      }, [dispatch]);
    /*  const loadstore1 = useCallback(async () => {
        try {
          await dispatch(CategoryAction.fetchcategory());
        } catch (err) {
          console.log;
        }
      }, [dispatch]);*/
      useEffect(() => {
        loadstore();
      //  loadstore1();
      }, []);
      return (
        
        <View>
          <Text style={styles.subHeading}>Shop by Store{"\n"}</Text>
          <Text style={{fontWeight: 'bold',marginLeft:7}}>Your pending orders: </Text>
          <View style={{marginTop:-20,marginLeft:230}}>
          <TouchableOpacity>
            <Text style={{color:'blue'}}>[Click here for past orders]</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
          <Text style={{marginLeft:7,color:'blue'}}>Order 1/5    </Text>
          </TouchableOpacity>
          <View style={{marginTop:-20,marginLeft:100}}>
            <Text>5 items Sathy Dept... Rs 1400  Ready to Pick-up</Text>
          </View>
          <TouchableOpacity>
          <Text style={{marginLeft:7,color:'blue'}}>Order 2/5    </Text>
          </TouchableOpacity>
          <View style={{marginTop:-20,marginLeft:100}}>
            <Text>3 items A1 Groceries Rs 350 Order-sent-to-store</Text>
          </View>
          <View style={{marginLeft:7}}>
          <TouchableOpacity>
            <Text style={{color:'blue'}}>[Click here for all orders]</Text>
            </TouchableOpacity>
          </View>
          <View style={{marginTop:10}}>
              <FlatList 
              data= {stores}
              numColumns={2}
              keyExtractor={item => item.storeCode}
              renderItem={itemData => ( 
             
                  <StoreItem
                    Image={itemData.item.productimage}
                    name={itemData.item.storeName}
                    storeDescription = {itemData.item.storeDescription}
                    id={itemData.item.id}

                    onPre={() => {
                      //console.log('pressed');
                      props.navigation.navigate('Categoryscreen', {
                        id: itemData.item.id,
                        name:itemData.item.storeName,
                        Image: itemData.item.productimage
                      });
                    }
                  }
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

 },  
 subHeading: {
  fontWeight: 'bold',
  fontSize:15,
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

export default StoreScreen;