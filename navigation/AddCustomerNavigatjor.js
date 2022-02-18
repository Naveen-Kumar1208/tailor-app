import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import AddCustomer from '../screens/addCustomerScreen';
import Customers from '../screens/customerScreen';
import CustomerDetails from '../screens/customerDetailsScreen';

import DashBoard from "../screens/dashBoardScreen";
import DeliveryByDay from "../screens/deliveryByDayScreen";
import DeliveryByMonth from "../screens/deliveryByMonthScreen";
import AddOrderScreen from "../screens/addOrderScreen";

import TabNavigator from './TabNavigator';
import AddOrderNavigator from './AddOrderNavigator';
import DashboardNavigator from './detailsNavigation/DashboardNavigator';
import OrdersNavigator from './detailsNavigation/OrdersNavigator';
import CustomerNavigator from './detailsNavigation/CustomerNavigator';
// import AddOrderNavigator from "./AddOrderNavigator";

import Add from '../assets/svg/add.svg';
import Menu from '../assets/svg/menu.svg';


const Stack = createStackNavigator();

export default function AddCustomerNavigator({navigation}){
    return(
        <NavigationContainer independent={true}>
            <Stack.Navigator initialRouteName="Home" >
                <Stack.Screen 
                    name="TabNavigator" 
                    component={TabNavigator}
                    options={({navigation}) => ({
                        headerTitle: "Home",
                        headerRight: () => (
                          <Add onPress={() => navigation.navigate("AddOrderNavigator")}/>
                        ),
                        headerLeft: () => (
                          <Menu styles={{marginLeft: 40}}/>
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
                 <Stack.Screen name="DashboardNavigator" component={DashboardNavigator} />
                {/* <Stack.Screen name="CustomerDetails" component={CustomerDetails} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    );
}




// export default function AddCustomerNavigator(){
//     return(
//         <NavigationContainer independent={true}>
//             <Stack.Navigator initialRouteName="AddCustomer" screenOptions={{headerShown:false}}>
//                 <Stack.Screen name="AddCustomer" component={AddCustomer} />
//                 <Stack.Screen name="Customers" component={Customers} />
//                 {/* <Stack.Screen name="CustomerDetails" component={CustomerDetails} /> */}
//             </Stack.Navigator>
//         </NavigationContainer>
//     );
// }