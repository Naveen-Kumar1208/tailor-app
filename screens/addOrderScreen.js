import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, FlatList } from 'react-native';
import React from 'react';
import { useState, useEffect } from 'react';
import SearchableDropdown from 'react-native-searchable-dropdown';
import Autocomplete from 'react-native-autocomplete-input';

import {vw, vh} from 'react-native-viewport-units';

import { db } from '../firebase';
import { getFirestore, collection, getDocs, setDoc, doc, serverTimestamp } from "firebase/firestore";

export default function addOrderScreen({ navigation }) {


  const[customer, setCustomer] = useState([]);
  const [filteredCustomer, setFilteredCustomer] = useState([]);
  const [selectedValue, setSelectedValue] = useState({});

    useEffect(() => {
        (async () => {
            const customersCol = collection(db, 'customer');
            const customerSnapshot = await getDocs(customersCol);
            const customerList = customerSnapshot.docs.map(doc => doc.data());
            console.log(customerList)
            setCustomer(customerList);
        })()
    }, []);

    const findCustomer = (query) => {
      // Method called every time when we change the value of the input
      if (query) {
        // Making a case insensitive regular expression
        const regex = new RegExp(`${query.trim()}`, 'i');
        // Setting the filtered Customer array according the query
        setFilteredCustomer(
          customer.filter((cus) => cus?.name.search(regex) >= 0)
        );
      } else {
        // If the query is null then return blank
        setFilteredCustomer(
          <Text>null</Text>
        );
      }
    };


console.log("customer List -------->",customer);
  return (
    // <View>
    <View style={styles.container}>
      <Text style={styles.title}>Existing Customer?</Text>
      <View style={styles.input}>
        <Autocomplete
          autoCapitalize="none"
          autoCorrect={false}
          inputContainerStyle={styles.textInput}
          // containerStyle={styles.autocompleteContainer}
          data={filteredCustomer}
          onChangeText={(text) => findCustomer(text)}
          placeholder="type customer name or phone number"
          flatListProps={{
            keyExtractor: (item, idx) => idx.toString(),
            renderItem: ({ item }) => (
              <TouchableOpacity style={{backgroundColor: '#FFFEDC'}}   onPress={() => navigation.navigate("Select Customer", {
                name: item.name,
                phone_no: item.phone_no
              })}>
                <Text style={styles.itemText}>{item.name} {'\n'} {item.phone_no}</Text>
              </TouchableOpacity>
            ),
          }}
        />
        {/* <SearchableDropdown
          onTextChange={(text) => console.log(text)}
          //On text change listner on the searchable input
          onItemSelect={() => navigation.navigate("Select Customer", {
            name: 'abi',
            phone_no: 988978676554
          })}
          // jjonItemSelect called after the selection from the dropdown
          // containerStyle={{ height: "50%" }}
          //suggestion container style
          textInputStyle={{
            //inserted text style
            borderBottomWidth: 2,
            borderColor: '#0062BD',
            height: 6*vh,
          }}
          itemStyle={{
            //single dropdown item style
            padding: 4,
            // marginTop: 2,
            backgroundColor: '#FFFEDC',
            // borderColor: '#bbb',
            // borderWidth: 1,
          }}
          itemTextStyle={{
            //text style of a single dropdown item
            color: '#222',
          }}
          itemsContainerStyle={{
            //items container style you can pass maxHeight
            //to restrict the items dropdown hieght
            maxHeight: '60%',
          }}
          items={customer}
          //mapping of item array
          defaultIndex={2}
          //default selected item index
          placeholder="type customer name or phone number"
          //place holder for the search input
          resetValue={false}
          //reset textInput Value with true and false state
          // underlineColorAndroid="transparent"
          //To remove the underline from the android input
        /> */}
      </View>
      {/* <TouchableOpacity onPress={() => navigation.navigate("Select Customer")}>
        <Text style={styles.text}>customer</Text>
      </TouchableOpacity> */}
      <Text style={styles.option}>OR</Text>
      <TouchableOpacity  onPress={() => navigation.navigate("Add Customer")}>
        <Text style={styles.text}>+ Create new Customer</Text>
      </TouchableOpacity>
    </View>
    // </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'center',
        paddingTop: 2.5*vh,
        // backgroundColor: '#FFFFFF',
        // width: "100%"
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
        marginTop: 10*vh
    },

    text: {
        fontFamily: 'NotoSans_400Regular',
        fontSize: 2.2*vh,
        color: '#0062BD',
        alignSelf: 'center',
        // marginTop: 5*vh
    },

    textInput: {
        borderBottomColor: '#0062BD',
        borderBottomWidth: 2,
        borderWidth: 0
    },

    itemText: {
      fontSize: 2*vh,
      paddingTop: 1.5*vh,
      // margin: 2,
    },

    input: {
      height: 25*vh,
    }
});
