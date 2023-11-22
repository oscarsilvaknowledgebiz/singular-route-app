import React from "react";
import { Image, TouchableOpacity, useColorScheme } from "react-native";
import style from '../../style/Style'
import styleDark from '../../style/StyleDark'

export default function CustomHeaderLeft({ navigation }) {
    let colorScheme = useColorScheme()
    var styleSelected = colorScheme == 'light' ? style : styleDark
    var colors = require('../../style/Colors.json')
    return (
        <TouchableOpacity style={{ left:20}} onPress={() => navigation.goBack()}>
            <Image source={require("../../assets/images/arrow-left.png")} style={{ height:30, width:30}} />
        </TouchableOpacity>
    )
}