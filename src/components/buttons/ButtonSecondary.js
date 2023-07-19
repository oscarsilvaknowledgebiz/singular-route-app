import React from "react";
import { Pressable, Text, TouchableOpacity, useColorScheme } from "react-native";
import style from '../../../style/Style'
import styleDark from '../../../style/StyleDark'

export default function ButtonSecondary({ title, title2, colorText, colorText2, event }) {
    let colorScheme = useColorScheme()
    var styleSelected = colorScheme == 'light' ? style : styleDark
    var colors = require('../../../style/Colors.json')
    return (
        <TouchableOpacity style={styleSelected.button2} onPress={event}>
            <Text style={[styleSelected.textNormal18, { color: colorText }]}>{title}<Text style={[styleSelected.textNormal18, { color: colorText2 }]}>{title2}</Text></Text>
        </TouchableOpacity>
    )
}