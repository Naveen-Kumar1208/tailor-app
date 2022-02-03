import { StyleSheet, Text, View } from 'react-native';

import React from 'react';
import { useState, useEffect } from 'react';

import {vw, vh} from 'react-native-viewport-units';

import axios from 'axios';

import Line from '../assets/svg/Line 12.svg';
import GreenCircle from '../assets/svg/greencircle.svg';
import WhiteCircle from '../assets/svg/whitecircle.svg';
import Arrow from '../assets/svg/rightarrow.svg';

export default function deliveryByDayScreen() {

    const[user, setUser] = useState([]);

    // useEffect(() => {
    //     (async () => {
    //         try {
    //             const response = await axios.get(
    //               `http://10.0.2.2:3000/user`
    //             );
    //             let users = response.data;
    //             setUser(users);
               
      
    //           } catch (error) {
    //               alert('In error::' + error.message);
    //         }
    //     })()
    // }, []);

    // const[customer, setCustomer] = useState([]);

    // useEffect(() => {
    //     (async () => {
    //         const customersCol = collection(db, 'customer');
    //         const customerSnapshot = await getDocs(customersCol);
    //         const customerList = customerSnapshot.docs.map(doc => doc.data());
    //         console.log(customerList)
    //         setCustomer(customerList);
    //     })()
    // }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
          <Text style={styles.headerText}>3 orders </Text>
          <Text style={styles.headerPrice}>INR 2400.00</Text>
      </View>
      <Line />
      <View style={styles.details}>
        {/* {user.map((u) => (
            <View style={styles.order}>
                <View style={styles.orderId}>
                    <Text style={styles.orderIdText}>OID {u?.orderId}</Text>
                </View>
                <View style={styles.content}>
                    <View style={styles.orderContent}>
                        {u?.orders?.map((order) => (
                            <View style={styles.orderDetails}>
                            <GreenCircle />
                            <Text style={styles.orderText}>{order}</Text>
                        </View>
                        ))}
                        {/* <View style={styles.orderDetails}>
                            <GreenCircle />
                            <Text style={styles.orderText}>{u?.orders}</Text>
                        </View>
                        <View style={styles.orderDetails}>
                            <GreenCircle />
                            <Text style={styles.orderText}>{u?.orders}</Text>
                        </View> */}
                    {/* </View>
                    <View style={styles.customerContent}>
                        <View style={styles.customer}>
                            <View style={styles.customerDetails}>
                                <Text style={styles.customerName}>{u?.name}</Text>
                                <Text style={styles.customerNumber}>{u?.phone_number}</Text>
                                <Text style={styles.price}>INR {u?.orderValue}</Text>
                            </View>
                            <Arrow style={styles.arrow}/>
                        </View>
                    </View>
                </View>
                <Line />
            </View>
        ))} */} 
             {/* <View style={styles.order}>
                <View style={styles.orderId}>
                    <Text style={styles.orderIdText}>OID {user[0]?.order.orderId}</Text>
                </View>
                <View style={styles.content}>
                    <View style={styles.orderContent}>
                        <View style={styles.orderDetails}>
                            <GreenCircle />
                            <Text style={styles.orderText}>{user[0]?.order.orders[1]}</Text>
                        </View>
                        <View style={styles.orderDetails}>
                            <GreenCircle />
                            <Text style={styles.orderText}>{user[0]?.order.orders[0]}</Text>
                        </View>
                    </View>
                    <View style={styles.customerContent}>
                        <View style={styles.customer}>
                            <View style={styles.customerDetails}>
                                <Text style={styles.customerName}>{user[0]?.name}</Text>
                                <Text style={styles.customerNumber}>{user[0]?.phone_number}</Text>
                                <Text style={styles.price}>INR {user[0]?.order.orderValue}</Text>
                            </View>
                            <Arrow style={styles.arrow}/>
                        </View>
                    </View>
                </View>
                <Line />
            </View> */}
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
        marginTop: 2.5*vh,
        
    },

    orderId: {
        borderColor: '#00C165',
        borderWidth: 1,
        borderRadius: 2.5*vh,
        width: "24%",
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
        justifyContent: 'space-between',
        marginBottom: 1.2*vh,
        marginLeft: 2.5*vh,
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
    }

});
