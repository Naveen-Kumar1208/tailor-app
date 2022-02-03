import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

import Line from '../assets/svg/Line 12.svg';
import Waiting from '../assets/svg/waiting 1.svg';
import Stitching from '../assets/svg/stitching-white 1.svg';
import Delayed from '../assets/svg/delayed 1.svg';
import Completed from '../assets/svg/completed-white 1.svg';
import Cancelled from '../assets/svg/cancelled-orders 1.svg';
import Arrow from '../assets/svg/rightarrow.svg';
import LineTwo from '../assets/svg/Line 12.svg';

import {vw, vh} from 'react-native-viewport-units';

export default function ordersScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.open}>
            <Text style={styles.title}>OPEN ORDERS</Text>
            <Line />
            <View style={styles.details}>
                <View style={styles.contentOne}>
                    <Waiting />                    
                    <TouchableOpacity onPress={() => navigation.navigate("Waiting")}>
                        <View style={styles.button}>
                            <Text style={styles.text}>Waiting (3)</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.contentTwo}>
                    <Text style={styles.price}>INR 19,000.00</Text>
                    <Arrow />
                </View>
            </View>
            <Line />
            <View style={styles.details}>
                <View style={styles.contentOne}>
                    <Stitching />
                    <TouchableOpacity onPress={() => navigation.navigate("Stitching")}>
                        <View style={styles.button}>
                            <Text style={styles.text}>Stitching (2)</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.contentTwo}>
                    <Text style={styles.price}>INR 19,000.00</Text>
                    <Arrow />
                </View>
            </View>
            <Line />
            <View style={styles.details}>
                <View style={styles.contentOne}>
                    <Delayed />
                    <TouchableOpacity onPress={() => navigation.navigate("Delayed")}>
                        <View style={styles.button}>
                            <Text style={styles.text}>Delayed (1)</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.contentTwo}>
                    <Text style={styles.price}>INR 19,000.00</Text>
                    <Arrow />
                </View>
            </View>
            <Line />
      </View>

      <View style={styles.closed}>
            <Text style={styles.title}>CLOSED ORDERS</Text>
            <Line />
            <View style={styles.details}>
                <View style={styles.contentOne}>
                    <Completed />
                    <TouchableOpacity onPress={() => navigation.navigate("Completed")}>
                        <View style={styles.button}>
                            <Text style={styles.text}>Completed (417)</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.contentTwo}>
                    <Text style={styles.price}>INR 19,000.00</Text>
                    <Arrow />
                </View>
            </View>
            <Line />
            <View style={styles.details}>
                <View style={styles.contentOne}>
                    <Cancelled />
                    <TouchableOpacity onPress={() => navigation.navigate("Cancelled")}>
                        <View style={styles.button}>
                            <Text style={styles.text}>Cancelled (18)</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.contentTwo}>
                    <Text style={styles.price}>INR 19,000.00</Text>
                    <Arrow />
                </View>
            </View>
            <Line />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    open: {
        marginTop: 1.9*vh,
    },

    title: {
        marginLeft: 2.4*vh,
        fontFamily: 'NotoSans_400Regular',
        fontSize: 3*vh,
        marginBottom: 1.9*vh
    },

    details: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 2.7*vh,
        marginBottom: 3.3*vh
    },

    contentOne: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 3*vh
    },

    contentTwo: {
        display: 'flex',
        flexDirection: 'row',
        marginRight: 1.4*vh
    },

    text: {
        fontFamily: 'NotoSans_400Regular',
        fontSize: 2*vh,
        color: '#0062BD',
        marginLeft: 1.5*vh
    },

    price: {
        fontFamily: 'NotoSans_400Regular',
        fontSize: 2*vh,
        color: '#999999',
        marginRight: 5*vh
    },
});
