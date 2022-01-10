import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SendingOtp from '../components/otp/SendingOtp'
import EnteringOtp from '../components/otp/EnteringOtp'
import VerifyingOtp from '../components/otp/VerifyingOtp'

export default function otpVerify() {
    return (
        <View>
            <SendingOtp />
            {/* <EnteringOtp /> */}
            {/* <VerifyingOtp /> */}
        </View>
    )
}

const styles = StyleSheet.create({})
