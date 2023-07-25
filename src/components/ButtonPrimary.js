import React from "react";
import { Pressable, Text, TouchableOpacity, useColorScheme } from "react-native";
import style from '../../style/Style'
import styleDark from '../../style/StyleDark'

export default function ButtonPrimary({ title, colorText, onPress }) {
    let colorScheme = useColorScheme()
    var styleSelected = colorScheme == 'light' ? style : styleDark
    var colors = require('../../style/Colors.json')
    return (
        <TouchableOpacity style={styleSelected.button} onPress={onPress}>
            <Text style={[styleSelected.textNormal18, { color: colorText }]}>{title}</Text>
        </TouchableOpacity>
    )
}