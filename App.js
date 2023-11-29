import React from 'react';
import { Image, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';;
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './src/view/WelcomeScreen';
import Register from './src/view/Register';
import Login from './src/view/Login';
import ForgotPasswordEmail from './src/view/ForgotPasswordEmail';
import ForgotPasswordCode from './src/view/ForgotPasswordCode';
import ForgotPasswordNewPassword from './src/view/ForgotPasswordNewPassword';
import EventDetails from './src/view/EventDetails';
import FirstSteps from './src/view/FirstSteps';
import UserScreen from './src/view/user/UserScreen';
import CustomHeaderLeft from './src/components/CustomHeaderLeft';
import Toast from 'react-native-toast-message';
import FavoritesScreen from './src/view/favorites/FavoritesScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='UserScreen' screenOptions={{ headerShown: false }}>
          <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
          <Stack.Screen name="Register" component={Register} options={({navigation, route}) => ({
            headerShown: true,
            headerLeft: () => <CustomHeaderLeft navigation={navigation} />,
            headerTitle: ""
          })} />
          <Stack.Screen name="Login" component={Login} options={({navigation, route}) => ({
            headerShown: true,
            headerLeft: () => <CustomHeaderLeft navigation={navigation} />,
            headerTitle: ""
          })} />
          <Stack.Screen name="ForgotPasswordEmail" component={ForgotPasswordEmail} options={({navigation, route}) => ({
            headerShown: true,
            headerLeft: () => <CustomHeaderLeft navigation={navigation} />,
            headerTitle: ""
          })} />
          <Stack.Screen name="ForgotPasswordCode" component={ForgotPasswordCode} options={({navigation, route}) => ({
            headerShown: true,
            headerLeft: () => <CustomHeaderLeft navigation={navigation} />,
            headerTitle: ""
          })} />
          <Stack.Screen name="ForgotPasswordNewPassword" component={ForgotPasswordNewPassword} options={({navigation, route}) => ({
            headerShown: true,
            headerLeft: () => <CustomHeaderLeft navigation={navigation} />,
            headerTitle: ""
          })} />
          <Stack.Screen name="EventDetails" component={EventDetails} options={({navigation, route}) => ({
            headerShown: true,
            headerLeft: () => <CustomHeaderLeft navigation={navigation} />,
            headerTitle: ""
          })} />
          <Stack.Screen name="UserScreen" component={UserScreen} />
          <Stack.Screen name="FavoritesScreen" component={FavoritesScreen} />
          <Stack.Screen name="FirstSteps" component={FirstSteps} />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast />
    </>
  );
}
