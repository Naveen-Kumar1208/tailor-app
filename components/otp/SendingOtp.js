import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import Border from '../../assets/svg/Line 1.svg';
import Loading from '../../assets/svg/load.svg';
import signUp from '../../screens/SignUp';

export default function SendingOtp(props) {
    const {number} = props;
    return (
        <View style={styles.container}>
            <Border />
            <View style={styles.content}>
                <Text style={styles.text}>Sending OTP to</Text>
                <View style={styles.input}>
                    <Text style={styles.code}>+91</Text>
                    <Text style={styles.number}>{number}</Text>
                    <Loading style={styles.loading}/>
                    {/* <Entypo name="edit" size={18} color="#0062BD" /> */}
                </View>
            </View>
            <Border />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1
    },

    content: {
        height: 140,
        backgroundColor: '#FAFAFA',
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

    loading: {
        position: 'absolute',
        top: 13,
        right: 70
    } 
})
