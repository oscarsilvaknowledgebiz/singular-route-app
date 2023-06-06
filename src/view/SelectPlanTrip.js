import React, { useEffect, useRef, useState, useCallback } from 'react';
import { SafeAreaView, StatusBar, Appearance, useColorScheme, Platform, KeyboardAvoidingView, View, Text, Image } from 'react-native';
import style from '../../style/Style';
import styleDark from '../../style/StyleDark';
import * as NavigationBar from 'expo-navigation-bar';
import * as SplashScreen from 'expo-splash-screen';
import Loader from '../components/Loader';
import ButtonPrimary from '../components/ButtonPrimary';
import ButtonTrip from '../components/ButtonTrip';

export default function SelectPlantTrip({ route, navigation }) {
  const [isLoading, setIsLoading] = useState(true);
  let colorScheme = useColorScheme();
  var styleSelected = colorScheme == 'light' ? style : styleDark;
  var colors = require('../../style/Colors.json');

  useEffect(() => {
    console.log('OPEN', SelectPlantTrip.name, 'SCREEN');
    // For test loading
setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => {
      console.log('SCREEN', SelectPlantTrip.name, 'CLOSE');
    };
  }, []);

  Appearance.getColorScheme();
  Appearance.addChangeListener(({ colorScheme }) => {
    console.log('COLOR THEME WAS ALTER');
    console.log(colorScheme);
    if (Platform.OS === 'android')
      NavigationBar.setBackgroundColorAsync(colorScheme === 'light' ? colors.Base_Slot_1 : colors.Base_Slot_1);
  });

  const onLayoutRootView = useCallback(async () => {
    if (isLoading) {
    }
  }, [isLoading]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <SafeAreaView style={[{ flex: 1, backgroundColor: colors.BaseSlot3 }]} onLayout={onLayoutRootView}>
      <StatusBar translucent={true} backgroundColor={'transparent'} barStyle={colorScheme === 'light' ? 'dark-content' : 'light-content'} />
      <KeyboardAvoidingView
        style={{ flex: 1, marginBottom: 10 }}
        enabled={true}
        behavior={Platform.OS == 'android' ? 'height' : 'padding'}
        keyboardVerticalOffset={Platform.OS == 'android' ? -150 : -150}
      >
        <View style={[styleSelected.backgroundPrimary, { flex: 1, backgroundColor:colors.BaseSlot3 }]}>
          <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1,  marginTop: 200 }}>
            <Image
              style={styleSelected.LocationImage}
              source={require('../../assets/images/LocationImage.png')}
              placeholder="image"
              contentFit="cover"
              transition={1000}
            />
            <View style={{ bottom: 60, alignItems: 'center' }}>
              <Text style={styleSelected.textNormal20}>Select Location</Text>
              <View style={{ top: 10, alignItems: 'center' }}>
                <Text style={styleSelected.textNormal16}>Let's find your next event.</Text>
                <Text style={styleSelected.textNormal16}>Stay in tune with</Text>
                <Text style={styleSelected.textNormal16}>what's happening in your area!</Text>
              </View>
            </View>
          </View>

          <View style={{ flex: 1, justifyContent: "space-evenly", marginTop: 9 }}>
            <View style={{ height: "60%", justifyContent: "space-evenly", width: "90%", alignSelf: "center" }}>
              <ButtonTrip
                title={"Plan Trip"}
                colorText={colors.BaseSlot3}
                event={() => console.log("GO TO WHERE YOU WANT TO GO")}
              />
              <ButtonPrimary
                title={"Whats happening"}
                colorText={colors.BaseSlot3}
                event={() => console.log("GO TO MAIN MENU")}
              />
            </View>
          </View>

        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
