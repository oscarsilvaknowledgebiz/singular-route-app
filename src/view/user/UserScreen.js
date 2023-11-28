import React, { useEffect, useRef, useState, useCallback } from 'react'
import { SafeAreaView, StatusBar, Appearance, useColorScheme, Platform, KeyboardAvoidingView, View, Text, TouchableOpacity, Image, Switch } from 'react-native'
import style from '../../../style/Style'
import styleDark from '../../../style/StyleDark'
import * as NavigationBar from 'expo-navigation-bar'
import * as SplashScreen from 'expo-splash-screen';
import Loader from '../../components/Loader'
import { UserService } from 'singular-route-client/client'
import * as ImagePicker from "expo-image-picker";
import { MaterialCommunityIcons } from '@expo/vector-icons'
import ButtonPrimary from '../../components/ButtonPrimary'
import ButtonSecondary from '../../components/ButtonSecondary'
import { useNavigation, CommonActions } from '@react-navigation/native'
import { Container, KeyboardContainer, ScreenView, ImageTouchable, ImageContainer, EditImageCircle, UserInfoView, UserName, UserEmail, SettingsContainer, SettingsHeader, HomeSetting, SettingText, HomeSettingValue, CopySetting, SettingRow, ButtonContainer } from './Styles'

export default function UserScreen({ route, navigation }) {
    const [isLoading, setIsLoading] = useState(true)
    let colorScheme = useColorScheme()
    var styleSelected = colorScheme == 'light' ? style : styleDark
    var colors = require('../../../style/Colors.json')

    const [image, setImage] = useState(null);
    const [remember, setRemember] = useState(true)

    const navigation2 = useNavigation(); // TEMP



    useEffect(() => {
        console.log('OPEN', UserScreen.name, 'SCREEN')
        //For test loading
        setTimeout(() => {
            setIsLoading(false)
        }, 1000);
        return () => {
            console.log('SCREEN', UserScreen.name, 'CLOSE')
        }
    }, [])
    Appearance.getColorScheme()
    Appearance.addChangeListener(({ colorScheme }) => {
        console.log('COLOR THEME WAS ALTER')
        console.log(colorScheme)
        if (Platform.OS === 'android')
            NavigationBar.setBackgroundColorAsync(colorScheme === 'light' ? colors.Base_Slot_1 : colors.Base_Slot_1)
    })

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 0.2,
            allowsMultipleSelection: false,
            base64: true
        });

        // UserService.uploadUserImage({
        //     base64: result.assets[0].base64
        // })
        //   .then(res => {
        //     setImage(res.data);
        //   })
        //   .catch(e => {
        //     console.error(e);
        //   });
        setImage(result.assets[0].uri); // TEMP
    };

    const logout = () => {
        // clear token/redux

        navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [{ name: "WelcomeScreen" }]
            })
        )
    }

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
    <Container onLayout={onLayoutRootView}>
        <StatusBar translucent={false} backgroundColor={'transparent'} barStyle={colorScheme === 'light' ? 'dark-content' : 'light-content'} />
        <KeyboardContainer
            enabled={true}
            behavior={Platform.OS == 'android' ? 'height' : 'padding'}
            keyboardVerticalOffset={Platform.OS == 'android' ? -150 : -150}
        >
            <ScreenView>
                <ImageTouchable onPress={pickImage}>
                    <ImageContainer
                        source={{
                            uri: image
                                ? image
                                : "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
                        }}
                    />
                    <EditImageCircle style={styleSelected.plusCircleAvatar}>
                        <MaterialCommunityIcons
                            name={"pencil-outline"}
                            size={20}
                            color={colors.BaseSlot4}
                        />
                    </EditImageCircle>
                </ImageTouchable>
                <UserInfoView>
                    <UserName>Nome do utilizador</UserName>
                    <UserEmail>email@knowledgebiz.pt</UserEmail>
                </UserInfoView>
                <SettingsContainer>
                    <SettingsHeader>Settings</SettingsHeader>
                    <HomeSetting>
                        <SettingText>Home</SettingText>
                        <HomeSettingValue>Lisboa</HomeSettingValue>
                    </HomeSetting>
                    <CopySetting>
                        <SettingText>Copy Events to calendar</SettingText>
                        <Switch
                            thumbColor={remember ? colors.BaseSlot3 : colors.BaseSlot3}
                            trackColor={{ true: "#32D74B", false: "gray" }}
                            value={remember}
                            onValueChange={(value) => setRemember(value)} />
                    </CopySetting>
                    <SettingRow>
                        <SettingText>Manage Events</SettingText>
                        <MaterialCommunityIcons name='chevron-right' size={22} />
                    </SettingRow>
                    <SettingRow>
                        <SettingText>Manage Login options</SettingText>
                        <MaterialCommunityIcons name='chevron-right' size={22} />
                    </SettingRow>
                    <SettingRow>
                        <SettingText>Account Settings</SettingText>
                        <MaterialCommunityIcons name='chevron-right' size={22} />
                    </SettingRow>
                </SettingsContainer>
                <ButtonContainer>
                    <ButtonSecondary title={"Logout"} event={() => logout()} colorText={"#7C7C7C"}  />
                </ButtonContainer>
            </ScreenView>
        </KeyboardContainer>
    </Container>

    )
}