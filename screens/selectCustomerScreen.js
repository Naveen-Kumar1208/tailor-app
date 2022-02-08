import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import {vw, vh} from 'react-native-viewport-units';

import Line from '../assets/svg/Line 20.svg';
import Arrow from '../assets/svg/rightarrow.svg';

export default function selectCustomerScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.order}>
            <View style={styles.orderId}>
                <Text style={styles.orderIdText}>OID 3430</Text>
            </View>
            <View style={styles.content}>
                <View style={styles.customerDetails}>
                    <Text style={styles.customerName}>Ajitha</Text>
                    <Text style={styles.customerNumber}>9876543210</Text>
                </View>
                <View style={styles.orderDetails}>
                    <View style={styles.items}>
                        <Text style={styles.text}>Items</Text>
                        <Text style={styles.number}>0</Text>
                    </View>
                    <View style={styles.value}>
                        <Text style={styles.text}>Value</Text>
                        <Text style={styles.number}>RS.0</Text>
                    </View>
                </View>
            </View>
        </View>
        <Line />
        <TouchableOpacity onPress={() => navigation.navigate("Order Type")}>
            <View style={styles.typeSelection}> 
                <View style={styles.selectionContent}>
                    <Text style={styles.typeNo}>1</Text>
                    <View style={styles.items}>
                        <Text style={styles.itemText}>Item type</Text>
                        <View style={styles.typeContent}>
                            <Text style={styles.selectionText}>Tap to select...</Text>
                            <Arrow style={{marginLeft: 32*vh}}/>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
        <Line />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    order: {
        height: 14*vh,
        backgroundColor: '#FEFFF1',
        paddingTop: 2*vh,
    },

    orderId: {
        borderColor: '#00C165',
        borderWidth: 1,
        borderRadius: 2.5*vh,
        width: "26%",
        marginLeft: 2.5*vh,
        
    },

    orderIdText: {
        fontFamily: 'NotoSans_400Regular',
        fontSize: 1.8*vh,
        letterSpacing: 3,
        marginLeft: 0.5*vh
    },

    content: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 2.5*vh,
        marginRight: 2.5*vh,
        paddingTop: 0.5*vh,
        justifyContent: 'space-between'
    },

    customerName: {
        fontFamily: 'NotoSans_700Bold',
        fontSize: 2.5*vh,
    },
    
    customerNumber: {
        fontFamily: 'NotoSans_400Regular',
        fontSize: 2.5*vh,
    },

    orderDetails: {
        display: 'flex',
        flexDirection: 'row',
    },

    text: {
        fontFamily: 'NotoSans_400Regular',
        fontSize: 2*vh,
    },

    number: {
        fontFamily: 'NotoSans_400Regular',
        fontSize: 2*vh,
        color: '#999999'
    },

    typeSelection: {
        height: 13*vh
    },

    selectionContent: {
        display: 'flex',
        flexDirection: 'row',
        paddingTop: 3*vh,
        marginLeft: 2*vh
    },

    typeNo: {
        fontFamily: 'NotoSans_400Regular',
        fontSize: 3*vh,
    },
    
    itemText: {
        fontFamily: 'NotoSans_400Regular',
        fontSize: 1.5*vh,
        color: '#999999'
    },

    typeContent: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 3*vh,
    },

    selectionText: {
        fontFamily: 'NotoSans_400Regular',
        fontSize: 2*vh,
    },

    items: {
        marginLeft: 4*vh
    },

    value: {
        marginLeft: 4*vh
    }
});
