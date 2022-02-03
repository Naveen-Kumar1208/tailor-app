import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';

import {vw, vh} from 'react-native-viewport-units';

import Line from '../assets/svg/Line 12.svg';
import GreenCircle from '../assets/svg/greencircle.svg';
import WhiteCircle from '../assets/svg/whitecircle.svg';
import Arrow from '../assets/svg/rightarrow.svg';

export default function deliveryByDayScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
          <Text style={styles.headerText}>3 orders </Text>
          <Text style={styles.headerPrice}>INR 2400.00</Text>
      </View>
      <Line style={styles.line}/>
      <ScrollView>
        <View style={styles.details}>
            <View style={styles.order}>
                <Text style={styles.date}>4 JAN 2021 (2)</Text>
                <Line style={styles.line}/>
                <View style={styles.orderId}>
                    <Text style={styles.orderIdText}>OID 3430</Text>
                </View>
                <View style={styles.content}>
                    <View style={styles.orderContent}>
                        <View style={styles.orderDetails}>
                            <GreenCircle />
                            <Text style={styles.orderText}>Salwar set  - 1</Text>
                        </View>
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
                <Line style={styles.line}/>
            </View>
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
                <Line style={styles.line}/>
            </View>
            <View style={styles.order}>
                <Text style={styles.date}>5 JAN 2021 (2)</Text>
                <Line style={styles.line}/>
                <View style={styles.orderId}>
                    <Text style={styles.orderIdText}>OID 3430</Text>
                </View>
                <View style={styles.content}>
                    <View style={styles.orderContent}>
                        <View style={styles.orderDetails}>
                            <WhiteCircle />
                            <Text style={styles.orderText}>Salwar set  - 1</Text>
                        </View>
                        <View style={styles.orderDetails}>
                            <WhiteCircle />
                            <Text style={styles.orderText}>Salwar set  - 1</Text>
                        </View>
                        <View style={styles.orderDetails}>
                            <WhiteCircle />
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
                <Line style={styles.line}/>
            </View>
            <View style={styles.order}>
                <Text style={styles.date}>6 JAN 2021 (2)</Text>
                <Line style={styles.line}/>
                <View style={styles.orderId}>
                    <Text style={styles.orderIdText}>OID 3430</Text>
                </View>
                <View style={styles.content}>
                    <View style={styles.orderContent}>
                        <View style={styles.orderDetails}>
                            <WhiteCircle />
                            <Text style={styles.orderText}>Salwar set  - 1</Text>
                        </View>
                        <View style={styles.orderDetails}>
                            <WhiteCircle />
                            <Text style={styles.orderText}>Salwar set  - 1</Text>
                        </View>
                        <View style={styles.orderDetails}>
                            <WhiteCircle />
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
                <Line style={styles.line}/>
            </View>   
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },

    header: {
        height: "8%",
        backgroundColor: '#FAFAFA',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    headerText: {
        fontFamily: 'NotoSans_700Bold',
        fontSize: 2*vh,
        marginLeft: 2.5*vh
    },

    headerPrice: {
        fontFamily: 'NotoSans_400Regular',
        fontSize: 2.5*vh,
        color: '#999999',
        marginRight: 6.3*vh
    },

    order: {
        marginTop: 1.2*vh,
        marginLeft: 2.5*vh,
    },

    date: {
        fontFamily: 'NotoSans_400Regular',
        fontSize: 3*vh,
    },

    orderId: {
        borderColor: '#00C165',
        borderWidth: 1,
        borderRadius: 2.5*vh,
        width: "24%",
        marginTop: 2.5*vh
    },

    orderIdText: {
        fontFamily: 'NotoSans_400Regular',
        fontSize: 1.7*vh,
        letterSpacing: 3,
        marginLeft: 0.5*vh
    },

    content: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 1.3*vh
    },

    orderDetails: {
        marginTop: 0.8*vh,
        display: 'flex',
        flexDirection: 'row'
    },

    orderText: {
        fontFamily: 'NotoSans_400Regular',
        fontSize: 2*vh,
        marginLeft: 0.9*vh,
        marginTop: -0.5*vh
    },

    customer: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: -1.9*vh,
        marginRight: 1.5*vh
    },

    customerName: {
        fontFamily: 'NotoSans_700Bold',
        fontSize: 1.7*vh,
    },

    customerNumber: {
        fontFamily: 'NotoSans_400Regular',
        fontSize: 1.7*vh,
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

    line: {
        marginLeft: -8.8*vh
    }

});
