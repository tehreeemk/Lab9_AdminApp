import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , Button, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function Home({navigation}) {

    return (

        <View style= {styles.container}>

            <TouchableOpacity
            style = {styles.button} 
            onPress={() => navigation.navigate('Products')}
            >
                <Text style = {{ color: 'white' , fontWeight: 'bold', fontSize: 18, textAlign: 'center'}}>Manage Products</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style = {styles.button} 
            onPress={() => navigation.navigate('Orders')}
            >
                <Text style = {{ color: 'white' , fontWeight: 'bold', fontSize: 18, textAlign: 'center'}}>Manage Orders</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style = {styles.button} 
            onPress={() => navigation.navigate('Employees')}
            >
                <Text style = {{ color: 'white' , fontWeight: 'bold', fontSize: 18 , textAlign: 'center'} }>Manage Employees</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
        alignItems: 'center'

    },
    button : {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'coral',
        padding: 15,
        backgroundColor: 'coral', 
        width: 200,
        textAlign: 'center',
        marginTop: 40
    }
});