import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

import {vw, vh} from 'react-native-viewport-units';

import Menu from '../assets/svg/menu.svg';
import Name from '../assets/svg/Lia Boutique.svg';
import Add from '../assets/svg/add.svg';

export default function headerScreen({ navigation }) {
  return (
    <View style={{height: "8%", backgroundColor: '#0062BD' }}>
        <View style={{display: 'flex', flexDirection:'row', paddingTop: 5*vw}}>
            <Menu style={{marginLeft: 4*vw}}/>
            <Name style={{marginLeft: 6*vw}}/>
            <TouchableOpacity onPress={() => navigation.navigate("Add Order")}>
                 <Add style={{marginLeft: 50*vw}} />
            </TouchableOpacity>
        </View>  
    </View>
  );
}

// import { StyleSheet, Text, View } from 'react-native';
// import React from 'react';

// export default function headerScreen() {
//   return (
//     <View>
//       <Text>fdafsdgfg</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({});

{/* <TouchableOpacity onPress={() => navigation.navigate("Customer")}></TouchableOpacity> */}