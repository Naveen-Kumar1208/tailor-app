import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import HeaderScreen from '../screens/HeaderScreen';
import AddOrderScreen from '../screens/AddOrderScreen';
import SelectCustomerScreen from '../screens/SelectCustomerScreen';
import OrderTypeScreen from '../screens/OrderTypeScreen';
import OrderFormScreen from '../screens/OrderFormScreen';
import AddCustomerScreen from '../screens/AddCustomerScreen';
import CameraScreen from '../screens/CameraScreen';


const Stack = createStackNavigator();

export default function AddOrderNavigator(){
  return (
    <NavigationContainer independent={true}>
        <Stack.Navigator initialRouteName="Add Order">
            {/* <Stack.Screen name="HeaderScreen" component={HeaderScreen} options={{headerShown:false}}/> */}
            <Stack.Screen name="Add Order" component={AddOrderScreen} 
              options={{
                title: 'New Order',
                headerStyle: {
                    backgroundColor: '#0062BD',
                },
                headerTintColor: '#fff',
              }}
            />
            <Stack.Screen name="Add Customer" component={AddCustomerScreen} 
              options={{
                title: 'Create Customer',
                headerStyle: {
                    backgroundColor: '#0062BD',
                },
                headerTintColor: '#fff',
              }}
            />
            <Stack.Screen name="Select Customer" component={SelectCustomerScreen} 
              options={{
                title: 'New Order',
                headerStyle: {
                    backgroundColor: '#0062BD',
                },
                headerTintColor: '#fff',
              }}
            />
            <Stack.Screen name="Order Type" component={OrderTypeScreen} 
              options={{
                title: 'Select Item type',
                headerStyle: {
                    backgroundColor: '#0062BD',
                },
                headerTintColor: '#fff',
              }}
            />
            <Stack.Screen name="Order Form" component={OrderFormScreen} 
              options={{
                title: 'New Order',
                headerStyle: {
                    backgroundColor: '#0062BD',
                },
                headerTintColor: '#fff',
              }}
            />
            <Stack.Screen name="Camera" component={CameraScreen} options={{headerShown:false}}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}


