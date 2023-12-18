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

export const EmptyContainer = styled.View`
    flex: 0.3
`

export const FindEventsInContainer = styled.View`
    flex:0.1;
    justify-content: flex-end;
`

export const FindEventsText = styled.Text`
    font-size:12px;
    color: #7C7C7C;
`

export const MapPinImage = styled.Image`
    width:14px; 
    height: 14px;
`

export const CityNameBold = styled.Text`
    font-size:18px;
    font-weight:600;
`

export const PopularInContainer = styled.View`

`

export const HeartImageContainer = styled.View`
    align-self: center;
`

export const HeartImage = styled.Image`
    width: 85px;
    height: 73px;
`