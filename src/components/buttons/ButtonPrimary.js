import React from "react";
import { Pressable, Text, View, TouchableOpacity, useColorScheme } from "react-native";
import style from '../../../style/Style'
import styleDark from '../../../style/StyleDark'


export default function ButtonPrimary({ title, colorText, event }) {
    let colorScheme = useColorScheme()
    var styleSelected = colorScheme == 'light' ? style : styleDark

    var colors = require('../../../style/Colors.json')

    return (
        <View style={{marginTop: 40, width: '100%'}}>
            <TouchableOpacity style={styleSelected.button} onPress={event}>
                <Text style={[styleSelected.textNormal18, { color: '#FFF' }]}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}