import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import React from 'react';
import Line from '../assets/svg/Line 1.svg';

import {vw, vh} from 'react-native-viewport-units';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function dashBoardScreen({ navigation }) {
  return (
    <View style={styles.container}>
        <ScrollView>
            <View style={styles.deliverContent}>
                <Text style={styles.title}>TO BE DELIVERED</Text>
                <View style={styles.contentValues}>
                    <View style={styles.details}>
                        <Text style={styles.text}>Today</Text>
                        <TouchableOpacity onPress={() => navigation.navigate("DeliveryByDay")}>
                                <View style={styles.button}>
                                    <Text style={styles.values}>3</Text>
                                </View>
                        </TouchableOpacity>
                        
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.text}>Tomorrow</Text>
                        <TouchableOpacity onPress={() => navigation.navigate("DeliveryByDay")}>
                                <View style={styles.button}>
                                    <Text style={styles.values}>4</Text>
                                </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.text} style={{marginTop: -1.4*vh}}>Rest of this {'\n'} Month</Text>
                        <TouchableOpacity onPress={() => navigation.navigate("DeliveryByMonth")}>
                                <View style={styles.button}>
                                    <Text style={styles.values}>22</Text>
                                </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <Line />

            <View style={styles.orderContent}>
                <Text style={styles.title}>ORDERS </Text>
                <View style={styles.contentValues}>
                    <View style={styles.details}>
                        <Text style={styles.text}>Waiting</Text>
                        <Text style={styles.values}>2</Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.text}>In Stitching</Text>
                        <Text style={styles.values}>5</Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.text}>Delayed</Text>
                        <Text style={styles.values}>3</Text>
                    </View>
                </View>
            
                <View style={styles.totalValues}>
                    <View style={styles.contentValues}>
                        <View style={styles.details}>
                            <Text style={styles.text}>This month</Text>
                            <Text style={styles.valuesOne}>51</Text>
                        </View>
                        <View style={styles.details}>
                            <Text style={styles.text}>This year</Text>
                            <Text style={styles.valuesOne}>562</Text>
                        </View>
                        <View style={styles.details}>
                            <Text style={styles.text}>Total Revenue</Text>
                            <Text style={styles.valuesOne}>168K</Text>
                        </View>
                    </View>
                </View>
            </View>
            <Line />
           
           </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    deliverContent: {
        marginTop: 1.4*vh,
        marginBottom: 2.5*vh
    },

    orderContent: {
        marginTop: 1.3*vh
    },

    totalValues: {
        marginTop: 20,
        marginBottom: 20
    },

    title: {
        marginLeft: 20,
        fontFamily: 'NotoSans_400Regular',
        fontSize: 3*vh
    },

    contentValues: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },

    details: {
        marginTop: 3.5*vh
    },

    text: {
        fontFamily: 'NotoSans_400Regular',
        fontSize: 2*vh
    },

    values: {
        fontSize: 8*vh,
        color: '#0062BD'
    },

    valuesOne: {
        fontSize: 4*vh,
        color: '#0062BD'
    }

});
