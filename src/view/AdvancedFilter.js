import React, { useEffect, useRef, useState, useCallback } from 'react'
import { SafeAreaView, StatusBar, Appearance, useColorScheme, Platform, KeyboardAvoidingView, View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import style from '../../style/Style'
import styleDark from '../../style/StyleDark'
import * as NavigationBar from 'expo-navigation-bar'
import * as SplashScreen from 'expo-splash-screen';
import Loader from '../components/Loader'
import Checkbox from 'expo-checkbox';
import ButtonPrimary from '../components/ButtonPrimary'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

export default function AdvancedFilter({ route, navigation }) {
    const [isLoading, setIsLoading] = useState(true)
    let colorScheme = useColorScheme()
    var styleSelected = colorScheme == 'light' ? style : styleDark
    var colors = require('../../style/Colors.json')
    const [show, setShow] = useState(false)
    const [event, setEvent] = useState(false)
    const [monument, setMonument] = useState(false)
    const [foodndrink, setFoodndrink] = useState(false)
    const [concert, setConcert] = useState(false)
    const [conference, setConference] = useState(false)
    const [exhibition, setExhibition] = useState(false)
    const [english, setEnglish] = useState(false)
    const [portuguese, setPortuguese] = useState(false)
    const [spanish, setSpanish] = useState(false)

    useEffect(() => {
        console.log('OPEN', AdvancedFilter.name, 'SCREEN')
        //For test loading
        setTimeout(() => {
            setIsLoading(false)
        }, 1000);
        return () => {
            console.log('SCREEN', AdvancedFilter.name, 'CLOSE')
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

    const Tab = createBottomTabNavigator();

    function HomeScreen() {
        return (

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image
                    source={require('../../assets/images/home.png')}
                    placeholder="image"
                    contentFit="cover"
                    transition={1000}
                />
                <Text>Home</Text>
            </View>
        )
    }
    function SearchScreen() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                <Text>Search</Text>
            </View>
        )
    }
    function TicketScreen() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                <Text>Tickets</Text>
            </View>
        )
    }
    function HeartScreen() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                <Text>Heart</Text>
            </View>
        )
    }
    function ProfileScreen() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                <Text>Profile</Text>
            </View>
        )
    }

    return (
        <SafeAreaView style={{ backgroundColor: colors.BaseSlot3, flex: 1 }} onLayout={onLayoutRootView}>
            <StatusBar translucent={true} backgroundColor={'transparent'} barStyle={colorScheme === 'light' ? 'dark-content' : 'light-content'} />
            <KeyboardAvoidingView
                style={{ flex: 1, marginBottom: 10 }}
                enabled={true}
                behavior={Platform.OS == 'android' ? 'height' : 'padding'}
                keyboardVerticalOffset={Platform.OS == 'android' ? -150 : -150}
            >
                <View style={{ backgroundColor: colors.BaseSlot3, flex: 1 }}>
                    <Text style={[styleSelected.textNormal20, { textAlign: 'center' }]}>Filters</Text>
                    <View style={{ backgroundColor: colors.BaseSlot3, flex: 1, padding: 10  }}>
                        <Text style={[styleSelected.textNormal12, { marginTop: 10 }]}>Today I would like...</Text>
                        <View style={{ flex: 1, backgroundColor: colors.BaseSlot3, marginTop: 10 }}>
                            <View style={{ backgroundColor: colors.BaseSlot3, marginRight: 'auto', height: 150 }}>
                                <Text style={[styleSelected.textNormal20]}>Shows</Text>
                                <Text style={[styleSelected.textNormal20, { top: 10 }]}>Events</Text>
                                <Text style={[styleSelected.textNormal20, { top: 17 }]}>Monuments</Text>
                                <Text style={[styleSelected.textNormal20, { top: 25 }]}>Foods & Drinks</Text>
                            </View>

                            <View style={{ backgroundColor: colors.BaseSlot3, marginLeft: 'auto', marginTop: -150, height: 155 }}>
                                <TouchableOpacity onPress={() => { console.log("Press in Shows") }}>
                                    <Checkbox style={styleSelected.checkbox} value={show} onValueChange={setShow} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { console.log("Press in Events") }}>
                                    <Checkbox style={[styleSelected.checkbox, { top: 9 }]} value={event} onValueChange={setEvent} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { console.log("Press in Monuments") }}>
                                    <Checkbox style={[styleSelected.checkbox, { top: 15 }]} value={monument} onValueChange={setMonument} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { console.log("Press in Foods & Drinks") }}>
                                    <Checkbox style={[styleSelected.checkbox, { top: 20 }]} value={foodndrink} onValueChange={setFoodndrink} />
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>
                </View>
                <View style={{ backgroundColor: colors.BaseSlot3, flex: 1, marginTop: 70, padding: 10  }}>
                    <Text style={styleSelected.textNormal12}>What kind of event?</Text>
                    <View style={{ flex: 1, backgroundColor: colors.BaseSlot3, marginTop: 10 }}>
                        <View style={{ backgroundColor: colors.BaseSlot3, marginRight: 'auto', height: 150 }}>
                            <Text style={[styleSelected.textNormal20]}>Concert</Text>
                            <Text style={[styleSelected.textNormal20, { top: 10 }]}>Conference</Text>
                            <Text style={[styleSelected.textNormal20, { top: 17 }]}>Exhibition</Text>
                        </View>

                        <View style={{ backgroundColor: colors.BaseSlot3, marginLeft: 'auto', marginTop: -150, height: 155 }}>
                            <TouchableOpacity onPress={() => { console.log("Press in Concert") }}>
                                <Checkbox style={styleSelected.checkbox} value={concert} onValueChange={setConcert} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { console.log("Press in Conference") }}>
                                <Checkbox style={[styleSelected.checkbox, { top: 9 }]} value={conference} onValueChange={setConference} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { console.log("Press in Exhibition") }}>
                                <Checkbox style={[styleSelected.checkbox, { top: 15 }]} value={exhibition} onValueChange={setExhibition} />
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
                <View style={{ backgroundColor: colors.BaseSlot3, flex: 1, marginTop: -20, padding: 10 }}>
                    <Text style={styleSelected.textNormal12}>Languages</Text>
                    <View style={{ flex: 1, backgroundColor: colors.BaseSlot3 }}>
                        <View style={{ backgroundColor: colors.BaseSlot3, marginRight: 'auto', height: 150, marginTop: 10 }}>
                            <Text style={[styleSelected.textNormal20]}>English</Text>
                            <Text style={[styleSelected.textNormal20, { top: 10 }]}>Portuguese</Text>
                            <Text style={[styleSelected.textNormal20, { top: 17 }]}>Spanish</Text>
                        </View>

                        <View style={{ backgroundColor: colors.BaseSlot3, marginLeft: 'auto', marginTop: -150, height: 155 }}>
                            <TouchableOpacity onPress={() => { console.log("Press in english") }}>
                                <Checkbox style={styleSelected.checkbox} value={english} onValueChange={setEnglish} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { console.log("Press in portuguese") }}>
                                <Checkbox style={[styleSelected.checkbox, { top: 9 }]} value={portuguese} onValueChange={setPortuguese} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { console.log("Press in spanish") }}>
                                <Checkbox style={[styleSelected.checkbox, { top: 15 }]} value={spanish} onValueChange={setSpanish} />
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
                <View style={{ width: '90%', alignSelf: "center" }}>
                    <ButtonPrimary
                        title={"Apply Filter"}
                        colorText={colors.BaseSlot3}
                        event={() => { navigation.navigate("Login") }} />
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <Tab.Navigator>
                        <Tab.Screen name="Home" component={HomeScreen}
                            options={{
                                tabBarIcon: ({ focused }) => {
                                    return (
                                        <Image
                                            style={{ height: 30, width: 30 }}
                                            source={require('../../assets/images/home.png')}
                                            placeholder="image"
                                            contentFit="cover"
                                            transition={1000}
                                        />
                                    )
                                }
                            }}
                        />
                        <Tab.Screen name="Search" component={SearchScreen}
                            options={{
                                tabBarIcon: ({ focused }) => {
                                    return (
                                        <Image
                                            style={{ height: 30, width: 30 }}
                                            source={require('../../assets/images/search.png')}
                                            placeholder="image"
                                            contentFit="cover"
                                            transition={1000}
                                        />
                                    )
                                }
                            }}
                        />
                        <Tab.Screen name="Ticket" component={TicketScreen}
                            options={{
                                tabBarIcon: ({ focused }) => {
                                    return (
                                        <Image
                                            style={{ height: 30, width: 30 }}
                                            source={require('../../assets/images/ticket.png')}
                                            placeholder="image"
                                            contentFit="cover"
                                            transition={1000}
                                        />
                                    )
                                }
                            }}
                        />
                        <Tab.Screen name="Heart" component={HeartScreen}
                            options={{
                                tabBarIcon: ({ focused }) => {
                                    return (
                                        <Image
                                            style={{ height: 30, width: 30 }}
                                            source={require('../../assets/images/heart.png')}
                                            placeholder="image"
                                            contentFit="cover"
                                            transition={1000}
                                        />
                                    )
                                }
                            }}
                        />

                        <Tab.Screen name="Profile" component={ProfileScreen}

                            options={{
                                tabBarIcon: ({ focused }) => {
                                    return (
                                        <Image
                                            style={{ height: 30, width: 30 }}
                                            source={require('../../assets/images/user.png')}
                                            placeholder="image"
                                            contentFit="cover"
                                            transition={1000}
                                        />
                                    )
                                }
                            }}
                        />
                    </Tab.Navigator>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>

    )
}