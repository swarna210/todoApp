
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
import trial from './src/components/trial'
import t2 from './src/components/t2'


const Stack = createStackNavigator()
function MyStack(){
  return(
    <Stack.Navigator>
      {/* <Stack.Screen name='trial' component={trial} options={{ headerShown:false }}/> */}
      {/* <Stack.Screen name='t2' component={t2} options={{ headerShown:false }}/> */}
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


