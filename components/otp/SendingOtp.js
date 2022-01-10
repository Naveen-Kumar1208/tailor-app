import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Entypo } from '@expo/vector-icons';

export default function SendingOtp() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Sending OTP to</Text>
            <View style={styles.input}>
                <Text style={styles.code}>+91</Text>
                <Text style={styles.number}>9999999999</Text>
                <Entypo name="edit" size={18} color="#0062BD" />
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
    }
})
