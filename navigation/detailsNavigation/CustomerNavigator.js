import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Customers from '../../screens/customerScreen';
import CustomerDetails from '../../screens/customerDetailsScreen';

const Stack = createStackNavigator();

export default function DashboardNavigator(){
    return(
        <NavigationContainer independent={true}>
            <Stack.Navigator initialRouteName="Customers">
                <Stack.Screen name="Customers" component={Customers} screenOptions={{headerShown:false}}/>
                <Stack.Screen name="CustomerDetails" component={CustomerDetails} 
                    options={{
                        title: 'CUSTOMER DETAILS',
                        headerStyle: {
                            backgroundColor: '#0062BD',
                        },
                        headerTintColor: '#fff',
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}