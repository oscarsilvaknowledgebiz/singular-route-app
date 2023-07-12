import React, { useEffect, useRef, useState, useCallback } from 'react'
import { SafeAreaView, StatusBar, Appearance, useColorScheme, Platform, KeyboardAvoidingView, View, Text, TouchableOpacity, Image, Switch } from 'react-native'
import style from '../../../style/Style'
import styleDark from '../../../style/StyleDark'
import * as NavigationBar from 'expo-navigation-bar'

import Loader from '../../components/loader/Loader'
import InputDefault from '../../components/inputs/InputDefault'
import ButtonPrimary from '../../components/buttons/ButtonPrimary'

export default function Login({ route, navigation }) {
    const [isLoading, setIsLoading] = useState(true)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [remember, setRemember] = useState(true)
    let colorScheme = useColorScheme()
    var styleSelected = colorScheme == 'light' ? style : styleDark
    var colors = require('../../../style/Colors.json')

    useEffect(() => {
        console.log('OPEN', Login.name, 'SCREEN')
        //For test loading
        setTimeout(() => {
            setIsLoading(true)
        }, 1000);
        return () => {
            console.log('SCREEN', Login.name, 'CLOSE')
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
    if (!isLoading) {
        return (
            <Loader />
        );
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
                <View style={[{ flex: 1, backgroundColor: colors.BaseSlot3, marginTop: Platform.OS == "android" ? 0 : 0, marginLeft: 20, marginRight: 20 }]}>
                    <Text style={styleSelected.textNormal24}>Welcome back!</Text>
                    <View style={{ flex: .4, justifyContent: "space-evenly" }}>
                        <InputDefault placeholder={"Email address"} input={email} setInput={setEmail} />
                        <InputDefault placeholder={"Create password"} input={password} setInput={setPassword} />
                    </View>
                    <View style={{ flex: 1, justifyContent: "space-evenly" }}>
                        <View style={{ height: 70, justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
                            <Text>Remember me</Text>
                            <Switch
                                thumbColor={remember ? colors.BaseSlot1 : colors.BaseSlot3}
                                trackColor={{ true: "gray", false: "gray" }}
                                value={remember}
                                onValueChange={(value) => setRemember(value)} />
                        </View>
                        <Text style={styleSelected.textNormal24}>Or Sign in with</Text>
                        <View style={{ flexDirection: "row", height: 100, justifyContent: "space-evenly", alignItems: "center", width: "80%", alignSelf: "center" }}>
                            <TouchableOpacity onPress={() => { console.log("PRESS IN FACEBOOK") }}>
                                <Image source={require("../../../assets/images/ic_baseline-facebook.png")} style={{ height: 45, width: 45 }} resizeMode='contain' />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { console.log("PRESS IN APPLE") }}>
                                <Image source={require("../../../assets/images/ic_baseline-apple.png")} style={{ height: 45, width: 45 }} resizeMode='contain' />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { console.log("PRESS IN GOOGLE") }}>
                                <Image source={require("../../../assets/images/Vector.png")} style={{ height: 45, width: 45 }} resizeMode='contain' />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <ButtonPrimary title={"Sign in"} colorText={colors.BaseSlot3} />
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}