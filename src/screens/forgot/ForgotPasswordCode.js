import React, { useEffect, useRef, useState, useCallback } from 'react'
import { SafeAreaView, StatusBar, Appearance, useColorScheme, Platform, KeyboardAvoidingView, View, Text, TextInput } from 'react-native'
import style from '../../../style/Style'
import styleDark from '../../../style/StyleDark'
import * as NavigationBar from 'expo-navigation-bar'

import Loader from '../../components/loader/Loader'
import ButtonPrimary from '../../components/buttons/ButtonPrimary'



export default function ForgotPasswordCode({ route, navigation }) {
    const [isLoading, setIsLoading] = useState(true)
    let colorScheme = useColorScheme()
    var styleSelected = colorScheme == 'light' ? style : styleDark
    var colors = require('../../../style/Colors.json')
    const [otp, setOtp] = useState('');

    const handleOtpChange = (value) => {
        setOtp(value);
      };

    useEffect(() => {
        console.log('OPEN', ForgotPasswordCode.name, 'SCREEN')
        //For test loading
        setTimeout(() => {
            setIsLoading(false)
        }, 1000);
        return () => {
            console.log('SCREEN', ForgotPasswordCode.name, 'CLOSE')
        }
    }, [])
    Appearance.getColorScheme()
    Appearance.addChangeListener(({ colorScheme }) => {
        console.log('COLOR THEME WAS ALTER')
        console.log(colorScheme)
        if (Platform.OS === 'android')
            NavigationBar.setBackgroundColorAsync(colorScheme === 'light' ? colors.Base_Slot_1 : colors.Base_Slot_1)
    })
    const onLayoutRootView = useCallback(async () => {
        if (isLoading) {
        }
    }, [isLoading]);
    if (isLoading) {
        return (
            <Loader />
        );
    }

    return (
        <SafeAreaView style={{backgroundColor: colors.BaseSlot3, flex: 1}} onLayout={onLayoutRootView}>
            <StatusBar translucent={true} backgroundColor={'transparent'} barStyle={colorScheme === 'light' ? 'dark-content' : 'light-content'} />
            <KeyboardAvoidingView
                style={{ flex: 1, marginBottom: 10 }}
                enabled={true}
                behavior={Platform.OS == 'android' ? 'height' : 'padding'}
                keyboardVerticalOffset={Platform.OS == 'android' ? -150 : -150}
            >
                <View style={{backgroundColor: colors.BaseSlot3, flex: .2}}>
                    <Text style={[styleSelected.textNormal20, {textAlign: 'center'}]}>Forgot Password</Text>
                </View>
                <View style={{ height: 90}}>
                    <Text style={[styleSelected.textNormal14, {padding: 15}]}>We have sent you a verification code, please insert it below so we can recover your account.</Text>
                </View>
                <View style={{ flex: 0.6, justifyContent: 'center', alignItems: 'center'}}>
        <View style={{ flexDirection: 'row', backgroundColor: colors.BaseSlot3 }}>
        <TextInput
            style={{ borderWidth: 1, borderColor: 'gray', padding: 10, marginRight: 10 }}
            keyboardType="numeric"
            maxLength={1}
            value={otp[0]}
            onChangeText={(value) => handleOtpChange(value + otp.slice(1))}
          />
          <TextInput
            style={{ borderWidth: 1, borderColor: 'gray', padding: 10, marginRight: 10 }}
            keyboardType="numeric"
            maxLength={1}
            value={otp[1]}
            onChangeText={(value) => handleOtpChange(otp.slice(0, 1) + value + otp.slice(2))}
          />
          <TextInput
            style={{ borderWidth: 1, borderColor: 'gray', padding: 10, marginRight: 10 }}
            keyboardType="numeric"
            maxLength={1}
            value={otp[2]}
            onChangeText={(value) => handleOtpChange(otp.slice(0, 2) + value + otp.slice(3))}
          />
          <TextInput
            style={{ borderWidth: 1, borderColor: 'gray', padding: 10, marginRight: 10 }}
            keyboardType="numeric"
            maxLength={1}
            value={otp[3]}
            onChangeText={(value) => handleOtpChange(otp.slice(0, 3) + value + otp.slice(4))}
          />
          <TextInput
            style={{ borderWidth: 1, borderColor: 'gray', padding: 10, marginRight: 10 }}
            keyboardType="numeric"
            maxLength={1}
            value={otp[4]}
            onChangeText={(value) => handleOtpChange(otp.slice(0, 4) + value + otp.slice(5))}
          />
          <TextInput
            style={{ borderWidth: 1, borderColor: 'gray', padding: 10 }}
            keyboardType="numeric"
            maxLength={1}
            value={otp[5]}
            onChangeText={(value) => handleOtpChange(otp.slice(0, 5) + value)}
          />
        </View>

      </View>
      <View style={{padding: 10, marginTop: 'auto'}}>
                <ButtonPrimary 
                title={"Verify"} 
                colorText={colors.BaseSlot3}
                event={() => { navigation.navigate("ForgotPasswordNewPassword")}}
                />
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}