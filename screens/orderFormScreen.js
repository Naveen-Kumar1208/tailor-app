import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
// import DatePicker from 'react-native-datepicker';

import {vw, vh} from 'react-native-viewport-units';

import Line from '../assets/svg/Line 20.svg';
import Line1 from '../assets/svg/Line 12.svg';
import Camera from '../assets/svg/camera.svg';

export default function orderFormScreen({ navigation }) {
  return (
    <View style={styles.container}>
        <ScrollView>
            <View style={styles.order}>
                <View style={styles.orderId}>
                    <Text style={styles.orderIdText}>OID 3430</Text>
                </View>
                <View style={styles.content}>
                    <View style={styles.customerDetails}>
                        <Text style={styles.customerName}>Ajitha</Text>
                        <Text style={styles.customerNumber}>9876543210</Text>
                    </View>
                    <View style={styles.orderDetails}>
                        <View style={styles.items}>
                            <Text style={styles.text}>Items</Text>
                            <Text style={styles.number}>1</Text>
                        </View>
                        <View style={styles.value}>
                            <Text style={styles.text}>Value</Text>
                            <Text style={styles.number}>RS.0</Text>
                        </View>
                    </View>
                </View>
            </View>
            <Line />

            <View style={styles.inputContent}>
                <Text style={styles.typeNo}>1</Text>
                <View style={styles.input}>
                    <View style={styles.type}>
                        <Text style={styles.title}>Item type</Text>
                        <TextInput 
                            style={styles.typeInput}
                            keyboardType='default'
                            maxLength={10}
                            // onChangeText={changeNumberHandler}
                            value={"Blouse"}
                        /> 
                    </View>
                    <View style={{paddingTop: 3*vh}}>
                        <Text style={styles.title}>Photo</Text>
                         <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
                             <View style={styles.cameraBox}>
                                <Camera style={styles.camera}/>
                             </View>
                         </TouchableOpacity>
                    </View>

                    <View style={{paddingTop: 3*vh}}>
                        <Text style={styles.title}>Measurements</Text>
                        <TextInput 
                            style={styles.measurementInput}
                            multiline={true}
                        /> 
                    </View>

                    <View style={{paddingTop: 3*vh}}>
                        <Text style={styles.title}>Special Notes / Instructions</Text>
                        <TextInput 
                            style={styles.notesInput}
                            multiline={true}
                        /> 
                    </View>

                    <View style={{paddingTop: 3*vh}}>
                        <Text style={styles.title}>Delivery on</Text>
                        {/* <DatePicker
                            style={styles.datePickerStyle}
                            // date={date}
                            mode="date"
                            placeholder="select date"
                            format="DD/MM/YYYY"
                            minDate="01-01-1900"
                            maxDate="01-01-2000"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={{
                                dateIcon: {
                                position: 'absolute',
                                right: -5,
                                top: 4,
                                marginLeft: 0,
                                },
                                dateInput: {
                                borderColor : "gray",
                                alignItems: "flex-start",
                                borderWidth: 0,
                                borderBottomWidth: 1,
                                },
                                placeholderText: {
                                fontSize: 17,
                                color: "gray"
                                },
                                dateText: {
                                fontSize: 17,
                                }
                            }}
                        /> */}
                    </View>

                    <View style={{paddingTop: 3*vh}}>
                        <Text style={styles.title}>Stitching Cost</Text>
                        <TextInput 
                            style={styles.typeInput}
                            keyboardType='default'
                            placeholder='Tap to enter cost...'
                            maxLength={10}
                            // onChangeText={changeNumberHandler}
                            // value={"Blouse"}
                        /> 
                    </View>
                    
                </View>
                <Line1 />
            </View>
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex :1,
    },

    order: {
        height: 14*vh,
        backgroundColor: '#FEFFF1',
        paddingTop: 2*vh,
    },

    orderId: {
        borderColor: '#00C165',
        borderWidth: 1,
        borderRadius: 2.5*vh,
        width: "26%",
        marginLeft: 2.5*vh,
        
    },

    orderIdText: {
        fontFamily: 'NotoSans_400Regular',
        fontSize: 1.8*vh,
        letterSpacing: 3,
        marginLeft: 0.5*vh
    },

    content: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 2.5*vh,
        marginRight: 2.5*vh,
        paddingTop: 0.5*vh,
        justifyContent: 'space-between'
    },

    customerName: {
        fontFamily: 'NotoSans_700Bold',
        fontSize: 2.5*vh,
    },
    
    customerNumber: {
        fontFamily: 'NotoSans_400Regular',
        fontSize: 2.5*vh,
    },

    orderDetails: {
        display: 'flex',
        flexDirection: 'row',
    },

    text: {
        fontFamily: 'NotoSans_400Regular',
        fontSize: 2*vh,
    },

    number: {
        fontFamily: 'NotoSans_400Regular',
        fontSize: 2*vh,
        color: '#999999'
    },

    value: {
        marginLeft: 4*vh
    },

    typeInput: {
        borderBottomWidth: 2,
        borderColor: '#0062BD',
        width: "90%",
    },

    title: {
        fontFamily: 'NotoSans_400Regular',
        fontSize: 1.5*vh,
        color: '#999999',
        paddingBottom: 1*vh
    },

    typeNo: {
        fontFamily: 'NotoSans_400Regular',
        fontSize: 3*vh,
        marginLeft: 2*vh,
        paddingTop: 2.4*vh
    },

    input: {
        marginLeft: 7.5*vh,
        marginTop: -4*vh,
        marginBottom: 5*vh
    },

    cameraBox: {
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#0062BD',
        width: 10*vh,
        height: 11*vh,
        justifyContent: 'center', //Centered vertically
        alignItems: 'center', // Centered horizontally
        flex:1
    },

    measurementInput: {
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#0062BD',
        width: 44*vh,
        height: 27.5*vh,
    },

    notesInput: {
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#0062BD',
        width: 44*vh,
        height: 15*vh,
    },

    datePickerStyle: {
        width: 230,
    },

});

