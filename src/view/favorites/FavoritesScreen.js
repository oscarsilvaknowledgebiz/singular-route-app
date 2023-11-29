import React, { useEffect, useRef, useState, useCallback } from 'react'
import { SafeAreaView, StatusBar, Appearance, useColorScheme, Platform, KeyboardAvoidingView, View, Text } from 'react-native'
import style from '../../../style/Style'
import styleDark from '../../../style/StyleDark'
import * as NavigationBar from 'expo-navigation-bar'
import * as SplashScreen from 'expo-splash-screen';
import Loader from '../../components/Loader'
import { Container, HeartImage, HeartImageContainer, KeyboardContainer, ScreenView, EmptyContainer} from './Styles'
import ButtonPrimary from '../../components/ButtonPrimary'

export default function FavoritesScreen({ route, navigation }) {
    const [isLoading, setIsLoading] = useState(true)
    let colorScheme = useColorScheme()
    var styleSelected = colorScheme == 'light' ? style : styleDark
    var colors = require('../../../style/Colors.json')

    const mockData = [
        {
            date: new Date(),
            title: "Rock in Rio - Lisboa",
        },
        {}
    ]

    useEffect(() => {
        console.log('OPEN', FavoritesScreen.name, 'SCREEN')
        //For test loading
        setTimeout(() => {
            setIsLoading(false)
        }, 1000);
        return () => {
            console.log('SCREEN', FavoritesScreen.name, 'CLOSE')
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
        <Container onLayout={onLayoutRootView}>
            <StatusBar translucent={false} backgroundColor={'transparent'} barStyle={colorScheme === 'light' ? 'dark-content' : 'light-content'} />
            <KeyboardContainer
                enabled={true}
                behavior={Platform.OS == 'android' ? 'height' : 'padding'}
                keyboardVerticalOffset={Platform.OS == 'android' ? -150 : -150}
            >
                <ScreenView>
                    <EmptyContainer />
                    <View style={{flex: 0.4}}>
                        <HeartImageContainer>
                            <HeartImage source={require('../../../assets/images/heart.png')} />
                        </HeartImageContainer>
                        <View style={{marginTop:50, alignItems:"center",  justifyContent:"center", marginBottom: 45}}>
                            <Text style={styleSelected.textNormal18}>No favourites yet</Text>
                            <Text style={[styleSelected.textNormal16, {width:"50%", textAlign:"center", marginTop:5}]}>Make sure you marked your favourites</Text>
                        </View>
                        <ButtonPrimary title={"Add favourites"} colorText={"white"} />
                    </View>
                    <EmptyContainer />
                </ScreenView>
            </KeyboardContainer>
        </Container>
    )
}