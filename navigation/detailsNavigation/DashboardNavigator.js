import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import DashBoard from "../../screens/dashBoardScreen";
import DeliveryByDay from "../../screens/deliveryByDayScreen";
import DeliveryByMonth from "../../screens/deliveryByMonthScreen";

const Stack = createStackNavigator();

export default function DashboardNavigator(){
    return(
        <NavigationContainer independent={true}>
            <Stack.Navigator initialRouteName="DashBoard" screenOptions={{headerShown:false}}>
                <Stack.Screen name="DashBoard" component={DashBoard} />
                <Stack.Screen name="DeliveryByDay" component={DeliveryByDay} />
                <Stack.Screen name="DeliveryByMonth" component={DeliveryByMonth} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}