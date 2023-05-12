

import React, { useState } from 'react';

import {

    StyleSheet,
    Text,
    TextInput,
    TouchableHighlight,
    Button,
    View,
    ImageBackground,TouchableOpacity,ScrollView
} from 'react-native';
import Icons from 'react-native-vector-icons/AntDesign'

import { AddNotes } from '../actions';
import { useDispatch } from 'react-redux'
import CheckBox from '@react-native-community/checkbox';


export default function Todolist() {

    const [todoItems, setTodoItems] = useState([])
    const [newItemText, setNewItemText] = useState('');
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    const [checkedItems, setCheckedItems] = useState([]);

    const isChecked = true
    let dispatch = useDispatch();

    const addTodoItem = () => {
            if (newItemText.trim() !== '') {
              setTodoItems([...todoItems, newItemText.trim()]);
              setNewItemText('');
            }
            dispatch(AddNotes([todoItems]));
          };
    const removeTodoItem = (index) => {
            const newTodoItems = [...todoItems];
            newTodoItems.splice(index, 1);
            setTodoItems(newTodoItems);
          };

console.log("checkedItems",checkedItems)


    console.log("note is ", todoItems)
    return (
        <View style={Styles.container}>
            <ImageBackground style={Styles.backgroundImage} source={require('../assets/blue.jpg')} resizeMode='cover'>
                <Text style={Styles.headingText}>To do List</Text>
                <TextInput placeholder='add notes'
                    value={newItemText}
                    onChangeText={(text) => setNewItemText(text)}
                ></TextInput>
                <Button title='Add Notes' onPress={addTodoItem}></Button>


                {todoItems.map((item, index) => (
                    <View style={Styles.viewList}>
                        <View style={Styles.viewlist2} >
                        
                        
                            <CheckBox
                            
                                value={checkedItems.includes(item)}
                                onValueChange={(isChecked) => {
                                if (isChecked) {
                                setCheckedItems([...checkedItems, item]);
                                } else {
                                setCheckedItems(checkedItems.filter((checkedItem) => checkedItem !== item));
                                }
                            }}
                        />


                        </View>
                        <View style={Styles.viewlist1}>
                        <TouchableOpacity>
                            <Text  
                            style={{ textDecorationLine: isChecked ? ' line-through' : 'none',fontSize:18,color:'#000' }}>{item}</Text>
                        </TouchableOpacity>
                        </View>
                        
                        <View style={Styles.viewlist3}>
                            <Icons name='closecircleo' 
                                style={Styles.iconStyle} color='#000'
                                size={20} key={index} onPress={() => removeTodoItem(index)}/>
                        </View>
                        
                            
                            
                    </View>


                ))}
            </ImageBackground>


        </View>
    );
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    backgroundImage: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    loginContainer: {
        backgroundColor: '#1cb5ed',
        alignContent: 'center',
        justifyContent: 'center',
        width: '90%',
        height: "50%",
        borderRadius: 20
        // opacity:0.5
    },
    userText: {
        borderWidth: 0.5,
        width: 250,
        marginTop: 10,
        marginLeft: 40,
        borderColor: '#5fb9f5',
        backgroundColor: '#5fb9f5',
        paddingLeft: 20
    },
    headingText: {
        color: "#fff",
        fontSize: 20,
        marginLeft: 100,
        marginBottom: 30
    },
    loginButton: {
        backgroundColor: '#fff',
        width: 80,
        marginLeft: 120,
        marginTop: 20,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    loginText: {
        color: '#5fb9f5',
        fontWeight: 'bold'
    },
    backgroundImage: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    viewList: {
        flexDirection:'row',
        width:'90%',
        marginTop:20
    },
    headingText:{
        color:'#1b699e',
        fontSize:25,
        fontWeight:'bold',
        marginBottom:20
    },
    checkbox:{
        // marginLeft:50
    },
    viewlist1:{
        // marginLeft:60
        width:"70%",
    },
    viewlist2:{
        width:'10%',
        // marginLeft:120
    },
    viewlist3:{
        width:'10%',
        marginLeft:20,
        alignItems:'center',
        justifyContent:'center'
    },
    iconStyle:{
        // margin
    }
});


