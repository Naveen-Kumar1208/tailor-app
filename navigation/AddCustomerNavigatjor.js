import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import AddCustomer from '../screens/addCustomerScreen';
import Customers from '../screens/customerScreen';
import CustomerDetails from '../screens/customerDetailsScreen';

const Stack = createStackNavigator();

export default function AddCustomerNavigator(){
    return(
        <NavigationContainer independent={true}>
            <Stack.Navigator initialRouteName="AddCustomer" screenOptions={{headerShown:false}}>
                <Stack.Screen name="AddCustomer" component={AddCustomer} />
                <Stack.Screen name="Customers" component={Customers} />
                {/* <Stack.Screen name="CustomerDetails" component={CustomerDetails} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    );
}