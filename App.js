import { StyleSheet, Text, View, ScrollView } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

import SignIn from "./screens/signIn";
import SignUp from "./screens/signUp";
import OtpVerify from "./screens/otpVerify";
import AppLoading from "expo-app-loading";
import SuccessScreen from "./screens/successScreen";
import SetUpScreen from "./screens/setupScreen";
import SettingUpScreen from "./screens/settingUpScreen";
import DashBoard from "./screens/dashBoardScreen";
import Orders from "./screens/ordersScreen";
import Customers from "./screens/customerScreen";
import DeliveyByDay from "./screens/deliveryByDayScreen";
import DeliveyByMonth from "./screens/deliveryByMonthScreen";
import OrderDetails from "./screens/orderDetailsScreen";
import OrderCompleted from "./screens/orderCompletedScreen";
import CustomerDetails from "./screens/customerDetailsScreen";
import AddCustomer from "./screens/addCustomerScreen";
import Login from './screens/Login';
import HeaderScreen from './screens/HeaderScreen';
import AddCustomerScreen from "./screens/addCustomerScreen";
import AddOrderScreen from "./screens/addOrderScreen";
import SelectCustomerScreen from "./screens/selectCustomerScreen";
import OrderTypeScreen from "./screens/orderTypeScreen";
import OrderFormScreen from "./screens/orderFormScreen";
import CameraScreen from "./screens/cameraScreen";
import SignUpScreen from "./screens/signUpScreen";


import { useFonts, Pacifico_400Regular } from "@expo-google-fonts/pacifico";

// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import {
  NotoSans_400Regular,
  NotoSans_700Bold,
} from "@expo-google-fonts/noto-sans";

import Menu from './assets/svg/menu.svg';
import Name from './assets/svg/Lia Boutique.svg';
import Add from './assets/svg/add.svg';

import DetailsNavigator from "./navigation/detailsNavigation/DashboardNavigator";
import TabNavigator from "./navigation/TabNavigator";
import AddCustomerNavigator from "./navigation/AddCustomerNavigatjor";
import AddOrderNavigator from "./navigation/AddOrderNavigator";
import SignUpNavigator from "./navigation/SignUpNavigator";

// import { auth } from './firebase';
// import { signInWithEmailAndPassword, signOut } from "firebase/auth";
// import { useState, useEffect } from 'react';

// const Stack = createStackNavigator();
// const Tab = createMaterialTopTabNavigator();

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import orderTypeScreen from "./screens/orderTypeScreen";
// import AddOrderScreen from "./screens/addCustomerScreen";

import { LogBox } from "react-native"

LogBox.ignoreAllLogs(true);

const Stack = createStackNavigator();


export default function App() {
  let [fontsLoaded, error] = useFonts({
    NotoSans_400Regular,
    NotoSans_700Bold,
    Pacifico_400Regular,

    "Pacifico-Regular": require("./assets/fonts/Pacifico-Regular.ttf"),
    "NotoSans-Regular": require("./assets/fonts/NotoSans-Regular.ttf"),
  });

  // const [isSignedIn, setIsSignedIn] = useState(false);
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // const SignIn = () => {
  //   signInWithEmailAndPassword(auth,email,password)
  //   .then((result) => {
  //     setIsSignedIn(true);
  //   })
  //   .catch((err) => {
  //     alert(result);
  //   })
  // }

  // const SignOut = () => {
  //   signOut(auth)
  //   .then((result) => {
  //     setIsSignedIn(false);
  //   })
  //   .catch((err) => {
  //     alert(err);
  //   })
  // }

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <SafeAreaView style={{ flex: 1 }} edges={['top', 'left', 'right']}>
          <View style={styles.container}>
            {/* <AddCustomerNavigator /> */}
            {/* <AddCustomerScreen /> */}
            {/* <AddCustomer /> */}
            {/* <Customers /> */}
            {/* <OrderDetails /> */}
            {/* <AddOrderScreen /> */}
            {/* <SelectCustomerScreen /> */}
            {/* <OrderTypeScreen /> */}
            {/* <OrderFormScreen /> */}
            {/* <CameraScreen /> */}
            {/* <SignUpScreen /> */}


            {/* <TabNavigator />  */}
            {/* <HeaderScrenn /> */}
            {/* <AddOrderNavigator />     */}
            {/* <SignUpNavigator /> */}
            

              <NavigationContainer>
                    <Stack.Navigator initialRouteName="Login">
                      <Stack.Screen name="SignIn" component={SignIn} options={{headerShown:false}} />
                      <Stack.Screen name="SIGN UP" component={SignUpNavigator} options={{headerShown:false}} />
                      <Stack.Screen name="Tab Navigator" component={TabNavigator} 
                        options={({navigation}) => ({
                          headerTitle: "Home",
                          // headerTitleContainerStyle: {marginLeft: 20},
                          headerRight: () => (
                            <View style={{marginRight: 24}}>
                              <Add  onPress={() => navigation.navigate("AddOrderNavigator")}/>
                            </View>
                          ),
                          headerLeft: () => (
                            <View>
                              <Menu style={{marginLeft: 16}}/>
                            </View>
                          ),
                          headerStyle: {
                            backgroundColor: '#0062BD',
                        //Set Header color
                          },
                          headerTintColor: '#fff', //Set Header text color
                          headerTitleStyle: {
                            fontWeight: 'bold', //Set Header text style
                          },
                      })} 
                      />
                      <Stack.Screen name="AddOrderNavigator" component={AddOrderNavigator} options={{headerShown:false}}/>
                    </Stack.Navigator>
              </NavigationContainer>
            {/* <SuccessScreen /> */}
            {/* <SetUpScreen /> */}
            {/* <SettingUpScreen /> */}
          </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
    // justifyContent: 'center',
    // marginTop: 60
  },

  header: {
    height: 120,
    backgroundColor: '#0062BD',
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 20
  }
});

{/* <NavigationContainer>
          <Stack.Navigator initialRouteName="SignIn">
            <Stack.Screen name="SignIn" component={SignIn} options={{headerShown:false}} />
            <Stack.Screen name="SIGN UP / CREATE ACCOUNT" component={SignUp} options={{headerTintColor: '#0062BD'}, {headerTitleStyle:{marginLeft: 10}}}/>
            <Stack.Screen name="OTP VERIFICATION" component={OtpVerify} options={{headerTintColor: '#0062BD'}, {headerTitleStyle:{marginLeft: 50}}}/>
            <Stack.Screen name="Success Screen" component={SuccessScreen} options={{headerShown:false}}/>
          </Stack.Navigator>
    </NavigationContainer> */}