import React, { useEffect, useRef, useState, useCallback } from 'react'
import { SafeAreaView, StatusBar, Appearance, useColorScheme, Platform, KeyboardAvoidingView, View, Text } from 'react-native'
import style from '../../../style/Style'
import styleDark from '../../../style/StyleDark'
import * as NavigationBar from 'expo-navigation-bar'
import * as SplashScreen from 'expo-splash-screen';
import Loader from '../../components/Loader'
import ButtonPrimary from '../../components/ButtonPrimary'

export default function PlanYourTrip({ route, navigation }) {
    const [isLoading, setIsLoading] = useState(true)
    let colorScheme = useColorScheme()
    var styleSelected = colorScheme == 'light' ? style : styleDark
    var colors = require('../../../style/Colors.json')

    useEffect(() => {
        console.log('OPEN', PlanYourTrip.name, 'SCREEN')
        //For test loading
        setTimeout(() => {
            setIsLoading(false)
        }, 1000);
        return () => {
            console.log('SCREEN', PlanYourTrip.name, 'CLOSE')
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
        <SafeAreaView style={[{ flex: 1, backgroundColor: colors.BaseSlot3 }]} onLayout={onLayoutRootView}>
            <StatusBar translucent={true} backgroundColor={'transparent'} barStyle={colorScheme === 'light' ? 'dark-content' : 'light-content'} />
            <KeyboardAvoidingView
                style={{ flex: 1, marginBottom: 10 }}
                enabled={true}
                behavior={Platform.OS == 'android' ? 'height' : 'padding'}
                keyboardVerticalOffset={Platform.OS == 'android' ? -150 : -150}
            >
                <View style={[{ flex: 1, backgroundColor: colors.BaseSlot3, marginTop: Platform.OS == "android" ? 10 : 10 } ]}>
                    <View style={{flex:0.3}}>
                        <Text style={{fontWeight:400, fontSize: 12, color:"#F24052", textAlign:"center"}}>Route planning</Text>
                    </View>
                    <View style={{flex:0.1}}>
                        <Text style={{textAlign:"center"}}>Do you wish to plan your own route?</Text>
                    </View>
                    <View style={{flex:0.6, width:"80%", alignSelf:"center"}}>
                        <ButtonPrimary event={() => {
                            // navigation.navigate("Recommendations")
                            }} title={"Plan Route"} colorText={"white"} />
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}