import React from "react";
import { Image, TouchableOpacity, useColorScheme, View, Text } from "react-native";
import style from '../../style/Style'
import styleDark from '../../style/StyleDark'

export default function CustomHeaderLeft({ navigation, title=null }) {
    let colorScheme = useColorScheme()
    var styleSelected = colorScheme == 'light' ? style : styleDark
    var colors = require('../../style/Colors.json')
    return (
        <View style={{flexDirection:"row", }}>
            {/* <View style={{flex:0.2}} /> */}
            <TouchableOpacity style={{left: 20, position:"absolute", zIndex: 999}} onPress={() => navigation.goBack()}>
                <Image source={require("../../assets/images/arrow-left.png")} style={{ height:30, width:30}} />
            </TouchableOpacity>
                {title && <View style={{alignSelf:"center", justifyContent:"center", width:"100%",}} >
                    <Text style={{textAlign:"center", fontWeight:700, fontSize: 20}}>{title}</Text>
                </View>}
        </View>
    )
}