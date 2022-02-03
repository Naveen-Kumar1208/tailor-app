import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Orders from "../../screens/ordersScreen";
import OrderDetails from "../../screens/orderDetailsScreen";
import OrderCompleted from "../../screens/orderCompletedScreen";
// import CompletedDetails from "../../screens/customerDetailsScreen";

const Stack = createStackNavigator();

export default function DashboardNavigator(){
    return(
        <NavigationContainer independent={true}>
            <Stack.Navigator initialRouteName="Orders" screenOptions={{headerShown:false}}>
                
                <Stack.Screen name="Orders" component={Orders} />
                <Stack.Screen name="Waiting" component={OrderDetails} />
                <Stack.Screen name="Stitching" component={OrderDetails} />
                <Stack.Screen name="Delayed" component={OrderDetails} />
                <Stack.Screen name="Completed" component={OrderCompleted} />
                {/* <Stack.Screen name="CompletedOn" component={CompletedDetails} /> */}
                <Stack.Screen name="Cancelled" component={OrderDetails} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}