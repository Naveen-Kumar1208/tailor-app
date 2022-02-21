import React from 'react'
import { StyleSheet, View, Text, TextInput, Button, TouchableOpacity } from 'react-native'
import Header from '../components/Header'
import { Ionicons } from '@expo/vector-icons';

import {vw, vh} from 'react-native-viewport-units';

import { auth } from '../firebase';
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useState, useEffect } from 'react';

export default function signIn({ navigation }) {

    const [isSignedIn, setIsSignedIn] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const SignIn = () => {
        signInWithEmailAndPassword(auth,email,password)
        .then((result) => {
          setIsSignedIn(true);
          navigation.navigate("Tab Navigator");
        })
        .catch((err) => {
          alert("Entered wrong username or password");
        })
    }

    return (
            <View style={styles.container}>
                <Header />
                <Text style={styles.title}>SIGN IN</Text>
                <View style={{marginLeft: 70, width: "100%"}}>
                    <TextInput style={styles.input1} placeholder="email" value={email} onChangeText={text => setEmail(text)} />
                    <TextInput style={styles.input1} placeholder="password" value={password} onChangeText={text => setPassword(text)} />
                    {/* <Button title="sign in" onPress={SignIn} /> */}
                </View>
                <View style={styles.signInButton}>
                    <TouchableOpacity  onPress={SignIn}>
                            <View style={styles.signInButtonStyle}>
                                <Text style={styles.SignInButtonText}>SIGN IN</Text>
                            </View>
                        </TouchableOpacity>
                </View>

                <View style={styles.signUp}>
                    <Text style={styles.signUpText}>New User?</Text>
                    <View style={styles.signUpButton}>
                        <TouchableOpacity onPress={() => navigation.navigate("SIGN UP")}>
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>SIGN UP / CREATE ACCOUNT</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                
            </View>
        
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white'
    },

    title: {
        fontFamily: 'NotoSans_400Regular',
        fontSize: 24,
        marginTop: 30,
        lineHeight: 24,
        color: '#000000',
        textAlign: 'center',
        fontWeight: '700'
    },

    // input: {
    //     paddingTop: 40,
    //     display: 'flex',
    //     flexDirection: 'row',
    // },

    // code: {
    //     marginLeft: 25,
    //     fontSize: 18
    // },

    // textInput: {
    //     borderBottomWidth: 2,
    //     borderColor: '#0062BD',
    //     width: 250,
    //     marginLeft: 20
    // },

    // icon: {
    //     position: 'absolute',
    //     right: 65,
    //     bottom: 5
    // },
    signInButton: {
        // margin: 70,
        marginLeft: 70,
        marginTop: 6.2*vh,
    },

    signInButtonStyle: {
        borderRadius: 2,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: '#0062BD',
        width: "80%"
    },

    SignInButtonText: {
        color: 'white',
        fontFamily: 'NotoSans_400Regular',
        fontSize: 16,
        lineHeight: 24,
        textAlign: 'center'
    },

    signUp: {
        marginTop: 20
    },

    signUpText: {
        fontFamily: 'NotoSans_700Bold',
        fontSize: 20,
        lineHeight: 24,
        fontWeight: 'bold',
        textAlign: 'center'
    },

    signUpButton: {
        margin: 70,
        marginTop: 10,
        paddingLeft: 10
    },

    button: {
        borderRadius: 2,
        borderWidth: 2,
        borderColor: '#0062BD',
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: 'white',
        width: "100%"
    },

    buttonText: {
        color: '#0062BD',
        fontFamily: 'NotoSans_400Regular',
        fontSize: 13,
        alignSelf: 'center'
        // lineHeight: 24
    },

    input1: {
        backgroundColor: 'white',
        height: 50,
        width: "65%",
        marginBottom: 10,
        borderBottomColor: '#0062BD',
        borderBottomWidth: 2
    },

  });



{/* <View style={styles.input}>
                    <Text style={styles.code}>+91</Text>
                    <TextInput 
                        style={styles.textInput}
                        keyboardType='numeric'
                        placeholder='Mobile number'
                        maxLength={10}
                    />
                    <Ionicons name="phone-portrait-outline" style={styles.icon} size={24} color="black" />
                </View> */}
