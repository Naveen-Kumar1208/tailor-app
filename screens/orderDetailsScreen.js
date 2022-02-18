import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useState, useEffect } from 'react';

import {vw, vh} from 'react-native-viewport-units';

import Line from '../assets/svg/Line 12.svg';
import GreenCircle from '../assets/svg/greencircle.svg';
import WhiteCircle from '../assets/svg/whitecircle.svg';
import Arrow from '../assets/svg/rightarrow.svg';

import { db } from '../firebase';
import { getFirestore, collection, getDocs, setDoc, doc, serverTimestamp, query, where } from "firebase/firestore";

import axios from 'axios';


export default function orderDetailsScreen() {

    const[waitingOrder, setWaitingOrder] = useState([]);
    const[stitchingOrder, setStitchingOrder] = useState([]);    

    useEffect(() => {
        (async () => {
            const waitingOrderCol = query(collection(db, 'Orders'), where("status", "==", "waiting"));
            const waitingOrderSnapshot = await getDocs(waitingOrderCol);
            const waitingOrderList = waitingOrderSnapshot.docs.map(doc => doc.data());
            setWaitingOrder(waitingOrderList);
        })()
    }, []);

    useEffect(() => {
        (async () => {
            const stitchingOrderCol = query(collection(db, 'Orders'), where("status", "==", "stitching"));
            const stitchingOrderSnapshot = await getDocs(stitchingOrderCol);
            const stitchingOrderList = stitchingOrderSnapshot.docs.map(doc => doc.data());
            setStitchingOrder(stitchingOrderList);
        })()
    }, []);

    

    console.log(waitingOrder);

  return (
    <View style={styles.container}>
      <View style={styles.details}>
          {waitingOrder.map((w) => (
            <View style={styles.order} key={w?.order_code}>
              <View style={styles.orderId}>
                  <Text style={styles.orderIdText}>OID {w?.order_code}</Text>
              </View>
              <View style={styles.content}>
                  <View style={styles.orderContent}>
                      <Text style={styles.deliveryDate}>To deliver in 6 days</Text>
                      <View style={styles.orderDetails}>
                          <WhiteCircle />
                          <Text style={styles.orderText}>{w?.order_name}</Text>
                      </View>
                      {/* <Text style={styles.deliveryDate}>To deliver in 5 days</Text>
                      <View style={styles.orderDetails}>
                          <WhiteCircle />
                          <Text style={styles.orderText}>Blouse  - 1</Text>
                      </View> */}
                  </View>
                  <View style={styles.customerContent}>
                      <View style={styles.customer}>
                          <View style={styles.customerDetails}>
                              <Text style={styles.customerName}>Sanjuktha</Text>
                              <Text style={styles.customerNumber}>92332 72671</Text>
                              <Text style={styles.price}>INR {w?.total_amount}</Text>
                          </View>
                          <Arrow style={styles.arrow}/>
                      </View>
                  </View>
              </View>
              <Line />
            </View>
          ))}
          {stitchingOrder.map((w) => (
            <View style={styles.order} key={w?.order_code}>
              <View style={styles.orderId}>
                  <Text style={styles.orderIdText}>OID {w?.order_code}</Text>
              </View>
              <View style={styles.content}>
                  <View style={styles.orderContent}>
                      <Text style={styles.deliveryDate}>To deliver in 6 days</Text>
                      <View style={styles.orderDetails}>
                          <GreenCircle />
                          <Text style={styles.orderText}>{w?.order_name}</Text>
                      </View>
                      {/* <Text style={styles.deliveryDate}>To deliver in 5 days</Text>
                      <View style={styles.orderDetails}>
                          <WhiteCircle />
                          <Text style={styles.orderText}>Blouse  - 1</Text>
                      </View> */}
                  </View>
                  <View style={styles.customerContent}>
                      <View style={styles.customer}>
                          <View style={styles.customerDetails}>
                              <Text style={styles.customerName}>Sanjuktha</Text>
                              <Text style={styles.customerNumber}>92332 72671</Text>
                              <Text style={styles.price}>INR {w?.total_amount}</Text>
                          </View>
                          <Arrow style={styles.arrow}/>
                      </View>
                  </View>
              </View>
              <Line />
            </View>
          ))}
            {/* <View style={styles.order}>
                <View style={styles.orderId}>
                    <Text style={styles.orderIdText}>OID 3430</Text>
                </View>
                <View style={styles.content}>
                    <View style={styles.orderContent}>
                        <Text style={styles.deliveryDate}>To deliver in 6 days</Text>
                        <View style={styles.orderDetails}>
                            <WhiteCircle />
                            <Text style={styles.orderText}>Salwar set  - 1</Text>
                        </View>
                        <Text style={styles.deliveryDate}>To deliver in 5 days</Text>
                        <View style={styles.orderDetails}>
                            <WhiteCircle />
                            <Text style={styles.orderText}>Blouse  - 1</Text>
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
                        <Text style={styles.deliveryDate}>To deliver in 6 days</Text>
                        <View style={styles.orderDetails}>
                            <WhiteCircle />
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
                <View style={styles.orderId}>
                    <Text style={styles.orderIdText}>OID 3430</Text>
                </View>
                <View style={styles.content}>
                    <View style={styles.orderContent}>
                        <Text style={styles.deliveryDate}>To deliver in 6 days</Text>
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
            </View> */}
      </View>
      <View style={styles.total}>
        <Text style={styles.totalOrders}>3 Orders (6 items)</Text>
        <Text style={styles.totalPrice}>INR 3900.00</Text>
      </View>
      <Line />
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
        marginBottom: 1.4*vh,
        marginLeft: 2.5*vh,
    },

    deliveryDate: {
        fontFamily: 'NotoSans_400Regular',
        fontSize: 1.8*vh,
        color: '#00C165'
    },

    orderDetails: {
        marginTop: 0.5*vh,
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
    },

    total: {
        height: "8%",
        backgroundColor: '#FAFAFA',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'

    },

    totalOrders: {
        fontFamily: 'NotoSans_400Regular',
        fontSize: 2*vh,
        marginLeft: 2.5*vh
    },

    totalPrice: {
        fontFamily: 'NotoSans_400Regular',
        fontSize: 2.5*vh,
        color: '#999999',
        marginRight: 5*vh
    }

});
