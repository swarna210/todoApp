
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  useColorScheme,
  View,ImageBackground
} from 'react-native';

import login from './src/components/login'
import Todolist from './src/components/todolist';


const Stack = createStackNavigator()
function MyStack(){
  return(
    <Stack.Navigator>
  <Stack.Screen name='login' component={login} options={{ headerShown:false }}/>
  <Stack.Screen name='Todolist' component={Todolist} options={{ headerShown:false }}/>
  </Stack.Navigator>
  )

}
export default function App() {
  

  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}

const Styles = StyleSheet.create({
  
});


