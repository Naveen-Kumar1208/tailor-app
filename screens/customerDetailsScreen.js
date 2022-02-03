import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import {vw, vh} from 'react-native-viewport-units';

import Line from '../assets/svg/Line 12.svg';
import GreenCircle from '../assets/svg/greencircle.svg';
import WhiteCircle from '../assets/svg/whitecircle.svg';
import Arrow from '../assets/svg/rightarrow.svg';



export default function customerDetailsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.details}>
            <View style={styles.order}>
                <View style={styles.orderId}>
                    <Text style={styles.orderIdText}>OID 3430</Text>
                </View>
                <View style={styles.content}>
                    <View style={styles.orderContent}>
                        <View style={styles.orderDetails}>
                            <GreenCircle />
                            <Text style={styles.orderText}>Salwar set  - 1</Text>
                        </View>
                    </View>
                    <View style={styles.customerContent}>
                        <View style={styles.customer}>
                            <View style={styles.customerDetails}>
                                <Text style={styles.customerName}>Sanjuktha</Text>
                                <Text style={styles.customerNumber}>92332 72671</Text>
                                <Text style={styles.price}>INR 1000.00</Text>
                            </View>
                            <Arrow style={styles.arrow}/>
                        </View>
                    </View>
                </View>
                <Line />
            </View>
            <View style={styles.order}>
                <View style={styles.completedOrderId}>
                    <Text style={styles.orderIdText}>OID 3430</Text>
                </View>
                <View style={styles.content}>
                    <View style={styles.orderContent}>
                        <View style={styles.orderDetails}>
                            <Text style={styles.orderText}>Saree Alteration - 1</Text>
                        </View>
                    </View>
                    <View style={styles.customerContent}>
                        <View style={styles.customer}>
                            <View style={styles.customerDetails}>
                                <Text style={styles.customerName}>Sanjuktha</Text>
                                <Text style={styles.customerNumber}>92332 72671</Text>
                                <Text style={styles.price}>INR 1000.00</Text>
                            </View>
                            <Arrow style={styles.arrow}/>
                        </View>
                    </View>
                </View>
                <Line />
            </View>
            <View style={styles.order}>
                <View style={styles.completedOrderId}>
                    <Text style={styles.orderIdText}>OID 3430</Text>
                </View>
                <View style={styles.content}>
                    <View style={styles.orderContent}>
                        <View style={styles.orderDetails}>
                            <Text style={styles.orderText}>Salwar set  - 1</Text>
                        </View>
                    </View>
                    <View style={styles.customerContent}>
                        <View style={styles.customer}>
                            <View style={styles.customerDetails}>
                                <Text style={styles.customerName}>Sanjuktha</Text>
                                <Text style={styles.customerNumber}>92332 72671</Text>
                                <Text style={styles.price}>INR 1000.00</Text>
                            </View>
                            <Arrow style={styles.arrow}/>
                        </View>
                    </View>
                </View>
                <Line />
            </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    order: {
        marginTop: 2.5*vh,
        
    },

    orderId: {
        borderColor: '#00C165',
        borderWidth: 1,
        borderRadius: 2.5*vh,
        width: "24%",
        marginLeft: 2.5*vh,
    },

    completedOrderId: {
        borderColor: '#B7DCFF',
        borderWidth: 1,
        borderRadius: 2.5*vh,
        width: "24%",
        marginLeft: 2.5*vh,
        backgroundColor: '#B7DCFF'
    },

    orderIdText: {
        fontFamily: 'NotoSans_400Regular',
        fontSize: 1.75*vh,
        letterSpacing: 0.4*vh,
        marginLeft: 0.5*vh
    },

    content: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 1.9*vh,
        marginLeft: 2.5*vh,
        marginTop: 1.2*vh
    },

    orderDetails: {
        marginTop: 0.5*vh,
        display: 'flex',
        flexDirection: 'row'
    },

    orderText: {
        fontFamily: 'NotoSans_400Regular',
        fontSize: 2*vh,
        marginLeft: 3.3*vh,
        marginTop: -0.5*vh
    },

    customer: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: -2*vh,
        marginRight: 1.5*vh
    },

    customerName: {
        fontFamily: 'NotoSans_700Bold',
        fontSize: 1.8*vh,
    },

    customerNumber: {
        fontFamily: 'NotoSans_400Regular',
        fontSize: 1.8*vh,
        color: '#00C165'
    },

    price: {
        fontFamily: 'NotoSans_400Regular',
        fontSize: 2*vh,
        color: '#999999'
    },

    arrow: {
        marginLeft: 2.5*vh,
        marginTop: 2.5*vh
    },


});
