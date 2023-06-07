import React, { useEffect, useState } from 'react';
import { SafeAreaView, StatusBar, Appearance, useColorScheme, Platform, KeyboardAvoidingView, View, Text, Modal, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import style from '../../style/Style';
import styleDark from '../../style/StyleDark';
import * as NavigationBar from 'expo-navigation-bar';
import * as SplashScreen from 'expo-splash-screen';
import Loader from '../components/Loader';
import ButtonPrimary from '../components/ButtonPrimary';
import ButtonTrip from '../components/ButtonTrip';

export default function PlanYourTrip({ route, navigation }) {
  const [isLoading, setIsLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const colorScheme = useColorScheme();
  const styleSelected = colorScheme === 'light' ? style : styleDark;
  const colors = require('../../style/Colors.json');

  useEffect(() => {
    console.log('OPEN', PlanYourTrip.name, 'SCREEN');
    //For test loading
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => {
      console.log('SCREEN', PlanYourTrip.name, 'CLOSE');
    };
  }, []);

  const handlePopupOpen = () => {
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  const handleOutsidePress = () => {
    handlePopupClose();
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <SafeAreaView style={[styleSelected.backgroundPrimary, { flex: 1 }]}>
      <StatusBar translucent={true} backgroundColor={'transparent'} barStyle={colorScheme === 'light' ? 'dark-content' : 'light-content'} />
      <KeyboardAvoidingView
        style={{ flex: 1, marginBottom: 10 }}
        enabled={true}
        behavior={Platform.OS === 'android' ? 'height' : 'padding'}
        keyboardVerticalOffset={Platform.OS === 'android' ? -150 : -150}
      >
        <View style={{ backgroundColor: colors.BaseSlot3, flex: 1 }}>
          <Text style={[styleSelected.textNormal20, { textAlign: 'center' }]}>Plan your Trip</Text>
          <Text style={[styleSelected.textNormal12, { textAlign: 'center', color: 'red', top: 10 }]}>Route planning</Text>
          <View style={{ flex: 0.2, top: 90 }}>
            <Text style={[styleSelected.textNormal16, { textAlign: 'center' }]}>Do you want to plan your own route?</Text>
            <Text style={[styleSelected.textNormal16, { textAlign: 'center' }]}>or</Text>
            <Text style={[styleSelected.textNormal16, { textAlign: 'center' }]}>Do you wish to be surprised?</Text>
          </View>
          <View style={{ flex: 0.5, justifyContent: "space-evenly" }}>
            <View style={{ height: "60%", justifyContent: "space-evenly", width: "90%", alignSelf: "center" }}>
              <ButtonPrimary
                title={"My Plan"}
                colorText={colors.BaseSlot3}
                event={handlePopupOpen}
              />
              <ButtonTrip
                title={"Suprise me!"}
                colorText={colors.BaseSlot3}
                event={() => console.log("GO TO MAIN MENU")}
              />
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>

      <Modal visible={showPopup} animationType="slide" transparent={true} onRequestClose={handlePopupClose}>
        <TouchableWithoutFeedback onPress={handleOutsidePress}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, elevation: 5 }}>
              <Text style={[styleSelected.textNormal20, { textAlign: 'center' }]}>Do you confirm your profile preferences?</Text>
              <Text style={[styleSelected.textNormal20, { textAlign: 'center' }]}>or</Text>
              <Text style={[styleSelected.textNormal20, { textAlign: 'center' }]}>Do you have changes to do</Text>
              <View style={{ padding: 16, borderRadius: 8, marginTop: 16 }}>
                <ButtonPrimary
                  title={"Keep"}
                  colorText={colors.BaseSlot3}
                  event={() => console.log("GO TO RECOMMENDATIONS")}
                />
              </View>
              <TouchableOpacity onPress={() => console.log("GO TO TELL US ABOUT YOURSELF")}>
                <View style={{ padding: 16, borderRadius: 8, marginTop: -20 }}>
                  <ButtonTrip
                    title={"Change"}
                    colorText={colors.BaseSlot3}
                    event={() => console.log("GO TO MAIN MENU")}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </SafeAreaView>
  );
}
