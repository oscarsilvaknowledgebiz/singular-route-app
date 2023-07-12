import React, { useEffect, useRef, useState, useCallback } from 'react'
import { SafeAreaView, StatusBar, Appearance, useColorScheme, Platform, KeyboardAvoidingView, View, Text } from 'react-native'
import style from '../../../style/Style'
import styleDark from '../../../style/StyleDark'
import * as NavigationBar from 'expo-navigation-bar'

import InputDefault from '../../components/inputs/InputDefault';
import Loader from '../../components/loader/Loader'
import ButtonPrimary from '../../components/buttons/ButtonPrimary'


export default function ForgotPasswordEmail({ route, navigation }) {
    const [isLoading, setIsLoading] = useState(true)
    const [email, setEmail] = useState("")
    let colorScheme = useColorScheme()
    var styleSelected = colorScheme == 'light' ? style : styleDark
    var colors = require('../../../style/Colors.json')

    useEffect(() => {
        console.log('OPEN', ForgotPasswordEmail.name, 'SCREEN')
        //For test loading
        setTimeout(() => {
            setIsLoading(false)
        }, 1000);
        return () => {
            console.log('SCREEN', ForgotPasswordEmail.name, 'CLOSE')
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
                <View style={{backgroundColor: colors.BaseSlot3, flex: .4}}>
                    <Text style={[styleSelected.textNormal14, {padding: 20}]}>Forgot your password? No problem, just insert your email below and we’ll send you a verification code so you can create a new password.</Text>
                </View>
                <View style={{backgroundColor: colors.BaseSlot3, flex: 1}}>
                <InputDefault placeholder={"Email address"} input={email} setInput={setEmail} />
                </View>
                <View style={{padding: 10}}>
                <ButtonPrimary 
                title={"Next"} 
                colorText={colors.BaseSlot3}
                event={() => { navigation.navigate("ForgotPasswordCode")}}
                />
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}