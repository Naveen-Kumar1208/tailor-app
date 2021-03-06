import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React from 'react';

import { auth } from '../firebase';
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useState, useEffect } from 'react';

export default function Login({ navigation }) {

    const [isSignedIn, setIsSignedIn] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const SignIn = () => {
        signInWithEmailAndPassword(auth,email,password)
        .then((result) => {
          setIsSignedIn(true);
          navigation.navigate("Tab Navigator");
        })
        .catch((err) => {
          alert("Entered wrong username or password");
        })
    }

  return (
    <View style={styles.logIn}>
        <Text style={styles.text1}>LogIn</Text>
        <TextInput style={styles.input1} placeholder="email" value={email} onChangeText={text => setEmail(text)} />
        <TextInput style={styles.input1} placeholder="password" value={password} onChangeText={text => setPassword(text)} />
        <Button title="sign in" onPress={SignIn} />      
    </View>
  );
}

const styles = StyleSheet.create({
    logIn: {
        flex: 1,
        padding: 30,
        marginTop: 10
    },

    input1: {
        backgroundColor: 'white',
        height: 50,
        width: 330,
        marginBottom: 10
    },

    text1: {
      fontFamily: 'NotoSans_700Bold',
      fontSize: 45,
      color: '#0062BD',
      alignSelf: 'center',
      marginBottom: 30,
    }
});
