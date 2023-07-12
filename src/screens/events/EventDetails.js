import React, { useEffect, useRef, useState, useCallback } from 'react'
import { SafeAreaView, StatusBar, Appearance, useColorScheme, Platform, KeyboardAvoidingView, View, Text, Image, ScrollView } from 'react-native'
import style from '../../../style/Style'
import styleDark from '../../../style/StyleDark'
import * as NavigationBar from 'expo-navigation-bar'
import { TouchableOpacity } from 'react-native-gesture-handler'

import Loader from '../../components/loader/Loader';
import ButtonPrimary from '../../components/buttons/ButtonPrimary'


export default function EventDetails({ route, navigation }) {
    const [isLoading, setIsLoading] = useState(true)
    let colorScheme = useColorScheme()
    var styleSelected = colorScheme == 'light' ? style : styleDark
    var colors = require('../../../style/Colors.json')

    useEffect(() => {
        console.log('OPEN', EventDetails.name, 'SCREEN')
        //For test loading
        setTimeout(() => {
            setIsLoading(false)
        }, 1000);
        return () => {
            console.log('SCREEN', EventDetails.name, 'CLOSE')
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
        <ScrollView style={styleSelected.ScrollView}>
            <SafeAreaView style={[{ flex: 1, backgroundColor: colors.BaseSlot3 }]} onLayout={onLayoutRootView}>
                <StatusBar translucent={true} backgroundColor={'transparent'} barStyle={colorScheme === 'light' ? 'dark-content' : 'light-content'} />
                <KeyboardAvoidingView
                    style={{ flex: 1, marginBottom: 10 }}
                    enabled={true}
                    behavior={Platform.OS == 'android' ? 'height' : 'padding'}
                    keyboardVerticalOffset={Platform.OS == 'android' ? -150 : -150}
                >
                    <View style={{ height: 250 }}>
                        <View style={{ flex: 1, backgroundColor: '#B9314F' }}>
                            <Image
                                style={styleSelected.EventImage}
                                source={require('../../../assets/images/ImageExampleEvent.png')}
                                placeholder="image"
                                contentFit="cover"
                                transition={1000}
                            />
                        </View>
                    </View>
                    <View style={{ backgroundColor: colors.BaseSlot3, height: 90, flexDirection: 'row', marginTop: 20 }}>
                        <View style={{ width: 50, height: '100%', alignItems: 'center' }}>
                            <Image source={require("../../../assets/images/calendar.png")} style={{ height: 25, width: 25, }} resizeMode='contain' />
                        </View>
                        <View style={{ backgroundColor: colors.BaseSlot3, flex: 1 }}>
                            <Text style={[styleSelected.textNormal16, { fontWeight: '700' }]}>Mon, Apr 18 · 21:00 Pm</Text>
                            <Text style={[styleSelected.textNormal12]}>21:00 Pm - 23.30 Pm</Text>
                            <TouchableOpacity onPress={() => { console.log("Pressed Add to calendar") }}>
                                <Text style={[styleSelected.textNormal12, { fontWeight: 700, color: '#2854C6' }]}>Add to calendar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ backgroundColor: colors.BaseSlot3, height: 90, flexDirection: 'row' }}>
                        <View style={{ width: 50, height: '100%', alignItems: 'center' }}>
                            <Image source={require("../../../assets/images/pin.png")} style={{ height: 25, width: 25, }} resizeMode='contain' />
                        </View>
                        <View style={{ backgroundColor: colors.BaseSlot3, flex: 1 }}>
                            <Text style={[styleSelected.textNormal16, { fontWeight: '700' }]}>Palau Sant Jordi</Text>
                            <Text style={[styleSelected.textNormal12]}>Praça do Império, 1449-003 Lisboa</Text>
                            <TouchableOpacity onPress={() => { console.log("Pressed View on maps") }}>
                                <Text style={[styleSelected.textNormal12, { fontWeight: 700, color: '#2854C6' }]}>View on maps</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ backgroundColor: colors.BaseSlot3, height: 90, flexDirection: 'row' }}>
                        <View style={{ width: 50, height: '100%', alignItems: 'center' }}>
                            <Image source={require("../../../assets/images/time.png")} style={{ height: 25, width: 25, }} resizeMode='contain' />
                        </View>
                        <View style={{ backgroundColor: colors.BaseSlot3, flex: 1 }}>
                            <Text style={[styleSelected.textNormal16, { fontWeight: '700' }]}>Average time</Text>
                            <Text style={[styleSelected.textNormal12]}>Praça do Império, 1449-003 Lisboa</Text>
                        </View>
                    </View>
                    <View style={{ backgroundColor: colors.BaseSlot3, height: 90, flexDirection: 'row', marginTop: -20 }}>
                        <View style={{ width: 50, height: '100%', alignItems: 'center' }}>
                            <Image source={require("../../../assets/images/dollar.png")} style={{ height: 25, width: 25, }} resizeMode='contain' />
                        </View>
                        <View style={{ backgroundColor: colors.BaseSlot3, flex: 1 }}>
                            <Text style={[styleSelected.textNormal16, { fontWeight: '700' }]}>Refund Policy</Text>
                            <Text style={[styleSelected.textNormal12]}>Flut fee is not-refundable.</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1, backgroundColor: colors.BaseSlot3 }}>
                        <Text style={[styleSelected.textNormal16, { textAlign: 'center', fontWeight: 700 }]} >Classification</Text>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                            <TouchableOpacity onPress={() => { console.log("Pressed 1 evaluation") }}>
                                <Image source={require("../../../assets/images/StarFull.png")} style={{ height: 24, width: 24, alignItems: 'center', justifyContent: 'center', }} resizeMode='contain' />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { console.log("Pressed 2 evaluation") }}>
                                <Image source={require("../../../assets/images/StarFull.png")} style={{ height: 24, width: 24, alignItems: 'center', justifyContent: 'center', }} resizeMode='contain' />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { console.log("Pressed 3 half-evaluation") }}>
                                <Image source={require("../../../assets/images/StarHalf.png")} style={{ height: 24, width: 24, alignItems: 'center', justifyContent: 'center', }} resizeMode='contain' />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { console.log("Pressed 4 no-evaluation") }}>
                                <Image source={require("../../../assets/images/StarEmpty.png")} style={{ height: 24, width: 24, alignItems: 'center', justifyContent: 'center', }} resizeMode='contain' />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { console.log("Pressed 5 no-evaluation") }}>
                                <Image source={require("../../../assets/images/StarEmpty.png")} style={{ height: 24, width: 24, alignItems: 'center', justifyContent: 'center', }} resizeMode='contain' />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ flex: 0.6, marginTop: 10, marginLeft: 20 }}>
                        <Text style={[styleSelected.textNormal16, { fontWeight: 700 }]}>About</Text>
                    </View>
                    <View style={{ marginLeft: 20}}>
                        <Text style={[styleSelected.textNormal16, { marginTop: 15 }]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                    </View>
                    <View style={{ backgroundColor: '#F2F2F2', marginTop: 20, flex: 1, height: 150 }}>
                        <View style={{ width: 50, alignItems: 'center', marginTop: 40, marginBottom: 50, marginLeft: 20 }}>
                            <Text style={[styleSelected.textNormal16, { fontWeight: '700' }]}>Price</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                <Image source={require("../../../assets/images/euro.png")} style={{ height: 19, width: 17, alignItems: 'center', justifyContent: 'center', }} resizeMode='contain' />
                                <Image source={require("../../../assets/images/euro.png")} style={{ height: 19, width: 17, alignItems: 'center', justifyContent: 'center', }} resizeMode='contain' />
                                <Image source={require("../../../assets/images/euro.png")} style={{ height: 19, width: 17, alignItems: 'center', justifyContent: 'center', }} resizeMode='contain' />
                            </View>
                        </View>
                        <View style={{ display: 'flex', marginRight: 20, marginLeft: 'auto', marginTop: -90, width: '50%' }}>
                            <TouchableOpacity onPress={() => { console.log("Pressed on Tickets") }}>
                                <ButtonPrimary
                                    style={{ height: '20' }}
                                    title={"Tickets"}
                                    colorText={colors.BaseSlot3} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </ScrollView>
    )
}