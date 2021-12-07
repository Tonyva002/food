import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from './Container/SearchScreen';
import ResultsShowScreen from './Container/ResultsShowScreen';


const Stack = createStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Search" component={SearchScreen} options={{title: "Business Search"} }/>
        <Stack.Screen name="ResultsShow" component={ResultsShowScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};





