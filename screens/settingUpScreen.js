import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { useState, useEffect } from 'react'
import Hamburger from '../assets/svg/hamburger.svg';
import Title from '../assets/svg/TailorMobileRow.svg';
import Shop from '../assets/svg/shop.svg';
import Spinner from '../assets/svg/spinner.svg';

export default function setUpScreen() {

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Hamburger style={styles.hamburger}/>
        <Title style={styles.title}/>
      </View>
      <View style={styles.content}>
        <Shop />
        <Spinner style={styles.spinner}/>
        <Text style={styles.text}>Get ready...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 70,
    marginLeft: 25
  },

  header: {
    display: 'flex',
    flexDirection: 'row',
  },

  title: {
    marginLeft: 30
  },

  content: {
    alignItems: 'center',
    paddingTop: 130,
    // paddingLeft: 30
  },

  text: {
    fontFamily: 'NotoSans_400Regular',
    fontSize: 17,
    paddingTop: 10
  },

  spinner: {
    marginTop: 75
  }

});
