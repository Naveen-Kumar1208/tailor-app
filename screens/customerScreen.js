import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { useState, useEffect } from 'react';

import {vw, vh} from 'react-native-viewport-units';

import Line from '../assets/svg/Line 15.svg';


import { db } from '../firebase';
import { getFirestore, collection, getDocs, setDoc, doc, serverTimestamp } from "firebase/firestore";


// const[waitingOrder, setWaitingOrder] = useState([]);

//     useEffect(() => {
//         (async () => {
//             const waitingOrderCol = (collection(db, 'orders'), where("status", "==", "waiting"));
//             const waitingOrderSnapshot = await getDocs(waitingOrderCol);
//             const waitingOrderList = waitingOrderSnapshot.docs.map(doc => doc.data());
//             console.log(waitingOrderList)
//             setWaitingOrder(waitingOrderList);
//         })()
//     }, []);

export default function customerScreen({ navigation }) {

    const[customer, setCustomer] = useState([]);

    useEffect(() => {
        (async () => {
            const customersCol = collection(db, 'customer');
            const customerSnapshot = await getDocs(customersCol);
            const customerList = customerSnapshot.docs.map(doc => doc.data());
            console.log(customerList)
            setCustomer(customerList);
        })()
    }, []);


  return (
    <View style={styles.container}>
        <ScrollView>
        <View style={styles.input}>
                <TextInput 
                    style={styles.textInput}
                    keyboardType='default'
                    placeholder='Search Customer...'
                    maxLength={20}
                />
        </View>
        <Line style={styles.line}/>

        <View style={styles.content}>
            <Text style={styles.letter}>A</Text>
            {customer.map((c) => (
                <View style={styles.details}>
                    <TouchableOpacity onPress={() => navigation.navigate("CustomerDetails")}>
                        <Text style={styles.text}>{c?.name}</Text>
                        <Text style={styles.text}>{c?.phone_no}</Text>
                    </TouchableOpacity>
                    <View style={styles.order}>
                        <Text style={styles.orderText}>3 Orders</Text>
                    </View>
                </View>
            ))}
            {/* <View style={styles.details}>
                <TouchableOpacity onPress={() => navigation.navigate("CustomerDetails")}>
                    <Text style={styles.text}>Abi</Text>
                    <Text style={styles.text}>98784 26344</Text>
                </TouchableOpacity>
                <View style={styles.order}>
                    <Text style={styles.orderText}>4 Orders</Text>
                </View>
            </View>
            <View style={styles.details}>
                <TouchableOpacity onPress={() => navigation.navigate("CustomerDetails")}>
                    <Text style={styles.text}>Ajitha</Text>
                    <Text style={styles.text}>98784 26344</Text>
                </TouchableOpacity>
                <View style={styles.order}>
                    <Text style={styles.orderText}>5 Orders</Text>
                </View>
            </View> */}
        </View>
        <Line style={styles.line}/>
        {/* <View style={styles.content}>
            <Text style={styles.letter}>B</Text>
            <View style={styles.details}>
                <TouchableOpacity onPress={() => navigation.navigate("CustomerDetails")}>
                    <Text style={styles.text}>Baviya</Text>
                    <Text style={styles.text}>98784 26344</Text>
                </TouchableOpacity>
                <View style={styles.order}>
                    <Text style={styles.orderText}>3 Orders</Text>
                </View>
            </View>
            <View style={styles.details}>
                <TouchableOpacity onPress={() => navigation.navigate("CustomerDetails")}>
                    <Text style={styles.text}>Bindhu</Text>
                    <Text style={styles.text}>98784 26344</Text>
                </TouchableOpacity>
                <View style={styles.order}>
                    <Text style={styles.orderText}>4 Orders</Text>
                </View>
            </View>
            <View style={styles.details}>
                <TouchableOpacity onPress={() => navigation.navigate("CustomerDetails")}>
                    <Text style={styles.text}>Beena</Text>
                    <Text style={styles.text}>98784 26344</Text>
                </TouchableOpacity>
                <View style={styles.order}>
                    <Text style={styles.orderText}>5 Orders</Text>
                </View>
            </View>
        </View> */}
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    textInput: {
        borderBottomWidth: 2,
        borderColor: '#0062BD',
        width: "63%",
        alignSelf: 'center',
        marginTop: 4.5*vh,
        marginBottom: 2.4*vh
    },

    content: {
        marginTop: 2.5*vh,
        marginLeft: 2.5*vh,
        marginBottom: 3.2*vh
    },

    details: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 1*vh
    },

    letter: {
        fontFamily: 'NotoSans_400Regular',
        fontSize: 2.5*vh,
    },

    text: {
        fontFamily: 'NotoSans_400Regular',
        fontSize: 2*vh,
        color: '#0062BD',
    },

    orderText: {
        fontFamily: 'NotoSans_400Regular',
        fontSize: 1.9*vh,
        color: '#585858',
        marginRight: 1.9*vh
    },


});
