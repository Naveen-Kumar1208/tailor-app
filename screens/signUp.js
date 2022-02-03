import React from 'react'
import { useState, useEffect } from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native'
import axios from 'axios';

const baseUrl = 'http://localhost:3000/number';

export default function signUp({ navigation, result }) {

    const [number, setNumber] = useState(null);
    const [otp, setOtp] = useState(null);

    const getOtp = async () => {
        try {
          const response = await axios.get(
            `http://10.0.2.2:3000/number/1`
          );
          let otp = JSON.stringify(response.data.otp);
          setOtp(otp);
          console.log(otp);

        } catch (error) {
            alert('In error::' + error.message);
        }
         
    }

    // useEffect(() => {
    //     const getOtp = async ( () => {
    //         const response = await axios.get(`http://10.0.2.2:3000/number/1`);
    //         const otpNumber = JSON.stringify(response.data.otp);
    //         setOtp(otpNumber);
    //         console.log(otp)
    //     });
    //    },[]);

    const changeHandler = (num) => {
        setNumber(num);
        console.log(number)
    }



    return (
            <View style={styles.container}>
                <View style={styles.input}>
                    <Text style={styles.code}>+91</Text>
                    <TextInput 
                        style={styles.textInput}
                        keyboardType='numeric'
                        placeholder='Mobile number'
                        maxLength={10}
                        onChangeText={changeHandler}
                        value={number}
                    />
                </View>
                <Text>{result}</Text>
                <View style={styles.button}>
                    <TouchableOpacity onPress={() => navigation.navigate("OTP VERIFICATION", {paramKey: number}) || changeHandler() || getOtp() }>
                            <View style={styles.buttonStyle}>
                                <Text style={styles.buttonText}>SEND OTP</Text>
                            </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1
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
    button: {
        margin: 70,
        marginTop: 50,
        paddingLeft: 2,
    },

    buttonStyle: {
        borderRadius: 2,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: '#0062BD',
        width: 255
    },

    buttonText: {
        color: 'white',
        fontFamily: 'NotoSans_400Regular',
        fontSize: 16,
        lineHeight: 24,
        textAlign: 'center'
    },

  })


//   onPress={() => navigation.navigate("OTP VERIFICATION")}