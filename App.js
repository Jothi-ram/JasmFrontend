import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './navigation/Navigator';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import StoreReducer from './store/reducer/StoreReducer'
import CategoryReducer from './store/reducer/CategoryReducer'
import ProductReducer from './store/reducer/ProductReducer'
import CartReducer from './store/reducer/CartReducer'
import Navigation from './navigation/Navigation';
import StoreScreen from './screens/shop/StoreScreen';
const rootreducer = combineReducers({
  StoreReducer : StoreReducer,
  CategoryReducer:CategoryReducer,
  ProductReducer:ProductReducer,
  CartReducer:CartReducer
})
const store  = createStore(rootreducer, applyMiddleware(ReduxThunk));
export default function App() {
  return (
   <Provider store={store}>
     <Navigation/>
   </Provider>
  );
}

