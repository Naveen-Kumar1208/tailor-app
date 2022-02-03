import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { useState, useEffect } from 'react'

import { db } from '../firebase';
import { getFirestore, collection, getDocs, setDoc, doc, serverTimestamp } from "firebase/firestore";

export default function addCustomerScreen({ navigation }) {

    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState(null);

    const changeNameHandler = (text) => {
        setName(text);
        
    } 

    const changeNumberHandler = (num) => {
        setPhoneNumber(num);
        
    }

    const addData = async() => {

        await setDoc(doc(db, "customer", "nrrtt "), {
            name: name,
            phone_no: phoneNumber,
            is_deleted: false,
            created_date: serverTimestamp()
        });
    }

  return (
    <View style={styles.container}>
                <View style={styles.input}>
                    <TextInput 
                        style={styles.textInput}
                        keyboardType='default'
                        placeholder='Name'
                        maxLength={10}
                        onChangeText={changeNameHandler}
                        value={name}
                    />

                    <TextInput 
                        style={styles.textInput}
                        keyboardType='numeric'
                        placeholder='Phone number'
                        maxLength={10}
                        onChangeText={changeNumberHandler}
                        value={phoneNumber}
                    />  
                </View>
                <View style={styles.button}>
                    <TouchableOpacity onPress={() => navigation.navigate("Customers") || addData()}>
                            <View style={styles.buttonStyle}>
                                <Text style={styles.buttonText}>ADD CUSTOMER</Text>
                            </View>
                    </TouchableOpacity>
                </View>
            </View>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1
    }, 

    input: {
        paddingTop: 40,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },

    code: {
        marginLeft: 25,
        fontSize: 18
    },

    textInput: {
        borderBottomWidth: 2,
        borderColor: '#0062BD',
        width: 250,
        marginLeft: 20,
        marginBottom: 50
    },

    icon: {
        position: 'absolute',
        right: 65,
        bottom: 5
    },
    button: {
        margin: 70,
        marginTop: 10,
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
});
