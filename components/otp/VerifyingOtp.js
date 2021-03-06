import React from 'react'
import { StyleSheet, Text, View, TextInput, Image } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import Border from '../../assets/svg/Line 1.svg';
import Loading from '../../assets/svg/load.svg';

export default function SendingOtp(props) {
    const {number} = props;
    return (
        <View>
            <Border />
            <View style={styles.container}>
                <Text style={styles.text}>OTP sent to</Text>
                <View style={styles.input}>
                    <Text style={styles.code}>+91</Text>
                    <Text style={styles.number}>{number}</Text>
                </View>
            </View>
            <Border />
            <View style={styles.verify}>
                <TextInput 
                    style={styles.textInput}
                    keyboardType='numeric'
                    placeholder='1234'
                    maxLength={4}
                />
            </View>
            <View style={styles.processing}>
                {/* <AntDesign name="loading1" size={24} color="black" /> */}
                {/* <Image
                     style={{width: 100, height: 35}}
                    source={{uri: 'https://media4.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif?cid=ecf05e47y98v9wmcs9lb5xiykqqllmu2mq4ve6icymt6qnzn&rid=giphy.gif&ct=g'}} 
                /> */}
                <Loading height={20} width={30} style={styles.loading}/>
                <Text style={styles.textOne}>Verifying OTP...</Text>
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
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

    processing: {
        display: 'flex',
        flexDirection: 'row',
        paddingTop: 20,
        marginLeft: 60
    },

    textOne: {
        fontFamily: 'NotoSans_400Regular',
        fontSize: 16,
        lineHeight: 20,
        color: '#000000',
        marginLeft: 100
    },

    loading: {
        position: 'absolute',
        top: 21,
        left: 60,
    }

    
})
