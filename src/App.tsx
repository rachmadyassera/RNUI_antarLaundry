import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Home,Splash,Pesanan,Akun} from './pages';
import {BottomNavigator} from './components';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const MainApp = () => {
  return(
    <Tab.Navigator tabBar={(props) => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}}/>
      <Tab.Screen  name="Pesanan" component={Pesanan} options={{headerShown: false}}/>
      <Tab.Screen  name="Akun" component={Akun} options={{headerShown: false}}/>
    </Tab.Navigator> );
}

function RootStack() {
  return (
    <Stack.Navigator initialRouteName='Splash'>
      <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}} />
      <Stack.Screen name="MainApp" component={MainApp} options={{headerShown: false}} /> 
    </Stack.Navigator>
    
    
  );
}


const App = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})