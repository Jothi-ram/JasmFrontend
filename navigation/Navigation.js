import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationNativeContainer } from "@react-navigation/native";

import {Ionicons} from '@expo/vector-icons';
import StoreScreen from '../screens/shop/StoreScreen';
import ProductScreen from '../screens/shop/ProductScreen';
import Categoryscreen from '../screens/shop/Categoryscreen';
import MoreScreen from '../bottomtab/MoreScreen';

import Contacts from "../bottomtab/Contacts";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CartScreen from "../screens/shop/CartScreen";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeStack = createStackNavigator();
const HomeStackScreen = () => (
  <HomeStack.Navigator>
    
    <HomeStack.Screen name="Store" component={StoreScreen} />
    <HomeStack.Screen name="Categoryscreen" component={Categoryscreen}/>
    <HomeStack.Screen name="ProductScreen" component={ProductScreen}
      options={{
        

      }}
    />
    <HomeStack.Screen name="CartScreen" component={CartScreen}/>
  </HomeStack.Navigator>
);

const ContactStack = createStackNavigator();
const ContactStackScreen = () => (
  <ContactStack.Navigator> 
    <ContactStack.Screen name="Contacts" component={Contacts} />
  </ContactStack.Navigator>
);

const MoreStack = createStackNavigator();
const MoreStackScreen = () => (
  <MoreStack.Navigator>
    <MoreStack.Screen name="More" component={MoreScreen} />
  </MoreStack.Navigator>
);

const BottomTab = createBottomTabNavigator();
const BottomTabScreen = () => (
  <BottomTab.Navigator 
    tabBarOptions={
      {
        activeTintColor: "dodgerblue"
      }
    }>
    <BottomTab.Screen name="Home" component={HomeStackScreen}
      options={{
        tabBarIcon:props =>( <Ionicons name="ios-home" size={20} color={props.color} />)
      }}
    />
    <BottomTab.Screen name="Contacts" component={ContactStackScreen} 
    options={{
      tabBarIcon:props =>( <Ionicons name="ios-contact" size={20} color={props.color}/>)
    }}/>
    <BottomTab.Screen name="More" component={MoreStackScreen} 
    options={{
      tabBarIcon:props =>( <Ionicons name="ios-more" size={20} color={props.color}/>)
    }}/>

  </BottomTab.Navigator>
);

//   const RootStack = createStackNavigator();
// const RootStackScreen = () => (
//     <RootStack.Navigator>
//       <RootStack.Screen name="" component={BottomTabScreen} />
//     </RootStack.Navigator>
//   );


export default () => {
  return (
    <NavigationContainer>
      <BottomTabScreen />
    </NavigationContainer>
  );
};
