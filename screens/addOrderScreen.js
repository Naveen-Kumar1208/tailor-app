import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import {vw, vh} from 'react-native-viewport-units';

export default function addOrderScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Existing Customer?</Text>
      <View style={styles.input}>
            <TextInput 
                style={styles.textInput}
                keyboardType='default'
                placeholder='type customer name or phone number'
                maxLength={15}
            /> 
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Select Customer")}>
        <Text style={styles.text}>customer</Text>
      </TouchableOpacity>
      <Text style={styles.option}>OR</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Add Customer")}>
        <Text style={styles.text}>+ Create new Customer</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'center',
        paddingTop: 2.5*vh
    },

    title: {
        fontFamily: 'NotoSans_700Bold',
        fontSize: 2*vh,
        color: '#000000',
    },

    option: {
        fontFamily: 'NotoSans_400Regular',
        fontSize: 2*vh,
        color: '#999999',
        alignSelf: 'center',
        marginTop: 5.2*vh
    },

    text: {
        fontFamily: 'NotoSans_400Regular',
        fontSize: 2.2*vh,
        color: '#0062BD',
        alignSelf: 'center',
        marginTop: 5*vh
    },

    textInput: {
        borderBottomWidth: 2,
        borderColor: '#0062BD',
        height: 6*vh,
    },
});
