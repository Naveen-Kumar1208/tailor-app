import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StyleSheet, Text, View, Dimensions } from "react-native";

import DashBoard from '../screens/dashBoardScreen';
import Orders from '../screens/ordersScreen';
import Customers from '../screens/customerScreen';


import DashboardNavigator from './detailsNavigation/DashboardNavigator';
import OrdersNavigator from './detailsNavigation/OrdersNavigator';
import CustomerNavigator from './detailsNavigation/CustomerNavigator';

import Menu from '../assets/svg/menu.svg';
import Name from '../assets/svg/Lia Boutique.svg';
import Add from '../assets/svg/add.svg';

import Dashboard from '../assets/svg/dashboard.svg';
import DashboardUnfocused from '../assets/svg/dashboard_unfocused.svg';
import Order from '../assets/svg/order.svg';
import OrderUnfocused from '../assets/svg/order_unfocused.svg';
import Customer from '../assets/svg/customer.svg';
import CustomerUnfocused from '../assets/svg/customer_unfocused.svg';

import {vw, vh} from 'react-native-viewport-units';

const Tab = createMaterialTopTabNavigator();

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


export default function TabNavigator({navigation}){
    return(
        <>
            <View style={{height: "8%", backgroundColor: '#0062BD' }}>
                <View style={{display: 'flex', flexDirection:'row', paddingTop: 5*vw}}>
                    <Menu style={{marginLeft: 4*vw}}/>
                    <Name style={{marginLeft: 6*vw}}/>
                    <Add style={{marginLeft: 50*vw}} onPress={() => navigation.navigate("DeliveryByDay")}/>
                </View>  
            </View>
            <NavigationContainer independent={true}>
                <Tab.Navigator initialRouteName="DashBoard" tabBarOptions={{activeTintColor: "#ffffff", labelStyle: { fontSize: 3.7*vw }, style: { backgroundColor: "#0062BD"}}}
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused }) => {
                          if (route.name === 'DashBoard') {
                            return focused ? <Dashboard /> : <DashboardUnfocused />
                          } else if (route.name === 'Orders') {
                            return focused ? <Order /> : <OrderUnfocused />
                          } else if (route.name === 'Customers') {
                            return focused ? <Customer /> : <CustomerUnfocused />
                          }
                        },
                    })}
                >
                    <Tab.Screen name="DashBoard" component={DashboardNavigator}/>
                    <Tab.Screen name="Orders" component={OrdersNavigator} />
                    <Tab.Screen name="Customers" component={CustomerNavigator} />
                </Tab.Navigator>
            </NavigationContainer>
        </>
    );
}
