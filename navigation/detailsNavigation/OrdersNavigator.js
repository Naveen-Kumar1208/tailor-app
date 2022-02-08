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
            <Stack.Navigator initialRouteName="Orders">
                
                <Stack.Screen name="Orders" component={Orders} options={{headerShown:false}}/>
                <Stack.Screen name="Waiting" component={OrderDetails} 
                    options={{
                        title: 'WAITING',
                        headerStyle: {
                            backgroundColor: '#0062BD',
                        },
                        headerTintColor: '#fff',
                    }}
                />
                <Stack.Screen name="Stitching" component={OrderDetails} 
                    options={{
                        title: 'STITCHING',
                        headerStyle: {
                            backgroundColor: '#0062BD',
                        },
                        headerTintColor: '#fff',
                    }}
                />
                <Stack.Screen name="Delayed" component={OrderDetails} 
                    options={{
                        title: 'DELAYED',
                        headerStyle: {
                            backgroundColor: '#0062BD',
                        },
                        headerTintColor: '#fff',
                    }}
                />
                <Stack.Screen name="Completed" component={OrderCompleted} 
                    options={{
                        title: 'COMPLETED',
                        headerStyle: {
                            backgroundColor: '#0062BD',
                        },
                        headerTintColor: '#fff',
                    }}
                />
                {/* <Stack.Screen name="CompletedOn" component={CompletedDetails} /> */}
                <Stack.Screen name="Cancelled" component={OrderDetails} 
                    options={{
                        title: 'CANCELLED',
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