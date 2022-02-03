import React from 'react'
import { StyleSheet, View, Text, TextInput, Button, TouchableOpacity } from 'react-native'
import Header from '../components/Header'
import { Ionicons } from '@expo/vector-icons';

export default function signIn({ navigation }) {

    return (
            <View style={styles.container}>
                <Header />
                <Text style={styles.title}>SIGN IN</Text>
                <View style={styles.input}>
                    <Text style={styles.code}>+91</Text>
                    <TextInput 
                        style={styles.textInput}
                        keyboardType='numeric'
                        placeholder='Mobile number'
                        maxLength={10}
                    />
                    <Ionicons name="phone-portrait-outline" style={styles.icon} size={24} color="black" />
                </View>
                <View style={styles.signInButton}>
                    <TouchableOpacity>
                            <View style={styles.signInButtonStyle}>
                                <Text style={styles.SignInButtonText}>SIGN IN WITH OTP</Text>
                            </View>
                        </TouchableOpacity>
                </View>

                <View style={styles.signUp}>
                    <Text style={styles.signUpText}>New User?</Text>
                    <View style={styles.signUpButton}>
                        <TouchableOpacity onPress={() => navigation.navigate("SIGN UP / CREATE ACCOUNT")}>
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

    input: {
        paddingTop: 40,
        display: 'flex',
        flexDirection: 'row',
    },

    code: {
        marginLeft: 25,
        fontSize: 18
    },

    textInput: {
        borderBottomWidth: 2,
        borderColor: '#0062BD',
        width: 250,
        marginLeft: 20
    },

    icon: {
        position: 'absolute',
        right: 65,
        bottom: 5
    },
    signInButton: {
        margin: 70,
        marginTop: 50,
        paddingLeft: 2
    },

    signInButtonStyle: {
        borderRadius: 2,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: '#0062BD',
        width: 255
    },

    SignInButtonText: {
        color: 'white',
        fontFamily: 'NotoSans_400Regular',
        fontSize: 16,
        lineHeight: 24,
        textAlign: 'center'
    },

    signUp: {
        marginTop: 200
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
        backgroundColor: 'white'
    },

    buttonText: {
        color: '#0062BD',
        fontFamily: 'NotoSans_400Regular',
        fontSize: 16,
        lineHeight: 24
    }

  });
