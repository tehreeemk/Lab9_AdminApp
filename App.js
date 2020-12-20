import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Products from './Products'
import Orders from './Orders'
import Employees from './Employees'
import Home from './Home'
import ProductDetail from './ProductDetail'
import OrderDetail from './OrderDetail'
import EmployeeDetail from './EmployeeDetail'


const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen name="Orders" component={Orders} />
      <Stack.Screen name="Employees" component={Employees} />
      <Stack.Screen name="Product Detail" component={ProductDetail} />
      <Stack.Screen name="Order Detail" component={OrderDetail} />
      <Stack.Screen name="Employee Detail" component={EmployeeDetail} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}



