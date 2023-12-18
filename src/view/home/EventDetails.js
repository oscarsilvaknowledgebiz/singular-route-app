import React, { useEffect, useRef, useState, useCallback } from 'react'
import { SafeAreaView, StatusBar, Appearance, useColorScheme, Platform, KeyboardAvoidingView, View, ScrollView, Text, Image, TouchableOpacity, Share } from 'react-native'
import style from '../../../style/Style'
import styleDark from '../../../style/StyleDark'
import * as NavigationBar from 'expo-navigation-bar'
import * as SplashScreen from 'expo-splash-screen';
import Loader from '../../components/Loader'

import { Container, KeyboardContainer, ScreenView } from "./Styles"
import ButtonPrimary from '../../components/ButtonPrimary'
import { Linking } from 'react-native'
import StarRating from '../../components/StarRating'

export default function EventDetails({ route, navigation }) {
    const [isLoading, setIsLoading] = useState(true)
    let colorScheme = useColorScheme()
    var styleSelected = colorScheme == 'light' ? style : styleDark
    var colors = require('../../../style/Colors.json')
    const [heartIcon, setHeartIcon] = useState({ name: "heart-o", path: require("../../../assets/images/heartOutline.png"), color: "white" })

    const changeHeart = () => {
        if (heartIcon.name === "heart-o") {
            setHeartIcon({ name: "heart", path: require("../../../assets/images/heart.png"), color: "#CB1000" })
        }
        else {
            setHeartIcon({ name: "heart-o", path: require("../../../assets/images/heartOutline.png"), color: "white" })
        }
    }

    useEffect(() => {
        console.log('OPEN', EventDetails.name, 'SCREEN')
        if (route.params.data.hasLike) {
            setHeartIcon({ name: "heart", path: require("../../../assets/images/heart.png"), color: "#CB1000" })
        }
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

    const url = Platform.select({
        ios: `maps:0,0?q=${route.params.data.name}`,
        android: `geo:0,0?q=${route.params.data.name}`,
    })

    const shareEvent = () => {
        Share.share({ message: encodeURI(`https://www.google.com/maps/search/${route.params.data.name}/`) })
    }

    return (
        <Container onLayout={onLayoutRootView} style={{ backgroundColor: "#F2F2F2" }}>
            <StatusBar translucent={true} backgroundColor={'white'} barStyle={colorScheme === 'light' ? 'dark-content' : 'light-content'} />
            <KeyboardContainer
                enabled={true}
                behavior={Platform.OS == 'android' ? 'height' : 'padding'}
                keyboardVerticalOffset={Platform.OS == 'android' ? -150 : -150}
            >
                <Container style={{ backgroundColor: "#F2F2F2" }}>
                    <View style={{ flex: 0.34 }}>
                        <View style={{ flex: 1, margin: 20 }}>
                            <View style={{ margin: -34 }}>
                                <Image source={{ uri: route.params.data.image }} style={{ height: "100%", width: "100%" }} resizeMode="stretch" />

                                <TouchableOpacity onPress={() => navigation.goBack()} style={{ alignItems: "center", backgroundColor: colors.BaseSlot1, padding: 10, borderRadius: 30, justifyContent: "center", position: "absolute", top: 50, left: 34 }}>
                                    <Image source={require('../../../assets/images/arrow-left.png')} style={{ height: 30, width: 30, tintColor: "white" }} />
                                </TouchableOpacity>
                            </View>
                            <View style={{ flex: 0.8 }} >
                            </View>
                            <View style={{ flex: 0.2, flexDirection: "row", }}>

                                <View style={{ flex: 0.8 }} />
                                <TouchableOpacity onPress={() => changeHeart()} style={{ flex: 0.1, alignItems: "center", justifyContent: "center", }}>
                                    <Image resizeMode="contain" source={heartIcon.path} style={{ height: 18, width: 18, tintColor: heartIcon["color"] ? heartIcon["color"] : "" }} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => shareEvent()} style={{ flex: 0.1, alignItems: "center", justifyContent: "center" }}>
                                    <Image source={require('../../../assets/images/shareOutline.png')} style={{ height: 18, width: 18, tintColor: "white" }} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{ flex: 0.55, backgroundColor: "white", }}>
                        <ScrollView contentContainerStyle={{ flexGrow: 1 }} >

                            <View style={{ marginLeft: 20, marginRight: 20, marginTop: 25 }}>
                                <View style={{ justifyContent: "center" }}>
                                    <Text style={{ fontSize: 24, fontWeight: 600 }}>{route.params.data.name}</Text>
                                </View>
                                <View style={{ height: 100 }}>
                                    <View style={{ flexDirection: "row", flex: 0.33, alignItems: "center" }}>
                                        <Image source={require("../../../assets/images/calendar.png")} style={{ width: 18, height: 18 }} />
                                        <Text style={{ fontSize: 16, fontWeight: 700, color: "#262627" }}> {route.params.data.date}</Text>
                                    </View>
                                    <View style={{ flex: 0.33, justifyContent: "center" }}>
                                        <Text style={{ marginLeft: 25, fontSize: 12, fontWeight: 400, color: "#262627" }}>20h00 - 22h30</Text>
                                    </View>
                                    <View style={{ flex: 0.34, justifyContent: "center" }}>
                                        <TouchableOpacity>
                                            <Text style={{ marginLeft: 25, fontSize: 12, fontWeight: 700, color: "#2854C6" }}>Add to calendar</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={{ marginTop: 10, height: 100 }}>
                                    <View style={{ flexDirection: "row", flex: 0.33, alignItems: "center" }}>
                                        <Image source={require("../../../assets/images/mapPin.png")} style={{ width: 18, height: 18 }} />
                                        <Text style={{ fontSize: 16, fontWeight: 700, color: "#262627" }}> {route.params.data.city}</Text>
                                    </View>
                                    <View style={{ flex: 0.33, justifyContent: "center" }}>
                                        <Text style={{ marginLeft: 25, fontSize: 12, fontWeight: 400, color: "#262627" }}>{route.params.data.location}</Text>
                                    </View>
                                    <View style={{ flex: 0.34, justifyContent: "center" }}>
                                        <TouchableOpacity onPress={() => Linking.openURL(url)}>
                                            <Text style={{ marginLeft: 25, fontSize: 12, fontWeight: 700, color: "#2854C6" }}>View on map</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={{ marginTop: 10, height: 70 }}>
                                    <View style={{ flexDirection: "row", flex: 0.5, alignItems: "center" }}>
                                        <Image source={require("../../../assets/images/time.png")} style={{ width: 18, height: 18 }} />
                                        <Text style={{ fontSize: 16, fontWeight: 700, color: "#262627" }}> Average duration</Text>
                                    </View>
                                    <View style={{ flex: 0.5, justifyContent: "center" }}>
                                        <Text style={{ marginLeft: 25, fontSize: 12, fontWeight: 400, color: "#262627" }}>30 minutes</Text>
                                    </View>
                                </View>
                                <View style={{ marginTop: 10, height: 70, justifyContent: "center" }}>
                                    <View style={{ flexDirection: "row", flex: 1, alignItems: "center", }}>
                                        <Image source={require("../../../assets/images/euro.png")} style={{ width: 18, height: 18 }} />
                                        <Text style={{ fontSize: 16, fontWeight: 700, color: "#262627" }}> Refund Policy</Text>
                                    </View>
                                    <View>
                                        <Text style={{ color: "#262627", fontSize: 12, marginLeft: 25 }}>Flat fee is not refundable</Text>
                                    </View>
                                </View>
                                <View style={{ marginTop: 10, height: 70, justifyContent: "center", alignItems: "center" }}>
                                    <Text style={{ fontSize: 16, fontWeight: 700 }}>Classification</Text>
                                    <View style={{ flexDirection: "row" }}>
                                        <StarRating rating={100} size={18} />
                                        <StarRating rating={(route.params.data.starRating * 100) >= 150 ? 100 : 0} size={18} />
                                        <StarRating rating={(route.params.data.starRating * 100) >= 250 ? 100 : 0} size={18} />
                                        <StarRating rating={(route.params.data.starRating * 100) >= 350 ? 100 : 0} size={18} />
                                        <StarRating rating={(route.params.data.starRating * 100) >= 450 ? 100 : 0} size={18} />

                                    </View>

                                </View>
                            </View>
                        </ScrollView>
                    </View>
                    <View style={{ flex: 0.12, backgroundColor: "#F2F2F2", marginLeft: 20, marginRight: 20 }}>
                        <View style={{ flex: 0.2, justifyContent: "center" }}>
                        </View>
                        <View style={{ flex: 0.8, flexDirection: "row", alignItems: "center" }}>
                            <View style={{ flex: 0.4 }}>
                                <Text style={{ fontSize: 16, fontWeight: 700 }}>
                                    Price
                                </Text>
                                <Text style={{ fontSize: 16, fontWeight: 400 }}>
                                    €€€
                                </Text>
                            </View>
                            <View style={{ flex: 0.6 }}>
                                <ButtonPrimary colorText={"white"} title={"Add to route"} />
                            </View>
                        </View>
                    </View>
                </Container>
            </KeyboardContainer>
        </Container>
    )
}