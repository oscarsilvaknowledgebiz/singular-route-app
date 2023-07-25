import React, { useEffect, useRef, useState, useCallback } from 'react';
import {
    SafeAreaView,
    StatusBar,
    Appearance,
    useColorScheme,
    Platform,
    KeyboardAvoidingView,
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
} from 'react-native';
import style from '../../style/Style';
import styleDark from '../../style/StyleDark';
import * as NavigationBar from 'expo-navigation-bar';
import * as SplashScreen from 'expo-splash-screen';
import Loader from '../components/Loader';
import InputDefault from '../components/InputDefault';
import ButtonPrimary from '../components/ButtonPrimary';
import Constants from 'expo-constants';
import * as ImagePicker from 'expo-image-picker';
import ProfilePictureScreen from '../components/ProfilePictureScreen';
import DisplayNameScreen from '../components/DisplayNameScreen';
import {UserService} from 'singular-route-client/client'

export default function CreateNewAccount({ route, navigation }) {
    const [isLoading, setIsLoading] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [profilePicture, setProfilePicture] = useState(null);
    const [displayName, setDisplayName] = useState('');
    let colorScheme = useColorScheme();
    var styleSelected = colorScheme == 'light' ? style : styleDark;
    var colors = require('../../style/Colors.json');

    useEffect(() => {
        console.log('OPEN', CreateNewAccount.name, 'SCREEN');
        // For test loading
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
        return () => {
            console.log('SCREEN', CreateNewAccount.name, 'CLOSE');
        };
    }, []);

    Appearance.getColorScheme();
    Appearance.addChangeListener(({ colorScheme }) => {
        console.log('COLOR THEME WAS ALTER');
        console.log(colorScheme);
        if (Platform.OS === 'android')
            NavigationBar.setBackgroundColorAsync(
                colorScheme === 'light' ? colors.Base_Slot_1 : colors.Base_Slot_1
            );
    });

    const onLayoutRootView = useCallback(async () => {
        if (isLoading) {
        }
    }, [isLoading]);

    const pickImage = async () => {
        if (Constants.platform.ios) {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
                return;
            }
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled) {
            setProfilePicture(result.uri);
        }
    };

    if (isLoading) {
        return <Loader />;
    }

    function RegisterUser(){
        console.log("SERVICE")
        UserService.createUserByIdUser({
            email: email, 
            name: name,
            password: password,
            address: {
                street: "",
                city: "",
                country: "",
                postal_code: "",
                door_number: ""
            }
        }).then((response) => {
          console.log(response.data)
        }).catch((error) => {console.error(error)})
    }

    return (
        <SafeAreaView style={[{ flex: 1, backgroundColor: colors.BaseSlot3 }]} onLayout={onLayoutRootView}>
            <StatusBar
                translucent={true}
                backgroundColor={'transparent'}
                barStyle={colorScheme === 'light' ? 'dark-content' : 'light-content'}
            />
            <KeyboardAvoidingView
                style={{ flex: 1, marginBottom: 10 }}
                enabled={true}
                behavior={Platform.OS == 'android' ? 'height' : 'padding'}
                keyboardVerticalOffset={Platform.OS == 'android' ? -150 : -150}
            >
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <Text style={[styleSelected.textNormal24, { textAlign: 'center' }]}>Create new account</Text>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                        <ProfilePictureScreen profilePicture={profilePicture} onPress={pickImage} />
                    </View>
                    <View
                        style={{
                            flex: 1,
                            backgroundColor: colors.BaseSlot3,
                            marginTop: Platform.OS == 'android' ? 0 : 0,
                            marginLeft: 20,
                            marginRight: 20,
                            paddingVertical: 20,
                        }}
                    >
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                            <DisplayNameScreen displayName={displayName} setDisplayName={setDisplayName} />
                        </View>
                        <View style={{ flex: 1, justifyContent: 'space-evenly' }}>
                            <InputDefault placeholder={'Full name'} input={name} setInput={setName} />
                            <InputDefault placeholder={'Email address'} input={email} setInput={setEmail} />
                            <InputDefault placeholder={'Create password'} input={password} setInput={setPassword} secureTextEntry={true} />
                            <InputDefault placeholder={'Repeat password'} input={repeatPassword} setInput={setRepeatPassword} secureTextEntry={true} />
                        </View>
                        <View style={{ flex: 1, justifyContent: 'space-evenly', marginTop: 20 }}>
                            <Text style={styleSelected.textNormal24}>Or Sign up with</Text>
                            <View style={{ flexDirection: 'row', height: 100, justifyContent: 'space-evenly', alignItems: 'center', width: '80%', alignSelf: 'center' }}>
                                <TouchableOpacity onPress={() => { console.log('PRESS IN FACEBOOK') }}>
                                    <Image source={require('../../assets/images/ic_baseline-facebook.png')} style={{ height: 45, width: 45 }} resizeMode='contain' />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { console.log('PRESS IN APPLE') }}>
                                    <Image source={require('../../assets/images/ic_baseline-apple.png')} style={{ height: 45, width: 45 }} resizeMode='contain' />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { console.log('PRESS IN GOOGLE') }}>
                                    <Image source={require('../../assets/images/Vector.png')} style={{ height: 45, width: 45 }} resizeMode='contain' />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <ButtonPrimary title={'Save'} colorText={colors.BaseSlot3} onPress={() => {
                            RegisterUser()
                        }}/>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
