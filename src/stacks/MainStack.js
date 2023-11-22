import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Splashscreen from "../screens/splashscreen/splashScreen";
import Welcome from "../screens/welcome/welcomeScreen";
import Planyouscreen from "../screens/planyou/planyouScreen";


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

   
  </Stack.Navigator>

)