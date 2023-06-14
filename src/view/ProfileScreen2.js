import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  Appearance,
  useColorScheme,
  Platform,
  KeyboardAvoidingView,
  View,
  Text,
  ScrollView,
} from 'react-native';
import style from '../../style/Style';
import styleDark from '../../style/StyleDark';
import * as NavigationBar from 'expo-navigation-bar';
import * as SplashScreen from 'expo-splash-screen';
import Loader from '../components/Loader';
import InputDefault from '../components/InputDefault';
import SelectableButton from '../components/SelectableButton';
import ButtonPrimary from '../components/ButtonPrimary';
import Line from '../components/Line';

export default function ProfileScreen2({ route, navigation }) {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedButton, setSelectedButton] = useState(null);

  let colorScheme = useColorScheme();
  var styleSelected = colorScheme == 'light' ? style : styleDark;
  var colors = require('../../style/Colors.json');

  const handleButtonPress = (label) => {
    if (selectedButton === label) {
      // If the same button is pressed again, deselect it
      setSelectedButton(null);
    } else {
      setSelectedButton(label);
    }
  };

  useEffect(() => {
    console.log('OPEN', ProfileScreen2.name, 'SCREEN');
    // For test loading
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => {
      console.log('SCREEN', ProfileScreen2.name, 'CLOSE');
    };
  }, []);

  Appearance.getColorScheme();
  Appearance.addChangeListener(({ colorScheme }) => {
    console.log('COLOR THEME WAS ALTER');
    console.log(colorScheme);
    if (Platform.OS === 'android')
      NavigationBar.setBackgroundColorAsync(
        colorScheme === 'light' ? colors.Base_Slot_1 : colors.Base_Slot_1
      );
  });

  const onLayoutRootView = () => {
    if (isLoading) {
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
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
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={{ flex: 1 }}>
            <View style={{ backgroundColor: colors.BaseSlot3, flex: 1 }}>
              <Text style={[styleSelected.textNormal20, { marginLeft: 20 }]}>Tell us a little bit about yourself</Text>
              <View style={{ flex: 0.4, justifyContent: 'space-evenly' }}>
                <Text style={[styleSelected.textNormal16, { marginLeft: 20 }]}>What do you like?</Text>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 20 }}>
                  <SelectableButton
                    label="Concerts"
                    onPress={() => handleButtonPress()}
                    selected={selectedButton === 'Concerts'}
                  />
                  <SelectableButton
                    label="Monuments"
                    onPress={() => handleButtonPress()}
                    selected={selectedButton === 'Monuments'}
                  />
                  <SelectableButton
                    label="Parks"
                    onPress={() => handleButtonPress()}
                    selected={selectedButton === 'Parks'}
                  />
                  <SelectableButton
                    label="Museums"
                    onPress={() => handleButtonPress()}
                    selected={selectedButton === 'Museums'}
                  />
                  <SelectableButton
                    label="Festivals"
                    onPress={() => handleButtonPress()}
                    selected={selectedButton === 'Festivals'}
                  />
                </View>
                <View>
                  <Line />
                </View>
              </View>
              <View style={{ flex: 0.4, justifyContent: 'space-evenly' }}>
                <Text style={[styleSelected.textNormal16, { marginLeft: 20 }]}>Conditions</Text>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 20 }}>
                  <SelectableButton
                    label="Pet-Friendly"
                    onPress={() => handleButtonPress()}
                    selected={selectedButton === 'Pet-Friendly'}
                  />
                  <SelectableButton
                    label="Children"
                    onPress={() => handleButtonPress()}
                    selected={selectedButton === 'Children'}
                  />
                  <SelectableButton
                    label="Elderly"
                    onPress={() => handleButtonPress()}
                    selected={selectedButton === 'Elderly'}
                  />
                  <SelectableButton
                    label="Facilities"
                    onPress={() => handleButtonPress()}
                    selected={selectedButton === 'Facilities'}
                  />
                  <SelectableButton
                    label="Smokers"
                    onPress={() => handleButtonPress()}
                    selected={selectedButton === 'Smokers'}
                  />
                  <SelectableButton
                    label="Vegan"
                    onPress={() => handleButtonPress()}
                    selected={selectedButton === 'Vegan'}
                  />
                </View>
                <View>
                  <Line />
                </View>
              </View>
              <View style={{ flex: 0.4, justifyContent: 'space-evenly' }}>
                <Text style={[styleSelected.textNormal16, { marginLeft: 20 }]}>Conditions</Text>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 20 }}>
                  <SelectableButton
                    label="Pet-Friendly"
                    onPress={() => handleButtonPress()}
                    selected={selectedButton === 'Pet-Friendly'}
                  />
                  <SelectableButton
                    label="Children"
                    onPress={() => handleButtonPress()}
                    selected={selectedButton === 'Children'}
                  />
                  <SelectableButton
                    label="Elderly"
                    onPress={() => handleButtonPress()}
                    selected={selectedButton === 'Elderly'}
                  />
                  <SelectableButton
                    label="Facilities"
                    onPress={() => handleButtonPress()}
                    selected={selectedButton === 'Facilities'}
                  />
                  <SelectableButton
                    label="Smokers"
                    onPress={() => handleButtonPress()}
                    selected={selectedButton === 'Smokers'}
                  />
                  <SelectableButton
                    label="Vegan"
                    onPress={() => handleButtonPress()}
                    selected={selectedButton === 'Vegan'}
                  />
                </View>
              </View>
              <View style={{ padding: 30}}>
                <ButtonPrimary
                  title={'Next'}
                  colorText={colors.BaseSlot3}
                  event={() => navigation.navigate('ProfileScreen3')}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
