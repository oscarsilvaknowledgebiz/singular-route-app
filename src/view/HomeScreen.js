import React, { useEffect, useRef, useState, useCallback } from 'react';
import { SafeAreaView, StatusBar, Appearance, useColorScheme, Platform, KeyboardAvoidingView, View, Text, Image, TouchableOpacity } from 'react-native';
import style from '../../style/Style';
import styleDark from '../../style/StyleDark';
import * as NavigationBar from 'expo-navigation-bar';
import * as SplashScreen from 'expo-splash-screen';
import Loader from '../components/Loader';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ScrollView } from 'react-native-gesture-handler';
import EventCard from '../components/EventCard';
import SelectableButton from '../components/SelectableButton';
import PopularEvent from '../components/PopularEvent';

export default function HomeScreen({ route, navigation }) {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedButton, setSelectedButton] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  let colorScheme = useColorScheme();
  var styleSelected = colorScheme == 'light' ? style : styleDark;
  var colors = require('../../style/Colors.json');
  const Tab = createBottomTabNavigator();

  useEffect(() => {
    console.log('OPEN', HomeScreen.name, 'SCREEN');
    //For test loading
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => {
      console.log('SCREEN', HomeScreen.name, 'CLOSE');
    };
  }, []);
  Appearance.getColorScheme();
  Appearance.addChangeListener(({ colorScheme }) => {
    console.log('COLOR THEME WAS ALTER');
    console.log(colorScheme);
    if (Platform.OS === 'android') NavigationBar.setBackgroundColorAsync(colorScheme === 'light' ? colors.Base_Slot_1 : colors.Base_Slot_1);
  });

  const onLayoutRootView = useCallback(async () => {
    if (isLoading) {
    }
  }, [isLoading]);
  if (isLoading) {
    return (
      <Loader />
    );
  }

  const places = [
    {
      id: 1,
      label: 'Lisbon',
      category: 'Lisbon',
    },
    {
      id: 2,
      label: 'Porto',
      category: 'Por',
    },
  ];

  function HomeScreenMenu() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image
          source={require('../../assets/images/home.png')}
          placeholder="image"
          contentFit="cover"
          transition={1000}
        />
        <Text>Home</Text>
      </View>
    );
  }

  function SearchScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image
          source={require('../../assets/images/search.png')}
          placeholder="image"
          contentFit="cover"
          transition={1000}
        />
        <Text>Search</Text>
      </View>
    );
  }

  function TicketScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image
          source={require('../../assets/images/ticket.png')}
          placeholder="image"
          contentFit="cover"
          transition={1000}
        />
        <Text>Home</Text>
      </View>
    );
  }

  function HeartScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image
          source={require('../../assets/images/heart_menu.png')}
          placeholder="image"
          contentFit="cover"
          transition={1000}
        />
        <Text>Home</Text>
      </View>
    );
  }

  function ProfileScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image
          source={require('../../assets/images/user.png')}
          placeholder="image"
          contentFit="cover"
          transition={1000}
        />
        <Text>Home</Text>
      </View>
    );
  }

  const handleButtonPress = (label) => {
    if (selectedButton === label) {
      setSelectedButton(null);
      console.log(`${label} has been deselected`);
    } else {
      console.log(`${selectedButton} has been deselected`);
      setSelectedButton(label);
      console.log(`${label} has been selected`);
    }
  };

  const handleResetButtonPress = () => {
    setSelectedButton(null);
    setIsDropdownOpen(false);
  };

  const handleDropdownPress = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDropdownOptionPress = (option) => {
    console.log(`Selected option: ${option}`);
    setSelectedButton(option);
    setIsDropdownOpen(false);
  };

  return (
    <ScrollView>
      <SafeAreaView style={[styleSelected.backgroundPrimary, { flex: 1 }]} onLayout={onLayoutRootView}>
        <StatusBar
          translucent={true}
          backgroundColor={'transparent'}
          barStyle={colorScheme === 'light' ? 'dark-content' : 'light-content'}
        />
        <KeyboardAvoidingView
          style={{ flex: 1, marginBottom: 10 }}
          enabled={true}
          behavior={Platform.OS == 'android' ? 'height' : 'padding'}
          keyboardVerticalOffset={Platform.OS == 'android' ? -150 : -150}
        >
          <View style={{ flex: 1, backgroundColor: colors.BaseSlot3 }}>
            <View style={{ backgroundColor: colors.BaseSlot3, marginLeft: 20 }}>
              <Text style={[styleSelected.textNormal12, { color: '#7C7C7C' }]}>Find events in</Text>
              <TouchableOpacity
  style={{
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 40, // Adjust the height as needed
  }}
  onPress={handleDropdownPress}
>
  <Image
    style={[styleSelected.map_pin, { marginTop: 7 }]}
    source={require('../../assets/images/map_pin.png')}
    placeholder="image"
    contentFit="cover"
    transition={1000}
  />
  <Text style={[styleSelected.textNormal18, { color: '#262627', marginLeft: 5 }]}>
    {selectedButton || 'Lisboa'}
  </Text>
  <Image
    style={[styleSelected.down_button, { marginLeft: 10, marginTop: 7 }]}
    source={require('../../assets/images/down_button.png')}
    placeholder="image"
    contentFit="cover"
    transition={1000}
  />
</TouchableOpacity>


{isDropdownOpen && (
  <View
    style={{
      position: 'absolute',
      top: 70,
      left: 20,
      right: 20,
      zIndex: 99999,
      height: 200,
      width: 200,
      backgroundColor: 'white',
      borderRadius: 5,
      elevation: 3, // Add elevation to ensure the dropdown is displayed above other elements
    }}
  >
    {places.map((place) => (
      <TouchableOpacity
        key={place.id}
        style={{ padding: 10 }}
        onPress={() => handleDropdownOptionPress(place.label)}
      >
        <Text>{place.label}</Text>
      </TouchableOpacity>
    ))}
  </View>
)}
       
            </View>

            <View style={{ backgroundColor: '#FFFFFF', marginTop: 20, marginLeft: 10, borderRadius: 5, zIndex: 1, opacity: 50 }}>
  <PopularEvent styleSelected={styleSelected} />
</View>


            <ScrollView style={{ marginLeft: 20, marginTop: 0, zIndex: -5 }}>
              <View style={{ marginLeft: -20, marginBottom: 20, height: '100%' }}>
                <EventCard selectedButton={selectedButton} />
              </View>
            </ScrollView>

            <View style={{ flexDirection: 'row', marginTop: 2 }}>
              <Tab.Navigator>
                <Tab.Screen
                  name="Home"
                  component={HomeScreenMenu}
                  options={{
                    tabBarIcon: ({ focused }) => {
                      return (
                        <Image
                          style={{ height: 30, width: 30 }}
                          source={require('../../assets/images/home.png')}
                          placeholder="image"
                          contentFit="cover"
                          transition={1000}
                        />
                      );
                    },
                  }}
                />
                <Tab.Screen
                  name="Search"
                  component={SearchScreen}
                  options={{
                    tabBarIcon: ({ focused }) => {
                      return (
                        <Image
                          style={{ height: 30, width: 30 }}
                          source={require('../../assets/images/search.png')}
                          placeholder="image"
                          contentFit="cover"
                          transition={1000}
                        />
                      );
                    },
                  }}
                />
                <Tab.Screen
                  name="Ticket"
                  component={TicketScreen}
                  options={{
                    tabBarIcon: ({ focused }) => {
                      return (
                        <Image
                          style={{ height: 30, width: 30 }}
                          source={require('../../assets/images/ticket.png')}
                          placeholder="image"
                          contentFit="cover"
                          transition={1000}
                        />
                      );
                    },
                  }}
                />
                <Tab.Screen
                  name="Heart"
                  component={HeartScreen}
                  options={{
                    tabBarIcon: ({ focused }) => {
                      return (
                        <Image
                          style={{ height: 30, width: 30 }}
                          source={require('../../assets/images/heart_menu.png')}
                          placeholder="image"
                          contentFit="cover"
                          transition={1000}
                        />
                      );
                    },
                  }}
                />

                <Tab.Screen
                  name="Profile"
                  component={ProfileScreen}
                  options={{
                    tabBarIcon: ({ focused }) => {
                      return (
                        <Image
                          style={{ height: 30, width: 30 }}
                          source={require('../../assets/images/user.png')}
                          placeholder="image"
                          contentFit="cover"
                          transition={1000}
                        />
                      );
                    },
                  }}
                />
              </Tab.Navigator>
            </View>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ScrollView>
  );
}
