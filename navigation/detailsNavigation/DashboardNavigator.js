import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import DashBoard from "../../screens/DashBoardScreen";
import DeliveryByDay from "../../screens/DeliveryByDayScreen";
import DeliveryByMonth from "../../screens/DeliveryByMonthScreen";

const Stack = createStackNavigator();

export default function DashboardNavigator(){
    return(
        <NavigationContainer independent={true}>
            <Stack.Navigator initialRouteName="DashBoard" >
                <Stack.Screen name="DashBoard" component={DashBoard} options={{headerShown:false}}/>
                <Stack.Screen name="DeliveryByDay" component={DeliveryByDay} 
                    options={{
                        title: 'TODAY',
                        headerStyle: {
                            backgroundColor: '#0062BD',
                        },
                        headerTintColor: '#fff',
                    }}
                />
                <Stack.Screen name="DeliveryByTomorrow" component={DeliveryByDay} 
                    options={{
                        title: 'TOMORROW',
                        headerStyle: {
                            backgroundColor: '#0062BD',
                        },
                        headerTintColor: '#fff',
                    }}
                />
                <Stack.Screen name="DeliveryByMonth" component={DeliveryByMonth} 
                    options={{
                        title: 'THIS MONTH',
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

// options={ {headerStyle:{backgroundColor: '#0062BD'}}}