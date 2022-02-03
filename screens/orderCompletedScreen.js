import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import {vw, vh} from 'react-native-viewport-units';

import Arrow from '../assets/svg/rightarrow.svg';
import Line from '../assets/svg/Line 12.svg';

export default function orderCompletedScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.ordersList}>
        <View style={styles.orders}>
            <Text style={styles.date}>January 2022 (24)</Text>
            <View style={styles.price}>
                <Text style={styles.totalAmount}>INR 3900.00</Text>
                <Arrow style={styles.arrow}/>
            </View> 
        </View>
        <Line />
        <View style={styles.orders}>
            <Text style={styles.date}>December 2021 (130)</Text>
            <View style={styles.price}>
                <Text style={styles.totalAmount}>INR 3900.00</Text>
                <Arrow style={styles.arrow}/>
            </View> 
        </View>
        <Line />
        <View style={styles.orders}>
            <Text style={styles.date}>November 2021 (92)</Text>
            <View style={styles.price}>
                <Text style={styles.totalAmount}>INR 3900.00</Text>
                <Arrow style={styles.arrow}/>
            </View> 
        </View>
        <Line />
        <View style={styles.orders}>
            <Text style={styles.date}>October 2021 (96)</Text>
            <View style={styles.price}>
                <Text style={styles.totalAmount}>INR 3900.00</Text>
                <Arrow style={styles.arrow}/>
            </View> 
        </View>
        <Line />
      </View>
      <View style={styles.total}>
        <Text style={styles.totalOrders}>491 Orders (1500 items)</Text>
        <Text style={styles.totalPrice}>INR 4,32,000.00</Text>
      </View>
      <Line />
    </View>
  );
}

const styles = StyleSheet.create({
    arrow: {
        marginRight: 1.5*vh,
    },

    orders: {
        height: "8%",
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'

    },

    date: {
        fontFamily: 'NotoSans_400Regular',
        fontSize: 2*vh,
        color: '#0062BD',
        marginLeft: 2.5*vh
    },

    price: {
        display: 'flex',
        flexDirection: 'row',

    },

    totalAmount: {
        fontFamily: 'NotoSans_400Regular',
        fontSize: 2*vh,
        color: '#999999',
        marginRight: 5*vh,
        alignSelf: 'center'
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
        fontSize: 2*vh,
        color: '#999999',
        marginRight: 5*vh
    }
});
