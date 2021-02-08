import React, { useCallback, useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  Button,
} from 'react-native';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const Categoryscreen = props => {
  return (
    <View style={styles.screen}>
        <View style={styles.store}>
        <View style={styles.imagecontainer}>
         <Image
           style={styles.image}
           source={{
             uri:
               'https://image.shutterstock.com/image-vector/grocery-shopping-basket-vegetables-fruits-260nw-768871540.jpg',
           }}
         />
       </View>
     </View>
          <View>
              <TouchableOpacity
                onPress={
                    props.onPre
                 }
              >
                <View style={styles.txtc}>
                  <Text style={styles.txt}>{props.name}{props.Image}</Text>
                </View>
              </TouchableOpacity>
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
  store: {
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
  txtc: {
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
  },
  txt: {
    fontSize: 15,
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
    width: '100%',
    height: '100%',
  },
});
export default Categoryscreen;
