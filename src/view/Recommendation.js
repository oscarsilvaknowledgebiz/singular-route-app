import React, { useEffect, useState, useCallback } from 'react';
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
import Loader from '../components/Loader';
import EventCard from '../components/EventCard'

export default function Recommendation({ route, navigation }) {
  const [isLoading, setIsLoading] = useState(true);
  const [colorScheme, setColorScheme] = useState(Appearance.getColorScheme());

  var styleSelected = colorScheme === 'light' ? style : styleDark;
  var colors = require('../../style/Colors.json');

  useEffect(() => {
    console.log('OPEN', Recommendation.name, 'SCREEN');

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      console.log('SCREEN', Recommendation.name, 'CLOSE');
    };
  }, []);

  useEffect(() => {
    const listener = ({ colorScheme }) => {
      console.log('COLOR THEME WAS ALTER');
      console.log(colorScheme);

      if (Platform.OS === 'android') {
        NavigationBar.setBackgroundColorAsync(
          colorScheme === 'light' ? colors.Base_Slot_1 : colors.Base_Slot_1
        );
      }

      setColorScheme(colorScheme);
    };

    Appearance.addChangeListener(listener);

    return () => {
      Appearance.removeChangeListener(listener);
    };
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (isLoading) {
      // Do something when the layout of the root view is changed
    }
  }, [isLoading]);

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
        <View style={[styleSelected.backgroundPrimary, { flex: 1 }]}>
          <Text style={[styleSelected.textNormal20, { textAlign: 'center' }]}>Recommendation</Text>
          <Text style={[styleSelected.textNormal12, { marginTop: 35 }]}>
            Based on your reviews of your latest visits, you might like:
          </Text>
        </View>
      
          <ScrollView style={{ marginLeft: 20, marginTop: 0, zIndex: -5 }}>
            <View style={{ marginLeft: -20, marginBottom: 20, height: '100%' }}>
                <EventCard />
            </View>
          </ScrollView>
   
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
