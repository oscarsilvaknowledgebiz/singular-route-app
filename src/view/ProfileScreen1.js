import React, { useEffect, useState } from 'react';
import { SafeAreaView, StatusBar, Appearance, useColorScheme, Platform, KeyboardAvoidingView, View, Text } from 'react-native';
import style from '../../style/Style';
import styleDark from '../../style/StyleDark';
import * as NavigationBar from 'expo-navigation-bar';
import * as SplashScreen from 'expo-splash-screen';
import Loader from '../components/Loader';
import InputDefault from '../components/InputDefault';
import RadioButtonSelectableButton from '../components/RadioButtonSelectableButton';
import ButtonPrimary from '../components/ButtonPrimary';

export default function ProfileScreen1({ route, navigation }) {
  const [isLoading, setIsLoading] = useState(true);
  const [homeadress, setHomeadress] = useState('');
  const [nationality, setNationality] = useState('');
  const [birthday, setBirthday] = useState('');
  const [selectedButton, setSelectedButton] = useState(null);

  let colorScheme = useColorScheme();
  var styleSelected = colorScheme == 'light' ? style : styleDark;
  var colors = require('../../style/Colors.json');

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

  useEffect(() => {
    console.log('OPEN', ProfileScreen1.name, 'SCREEN');
    // For test loading
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => {
      console.log('SCREEN', ProfileScreen1.name, 'CLOSE');
    };
  }, []);

  Appearance.getColorScheme();
  Appearance.addChangeListener(({ colorScheme }) => {
    console.log('COLOR THEME WAS ALTER');
    console.log(colorScheme);
    if (Platform.OS === 'android')
      NavigationBar.setBackgroundColorAsync(colorScheme === 'light' ? colors.Base_Slot_1 : colors.Base_Slot_1);
  });

  const onLayoutRootView = () => {
    if (isLoading) {
    }
  };

  const handleSignIn = () => {
    if (selectedButton) {
      // Only navigate to the next page if a button is selected
      navigation.navigate('ProfileScreen2');
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <SafeAreaView style={[styleSelected.backgroundPrimary, { flex: 1 }]} onLayout={onLayoutRootView}>
      <StatusBar translucent={true} backgroundColor={'transparent'} barStyle={colorScheme === 'light' ? 'dark-content' : 'light-content'} />
      <KeyboardAvoidingView
        style={{ flex: 1, marginBottom: 10 }}
        enabled={true}
        behavior={Platform.OS == 'android' ? 'height' : 'padding'}
        keyboardVerticalOffset={Platform.OS == 'android' ? -150 : -150}
      >
        <View style={{ backgroundColor: colors.BaseSlot3, flex: 1 }}>
          <Text style={[styleSelected.textNormal20, {marginLeft: 20}]}>Tell us a little bit about yourself</Text>
          <View style={{ flex: 0.4, justifyContent: "space-evenly", marginTop: 30 }}>
            <InputDefault placeholder={"Lisboa, Portugal"} input={homeadress} setInput={setHomeadress} />
            <InputDefault placeholder={"Nationality"} input={nationality} setInput={setNationality} />
            <InputDefault placeholder={"Birth Day"} input={birthday} setInput={setBirthday} keyboardType="numeric" />
            <Text style={[styleSelected.textNormal16, { marginLeft: 20, marginTop: 40 }]}>Gender</Text>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginTop: 20 }}>
              <RadioButtonSelectableButton
                label="Male"
                onPress={() => handleButtonPress("Male")}
                selected={selectedButton === "Male"}
              />
              <RadioButtonSelectableButton
                label="Female"
                onPress={() => handleButtonPress("Female")}
                selected={selectedButton === "Female"}
              />
              <RadioButtonSelectableButton
                label="Other"
                onPress={() => handleButtonPress("Other")}
                selected={selectedButton === "Other"}
              />
            </View>
          </View>
          <View style={{ padding: 35, top: 320 }}>
            <ButtonPrimary
              title={"Next"}
              colorText={colors.BaseSlot3}
              event={handleSignIn}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
