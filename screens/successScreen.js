import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Logo from '../assets/svg/Tailor Mobile.svg';
import Tick from '../assets/svg/tick.svg';
import Spinner from '../assets/svg/spinner.svg';

export default function successScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
            <Logo style={styles.logo} />
            <Tick style={styles.tick}/>
            <Text style={styles.text}>Your account is ready!</Text>
        </View>
        <View style={styles.loading}>
            <Spinner height={20} width={30} style={styles.spinner}/>
            <Text style={styles.loadingText}>Let’s setup your shop...</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,   
    },

    content: {
        height: 120,
        paddingTop: 21,
        backgroundColor: 'white',
        marginTop: 40,
    },

    logo: {
        marginLeft: 150,
        marginBottom: 25
    },

    tick: {
        marginLeft: 175,
        marginBottom: 20
    },

    text: {
        fontFamily: 'NotoSans_400Regular',
        fontSize: 16,
        color: '#037E4A',
        textAlign: 'center'
    },

    loading: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 170
    },

    loadingText: {
        fontFamily: 'NotoSans_400Regular',
        fontSize: 16,
    }

});
