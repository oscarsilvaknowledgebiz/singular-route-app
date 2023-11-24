import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Splashscreen from "../screens/splashscreen/splashScreen";
import Welcome from "../screens/welcome/welcomeScreen";
import Planyouscreen from "../screens/planyou/planyouScreen";
import AboutyouScreenOne from "../screens/aboutyou/aboutyouScreenOne";
import AboutyouScreenTwo from "../screens/aboutyou/aboutyouScreenTwo";
import AboutyouScreenThree from "../screens/aboutyou/aboutyouScreenThree";


const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    initialRouteName="Splashscreen"
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="Splashscreen" component={Splashscreen} />
    <Stack.Screen name="Welcome" component={Welcome} />
    <Stack.Screen name="Planyou" component={Planyouscreen} />
    <Stack.Screen name="AboutOne" component={AboutyouScreenOne} />
    <Stack.Screen name="AboutTwo" component={AboutyouScreenTwo} />
    <Stack.Screen name="AboutThree" component={AboutyouScreenThree} />

   
  </Stack.Navigator>

)