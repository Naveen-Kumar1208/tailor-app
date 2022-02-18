import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { useState, useEffect } from 'react'
import Hamburger from '../assets/svg/hamburger.svg';
import Title from '../assets/svg/TailorMobileRow.svg';
import Shop from '../assets/svg/shop.svg';
import DropDown from '../assets/svg/dropArrow.svg';

export default function setUpScreen({ navigation }) {
  const [name, setName] = useState("");

  const changeHandler = (text) => {
    setName(text);
}

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Shop />
        <Text style={styles.text}>SETUP YOUR SHOP</Text>
      </View>
      <View style={styles.input}>
        <TextInput 
          style={styles.name}
          keyboardType='default'
          placeholder='Your Boutique/Shop/Business name'
          maxLength={10}
          onChangeText={changeHandler}
          value={name}
        />
        <View style={styles.dropDownInput}>
          <TextInput 
            style={styles.country}
            keyboardType='default'
            placeholder='India'
            maxLength={10}
          />
          <DropDown style={styles.dropDown}/>
        </View>
      </View>
      <View style={styles.button}>
        <TouchableOpacity onPress={() => navigation.navigate("Tab Navigator")}>
          <View style={styles.buttonStyle}>
              <Text style={styles.buttonText}>FINISH</Text>
          </View>
        </TouchableOpacity>
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
    paddingTop: 50,
    // paddingLeft: 30
  },

  text: {
    fontFamily: 'NotoSans_700Bold',
    fontSize: 17,
    paddingTop: 20
  },

  input: {
    marginLeft: 70,
    paddingTop: 30
  },

  name: {
    borderBottomWidth: 2,
    borderColor: '#0062BD',
    width: 250,
    paddingBottom: 5
  },

  dropDownInput: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 50,
  },

  country: {
    borderBottomWidth: 2,
    borderColor: '#0062BD',
    width: 250,
    paddingBottom: 5
  },

  dropDown: {
    marginTop: 13,
    marginLeft: -15
  },

  button: {
    margin: 70,
    marginTop: 50,
},

buttonStyle: {
    borderRadius: 2,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: '#0062BD',
    width: 255
},

buttonText: {
    color: 'white',
    fontFamily: 'NotoSans_400Regular',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center'
},

});
