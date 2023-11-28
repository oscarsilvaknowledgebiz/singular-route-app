import { Platform } from "react-native"
import styled from "styled-components/native"
import style from '../../../style/Style'

var colors = require('../../../style/Colors.json')


export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${colors.BaseSlot3};
`

export const KeyboardContainer = styled.KeyboardAvoidingView`
    flex: 1;
    margin-bottom: 10px;
`

export const ScreenView = styled.View`
    flex: 1;
    background-color: ${colors.BaseSlot3};
    margin-top: ${Platform.OS == "android" ? 0+"px" : 0+"px"};
    margin-left: 20px;
    margin-right: 20px;
`

export const ImageTouchable = styled.TouchableOpacity`
    margin-top: 80px;
`

export const ImageContainer = styled.Image`
    ${style.avatar};
    align-self: center;
`

export const EditImageCircle = styled.View`
    ${style.plusCircleAvatar};
    elevation: 8;
    shadow-opacity: 0.25;
    shadow-radius: 3.85px;

`

export const UserInfoView = styled.View`
    flex: 0.2;
    margin-top: 20px;
    align-items: center;
`

export const UserName = styled.Text`
    ${style.textNormal18};
`

export const UserEmail = styled.Text`
    ${style.textNormal12};
`

export const SettingsContainer = styled.View`
    flex: 0.7;
    margin-left: -20px;
    margin-right: -20px;
`

export const SettingsHeader = styled.Text`
    margin-left: 20px;
    margin-right: 20px;
    ${style.textNormal18};
    margin-bottom:20px;
`

export const HomeSetting = styled.TouchableOpacity`
    flex-direction: row;
    padding: 15px;
    padding-left: 30px;
    padding-right: 30px;
    background-color: #FBFBFB;
`

export const SettingText = styled.Text`
    ${style.textNormal12};
    flex: 1;
    text-align-vertical: center;
`

export const HomeSettingValue = styled.Text`
    ${style.textNormal12};
    text-align-vertical: center;
`

export const CopySetting = styled.View`
    flex-direction: row;
    justify-content: center;
    padding: 5px;
    padding-left: 30px;
    padding-right: 30px;
    background-color: #FBFBFB;
    margin-top: 2px;
`

export const SettingRow = styled.TouchableOpacity`
    flex-direction: row;
    padding: 15px;
    padding-left: 30px;
    padding-right: 30px;
    background-color: #FBFBFB;
    margin-top: 2px;
`

export const ButtonContainer = styled.View`
    flex: 0.1;
`