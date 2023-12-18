import React, { useEffect, useRef, useState, useCallback } from 'react'
import { SafeAreaView, StatusBar, Appearance, useColorScheme, Platform, KeyboardAvoidingView, View, Text, Image, Pressable } from 'react-native'
import style from '../../style/Style'
import styleDark from '../../style/StyleDark'
import * as NavigationBar from 'expo-navigation-bar'
import * as SplashScreen from 'expo-splash-screen';
import Loader from '../components/Loader'
import ButtonPrimary from '../components/ButtonPrimary'
import ButtonSecondary from '../components/ButtonSecondary'

export default function WelcomeScreen({ route, navigation }) {
    const [isLoading, setIsLoading] = useState(true)
    let colorScheme = useColorScheme()
    var styleSelected = colorScheme == 'light' ? style : styleDark
    var colors = require('../../style/Colors.json')

    useEffect(() => {
        console.log('OPEN', WelcomeScreen.name, 'SCREEN')
        //For test loading
        setTimeout(() => {
            setIsLoading(true)
        }, 1000);
        return () => {
            console.log('SCREEN', WelcomeScreen.name, 'CLOSE')
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
    const handleSignClick = async () => {
        navigation.navigate("Login")
    }
    return (
        <SafeAreaView style={[styleSelected.backgroundPrimaryLogin, { flex: 1 }]} onLayout={onLayoutRootView}>
            <StatusBar translucent={true} backgroundColor={'transparent'} barStyle={colorScheme === 'light' ? 'dark-content' : 'light-content'} />
            <KeyboardAvoidingView
                style={{ flex: 1, marginBottom: 10 }}
                enabled={true}
                behavior={Platform.OS == 'android' ? 'height' : 'padding'}
                keyboardVerticalOffset={Platform.OS == 'android' ? -150 : -150}
            >
                <View style={[styleSelected.backgroundPrimaryLogin, { flex: 1 }]}>
                    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                        <Text style={styleSelected.textNormal32}>Welcome</Text>
                        <Text style={styleSelected.textNormal16}>Sign in or create a new account</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Image
                            style={styleSelected.WelcomeImage}
                            source={require('../../assets/images/WelcomeImage.png')}
                            placeholder="image"
                            // resizeMode="contain"
                            transition={1000}
                        />
                    </View>
                    <View style={{ flex: 1, justifyContent: "space-evenly" }}>
                        <View style={{ height: "60%", justifyContent: "space-evenly", width: "90%", alignSelf: "center" }}>
                            <ButtonPrimary
                                title={"Sign in"}
                                colorText={colors.BaseSlot3}
                                event={() => { navigation.navigate("Login") }} />
                            <ButtonSecondary
                                title={"No account yet? "}
                                title2={"Sign up"}
                                colorText={"#7C7C7C"}
                                colorText2={colors.BaseSlot1}
                                event={() => navigation.navigate("Register")} />
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}