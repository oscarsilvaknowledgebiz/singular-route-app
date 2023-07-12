import React from "react";
import LottieView from "lottie-react-native";
import { View } from "react-native";


export default function Loader() {

    const colors = require("../../../style/Colors.json")

    return (
        <View style={{
            height: "100%",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: colors.Base_Slot_3
        }}>
            <LottieView
                autoPlay
                style={{
                    width: 200,
                    height: 200,
                    backgroundColor: '#eee',
                }}
                source={require('../../../assets/json/loader-app.json')}
            />
        </View>
    )
}