import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Logo from '../assets/svg/Tailor Mobile.svg';
import Border from '../assets/svg/Line 1.svg';


export default function Header() {
    return (
        <View style={styles.header}>
            <Logo style={styles.logo} />
            <Border style={styles.line} />
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 120,
        // paddingTop: 21,
        backgroundColor: 'white',
        // marginTop: 40,
    },

    logo: {
        // marginLeft: 150,
        alignSelf: 'center',
        marginBottom: 40
    }

  });