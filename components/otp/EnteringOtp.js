import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons';

export default function SendingOtp() {
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.text}>OTP sent to</Text>
                <View style={styles.input}>
                    <Text style={styles.code}>+91</Text>
                    <Text style={styles.number}>9999999999</Text>
                    <Entypo name="edit" size={18} color="#0062BD" />
                </View>
                <Text style={styles.textOne}>RESEND OTP</Text>
            </View>
            <View style={styles.verify}>
                <TextInput 
                    style={styles.textInput}
                    keyboardType='numeric'
                    placeholder='Type 4 digit OTP here'
                    maxLength={4}
                />
            </View>
            <View style={styles.button}>
                <TouchableOpacity>
                        <View style={styles.buttonStyle}>
                            <Text style={styles.buttonText}>SIGN IN WITH OTP</Text>
                        </View>
                    </TouchableOpacity>
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        height: 140,
        backgroundColor: '#FAFAFA',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        borderTopWidth: 1,
        borderTopColor: 'black',
        borderStyle:  'dashed'
    },

    text: {
        fontFamily: 'NotoSans_400Regular',
        fontSize: 16,
        lineHeight: 20,
        color: '#999999',
        marginLeft: 55,
        paddingTop: 10
    },

    input: {
        display: 'flex',
        flexDirection: 'row',
        paddingTop: 10
    },

    code: {
        fontSize: 24,
        lineHeight: 24,
        color: '#999999',
        marginLeft: 55
    },

    number: {
        fontSize: 24,
        lineHeight: 24,
        color: '#000000',
        letterSpacing: 4,
        marginLeft: 20,
        marginRight: 20
    },

    textOne: {
        fontFamily: 'NotoSans_400Regular',
        fontSize: 16,
        lineHeight: 20,
        color: '#0062BD',
        marginLeft: 55,
        paddingTop: 27
    },

    verify: {
        paddingTop: 40,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },

    textInput: {
        borderBottomWidth: 2,
        borderColor: '#0062BD',
        width: 250,
        marginLeft: 20,
        paddingBottom: 5
    },

    button: {
        margin: 70,
        marginTop: 30,
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
