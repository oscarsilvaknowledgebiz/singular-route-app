import React from "react";
import { Pressable, Text, TouchableOpacity, useColorScheme } from "react-native";
import style from '../../../style/Style'
import styleDark from '../../../style/StyleDark'

export default function ButtonPrimary({ title, colorText, event }) {
    let colorScheme = useColorScheme()
    var styleSelected = colorScheme == 'light' ? style : styleDark
    var colors = require('../../../style/Colors.json')
    return (
        <TouchableOpacity style={styleSelected.buttonfilter} onPress={event}>
            <Text style={[styleSelected.textNormalFilter, { color: colorText }]}>{title}</Text>
        </TouchableOpacity>
    )
}