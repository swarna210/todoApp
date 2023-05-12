

import React from 'react';

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






export default function Login({navigation}) {
  

  return (
    <View style={Styles.container}>
      <ImageBackground style={Styles.backgroundImage} source={require('../../assets/blue.jpg')} resizeMode='cover'>
        <View style={Styles.loginContainer}>
          <Text style={Styles.headingText}>Login Form</Text>
          <TextInput placeholder='Username' style={Styles.userText} placeholderTextColor={'#fff'}></TextInput>
          <TextInput placeholder='Password' style={Styles.userText}  placeholderTextColor={'#fff'}></TextInput>
          <TouchableHighlight style={Styles.loginButton} 
                                onPress={()=> navigation.navigate('Todolist')}>
            <Text style={Styles.loginText}>Login</Text>
        </TouchableHighlight>
        </View>
        
      </ImageBackground>
      
    </View>
  );
}

const Styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  backgroundImage:{
    height:'100%',
    width:'100%',
    alignItems:'center',
    justifyContent:'center'
  },
  loginContainer:{
    backgroundColor:'#1cb5ed',
    alignContent:'center',
    justifyContent:'center',
    width:'90%',
    height:"50%",
    borderRadius:20
    // opacity:0.5
  },
  userText:{
    borderWidth:0.5,
    width:250,
    marginTop:10,
    marginLeft:40,
    borderColor:'#5fb9f5',
    backgroundColor:'#5fb9f5',
    paddingLeft:20
  },
headingText:{
  color:"#fff",
  fontSize:20,
  marginLeft:100,
  marginBottom:30
},
loginButton:{
    backgroundColor:'#fff',
    width:80,
    marginLeft:120,
    marginTop:20,
    height:40,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10
},
loginText:{
    color:'#5fb9f5',
    fontWeight:'bold'
}
});


