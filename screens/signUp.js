import React from 'react'
import { StyleSheet, View, Text, TextInput, Button, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';


export default function signUp({ navigation }) {

    // const pressHandler = () => {
    //     navigation.navigate('SignUp');
    // }
    return (
            <View style={styles.container}>
                <View style={styles.input}>
                    <Text style={styles.code}>+91</Text>
                    <TextInput 
                        style={styles.textInput}
                        keyboardType='numeric'
                        placeholder='Mobile number'
                        maxLength={10}
                    />
                </View>
                <View style={styles.button}>
                    <TouchableOpacity onPress={() => navigation.navigate("OtpVerify")}>
                            <View style={styles.buttonStyle}>
                                <Text style={styles.buttonText}>SEND OTP</Text>
                            </View>
                        </TouchableOpacity>
                </View>
            </View>
    )
}


const styles = StyleSheet.create({
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
    button: {
        margin: 70,
        marginTop: 50,
        paddingLeft: 10
    },

    buttonStyle: {
        borderRadius: 2,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: '#0062BD'
    },

    buttonText: {
        color: 'white',
        fontFamily: 'NotoSans_400Regular',
        fontSize: 16,
        lineHeight: 24,
        textAlign: 'center'
    },

  })