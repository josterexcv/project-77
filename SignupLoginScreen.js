import React from 'react';
import {Alert, Text, View, TextInput, TouchableOpacity} from 'react-native';

import db from '../config';
import firebase from 'firebase';

export default class WelcomeScreen extends Component{
    constructor(){
        super()
        this.state={
            email = '',
            password = '',
            firstName = '',
            lastName = '',
            confirmEmail = '',
            confirmPassword = ''
        }
    }
    userLogin = (username, password)=>{
        firebase.auth().signWithEmailAndPassword(username, password)
        .then(()=>{
            return Alert.alert("Successfully Login")
        })
        .catch((error)=> {
            var errorCode = error.code;
            var errorMessage = error.message;
            return Alert.alert(errorMessage)
        })
     }
        userSignUp = (username, password) =>{
            firebase,auth(createUserWithEmailAndPassword(username, password))
            .then((response)=>{
                return Alert.alert("User Added Successfully")
            })
            .catch(function(error) {
                // handle Errors here
                var errorCode = error.code;
                var errorMessage = error.message;
                return Alert.alert(errorMessage)
            });
        }
    
                <Text style={{color:'#fff000', fontSize:28, fontWeight:'bold',,marginLeft:55}}>USERNAME</Text>
                <View style={{alignIteams:'center'}}>
                <TextInput
                style={Styles.loginbox}
                keyboardType ='email-address'
                onChangeText={(text)=>{
                    this.setState({
                        username: text
                    })
                }}
                />
                </View>

            <View style={{alignIteams:'center'}}>
                <TouchableOpacity
                    style={[style.button,{marginBottom:10}]}
                    onpress = {()=>{this.userLogin(this.state.username, this.state.password)}}
                    >
                    <Text style={{color:'salmon', fontSize:18, fontWeight:'bold'}}>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={()=>{this.userSignUp(this.state.username, this.state.passsword)}}
                    >
                        <Text style={{color:'red', fontSize:18, fontWeight:'bold'}}>SIGN UP</Text>
                </TouchableOpacity>
            </View>
}       
        
        

    
