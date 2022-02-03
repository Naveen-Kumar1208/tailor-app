import React from 'react'
import { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SendingOtp from '../components/otp/SendingOtp'
import EnteringOtp from '../components/otp/EnteringOtp'
import VerifyingOtp from '../components/otp/VerifyingOtp'


export default function otpVerify({navigation, route }) {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
           setIsLoading(false);
         }, 2000);
       },[]);


    if(isLoading) {
        return (
            <View style={styles.container}><SendingOtp number={route.params.paramKey}/></View>
        )
    } else {
        return (
            <View style={styles.container} >
                <EnteringOtp number={route.params.paramKey} onPress={() => navigation.navigate("Sucess Screen")}/>
            </View>
        )
    }

    // return (
    //     <View style={styles.container}> 
            
            
    //         <VerifyingOtp number={route.params.paramKey}/> 
    //     </View>
    // )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'

    }
})
