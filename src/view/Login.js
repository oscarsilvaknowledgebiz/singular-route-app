import React, { useEffect, useRef, useState, useCallback } from 'react'
import { SafeAreaView, StatusBar, Appearance, useColorScheme, Platform, KeyboardAvoidingView, View, Text, TouchableOpacity, Image, Switch } from 'react-native'
import style from '../../style/Style'
import styleDark from '../../style/StyleDark'
import * as NavigationBar from 'expo-navigation-bar'
import * as SplashScreen from 'expo-splash-screen';
import Loader from '../components/Loader'
import InputDefault from '../components/InputDefault'
import ButtonPrimary from '../components/ButtonPrimary'
import {UserService} from 'singular-route-client/client'
import * as AppleAuthentication from "expo-apple-authentication"
import * as jwtDecode from "jwt-decode"
import { CommonActions } from '@react-navigation/native'
import Toast from 'react-native-toast-message'
import { insertUser } from '../features/user/user'

import { useDispatch, useSelector } from 'react-redux'

export default function Login({ route, navigation }) {
    const [isLoading, setIsLoading] = useState(true)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [remember, setRemember] = useState(true)
    let colorScheme = useColorScheme()
    var styleSelected = colorScheme == 'light' ? style : styleDark
    var colors = require('../../style/Colors.json')

    const dispatch = useDispatch()

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

    const showToast = (msg, type = "success") => {
        // Types: success, error, info
        Toast.show({ type: type, text1: msg, position: 'bottom' })
    }

    function LoginUser(){
        if (email && password) {
            UserService.getUserDataByIdUser(email.toLowerCase(), password).then((response) => {
                
                dispatch(insertUser(response.data))
    
                navigation.dispatch(
                    CommonActions.reset({
                        index: 0,
                        routes: [{ name: "HomeScreen" }]
                    })
                )
                
            }).catch((error) => {
                console.error(error)
                showToast("An error has occured while trying to sign in.", "error")
            })
        }
        else {
            showToast("Please fill all the fields.", "error")
        }
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
                    <View style={{flex:1, justifyContent:"center", alignContent:"center", alignItems:"center" }}>
                        <Image source={require("../../assets/images/logo.png")} style={{height: 200, width: "90%" }} resizeMode='contain' />
                    </View>
                    <View style={{ flex: .4, justifyContent: "space-evenly" }}>
                        <InputDefault placeholder={"Email address"} input={email} setInput={setEmail} />
                        <InputDefault secureTextEntry={true} placeholder={"Password"} input={password} setInput={setPassword} />
                        <TouchableOpacity style={{ height: 30 }} onPress={() => { navigation.navigate("RecoverPassword") }}>
                            <Text style={[styleSelected.textNormal12, { alignSelf: "flex-end",  color: colors.BaseSlot2, fontWeight: 600, marginRight: 10 }]}>Forgot password?</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, justifyContent: "space-evenly" }}>
                    <ButtonPrimary title={"Sign in"} colorText={colors.BaseSlot3} event={() => {
                            console.log("LoginDone")
                            LoginUser()
                        }} />
                        <Text style={[styleSelected.textNormal14, {justifyContent:"center", alignItems:"center", textAlign:"center", fontWeight:"bold"}]}>Or</Text>
                        <View style={{ justifyContent: "space-evenly", alignItems: "center", width: "80%", alignSelf: "center" }}>
                            {/* <TouchableOpacity onPress={() => { console.log("PRESS IN APPLE") }}>
                                <Image source={require("../../assets/images/ic_baseline-apple.png")} style={{ height: 45, width: 45 }} resizeMode='contain' />
                            </TouchableOpacity> */}
                            <AppleAuthentication.AppleAuthenticationButton style={{ width: 210, height:50, justifyContent: "center", alignItems: "center" }}
                                buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
                                buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}                                
                                cornerRadius={30}
                                onPress={async () => {
                                    try {
                                      const credential = await AppleAuthentication.signInAsync({
                                        requestedScopes: [
                                          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
                                          AppleAuthentication.AppleAuthenticationScope.EMAIL,
                                        ],
                                      }                                      
                                      ).then((data) => { 
                                        let tokenData = jwtDecode.default(data.identityToken)
                                        let email = tokenData.email
                                        console.log(tokenData)
                                        // UserService.getAllUsers().then((res) => {
                                        //     console.log(res.data)
                                        //     const checkUser = res.data.find((user) => user.email == email)
                                        //     if (checkUser) {
                                        //         AsyncStorage.setItem("@token", checkUser._id.$oid)
                                        //         navigation.dispatch(
                                        //             CommonActions.reset({
                                        //                 index: 0,
                                        //                 routes: [{ name: 'BottomTab', params: { userData: checkUser } }],
                                        //             })
                                        //         )
                                        //     } else {
                                        //         console.warn(data)
                                        //         navigation.navigate('CreateAccountWithGmail', { userInfo: data })
                                        //     }
                                        // }).catch((err) => { })
                                      });
                                      // signed in
                                    } catch (e) {
                                      if (e.code === 'ERR_REQUEST_CANCELED') {
                                        // handle that the user canceled the sign-in flow
                                        console.error("error1:",e)
                                      } else {
                                        console.error("error2:",e)
                                        // handle other errors
                                      }
                                    }
                                  }}
                             />
                            <TouchableOpacity style={[{ justifyContent:"center", alignItems:"center", alignContent:"center"}, Platform.OS === "ios" && { marginTop: 5 }]} onPress={() => { console.log("PRESS IN GOOGLE") }}>
                                <View style={{alignContent:"center", alignItems:"center", alignSelf:"center", top:5, justifyContent:"center"}}>
                                    <Image source={Platform.OS === "android" ? require("../../assets/images/androidGoogleDark.png") : require("../../assets/images/iosGoogleDark.png") } style={{ height: 50,}} resizeMode='contain' />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}