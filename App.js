import { StyleSheet, Text, View } from "react-native";
import SignIn from "./screens/signIn";
import SignUp from "./screens/signUp";
import OtpVerify from "./screens/otpVerify";
import AppLoading from "expo-app-loading";
import { useFonts, Pacifico_400Regular } from "@expo-google-fonts/pacifico";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import {
  NotoSans_400Regular,
  NotoSans_700Bold,
} from "@expo-google-fonts/noto-sans";

// import Navigator from './route/navigator';

// const getFonts = () => {
//   return Font.loadAsync({
//     'pacifico-regular': require('./assets/fonts/Pacifico-Regular.ttf')
//   });
// }

const Stack = createStackNavigator();


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}


function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}


export default function App() {
  let [fontsLoaded, error] = useFonts({
    NotoSans_400Regular,
    NotoSans_700Bold,
    Pacifico_400Regular,

    "Pacifico-Regular": require("./assets/fonts/Pacifico-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="SignIn">
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="OTP VERIFICATION" component={OtpVerify} />
          </Stack.Navigator>
        </NavigationContainer>
        {/* <SignIn /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
});

{
  /* <SignIn /> */
}
{
  /* <SignUp /> */
}
{
  /* {otp verification} */
}
{
  /* <OtpVerify /> */
}
{
  /* <Navigator /> */
}
