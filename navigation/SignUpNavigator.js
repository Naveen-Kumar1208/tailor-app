import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import SignUpScreen from '../screens/signUpScreen';
import SetUpScreen from '../screens/setupScreen';
import TabNavigator from './TabNavigator';
import AddOrderNavigator from './AddOrderNavigator';

import Menu from '../assets/svg/menu.svg';
import Add from '../assets/svg/add.svg';


const Stack = createStackNavigator();

export default function SignUpNavigator() {
  return (
    <NavigationContainer independent={true}>
        <Stack.Navigator initialRouteName="SignUpScreen">
            {/* <Stack.Screen name="HeaderScreen" component={HeaderScreen} options={{headerShown:false}}/> */}
            <Stack.Screen name="SignUpScreen" component={SignUpScreen} 
              options={{
                title: 'CREATING A NEW USER',
                headerStyle: {
                    backgroundColor: '#0062BD',
                },
                headerTintColor: '#fff',
              }}
            />
            <Stack.Screen name="SetUpScreen" component={SetUpScreen} 
              options={{
                title: 'Create Shop',
                headerStyle: {
                    backgroundColor: '#0062BD',
                },
                headerTintColor: '#fff',
              }}
            />
            <Stack.Screen name="Tab Navigator" component={TabNavigator} 
                        options={({route, navigation}) => ({
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
  )
}
