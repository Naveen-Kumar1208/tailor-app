import React from 'react'
import { StyleSheet, Text, View } from 'react-native';


export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Tailor {'\n'} mobile</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 140,
        paddingTop: 21,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        borderStyle:  'dashed'
    },
    title: {
        fontFamily: 'Pacifico-Regular',
        fontSize: 24,
        marginTop: 30,
        lineHeight: 24,
        color: 'black',
        textAlign: 'center',
        fontWeight: 'normal'
    }
  });