import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import StoreScreen from '../screens/shop/StoreScreen'
import Categoryscreen from '../screens/shop/Categoryscreen'
import ProductScreen from '../screens/shop/ProductScreen';
const Stack = createStackNavigator();

function  MyStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name= "StoreScreen"
                component={StoreScreen}
                options={{ headerShown: false }}
            />
             <Stack.Screen
                name="Categoryscreen"
               component={Categoryscreen}
             options={{ headerShown: false }}
      />
             <Stack.Screen
                name="ProductScreen"
               component={ProductScreen}
             options={{ headerShown: false }}
      />
              <Stack.Screen
                name="ProductScreen"
               component={CartScreen}
             options={{ headerShown: false }}
      />

        </Stack.Navigator>
       
    );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="Store" component={MyStack} />
        {/* <Drawer.Screen name="My Orders" component={MyOrderStack} */ }
     </Drawer.Navigator>
    );
  }

export default function App() {
    return (
      <NavigationContainer>
        <MyDrawer />
      </NavigationContainer>
    );
  }
  