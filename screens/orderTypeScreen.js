import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import {vw, vh} from 'react-native-viewport-units';

import Line from '../assets/svg/Line 20.svg';

export default function orderTypeScreen({ navigation }) {
  return (
    <View style={styles.container}>
        <View style={styles.input}>
            <TextInput 
                style={styles.textInput}
                keyboardType='default'
                placeholder='Search....'
                maxLength={20}
            />
        </View>
        <View style={styles.type}>
            <Line />
            <TouchableOpacity>
                <Text style={styles.text} onPress={() => navigation.navigate("Order Form")}>Blouse</Text>
            </TouchableOpacity>
            <Line />
            <TouchableOpacity>
                <Text style={styles.text}>A Line Dress</Text>
            </TouchableOpacity>
            <Line />
            <TouchableOpacity>
                <Text style={styles.text}>Capri</Text>
            </TouchableOpacity>
            <Line />
            <TouchableOpacity>
                <Text style={styles.text}>Kurta Only</Text>
            </TouchableOpacity>
            <Line />
            <TouchableOpacity>
                <Text style={styles.text}>Salwar + Kurta</Text>
            </TouchableOpacity>
            <Line />
            <TouchableOpacity>
                <Text style={styles.text}>Lehenga</Text>
            </TouchableOpacity>
            <Line />
            <TouchableOpacity>
                <Text style={styles.text}>Patiala</Text>
            </TouchableOpacity>
            <Line />
        </View>
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

    type: {
        paddingTop: 4*vh
    },

    text: {
        fontFamily: 'NotoSans_400Regular',
        fontSize: 2*vh,
        marginLeft: 4*vh,
        marginTop: 2*vh,
        marginBottom: 2*vh
    }
});
