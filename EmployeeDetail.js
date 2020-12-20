import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FlatList } from 'react-native-gesture-handler';

export default function EmployeeDetail({route, navigation}) {

  const detail = route.params;
    return (

        <View style = {{marginTop: 20 , marginHorizontal: 40}}>
          <Text style = {{fontSize: 15}}>{JSON.stringify(detail)}</Text>
        </View>
    )
}