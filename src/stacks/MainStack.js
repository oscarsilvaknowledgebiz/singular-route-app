import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Splashscreen from "../screens/splashscreen/splashScreen";
import Visited from "../screens/visitscreen/visitedScreen";
import { Text, View } from "react-native";
import HeaderComp from "../components/header/headerComp";


const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    initialRouteName="Splashscreen"
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="Splashscreen" component={Splashscreen} />
    <Stack.Screen name="VisitedPlace" component={Visited}
      options={{
        headerShown: true,
        header: () => {
          return (
            <View style={{height: 120}}>
                <HeaderComp title={"My Saved Routes"}/>
            </View>
          )
        }
      }}
    />


  </Stack.Navigator>

)