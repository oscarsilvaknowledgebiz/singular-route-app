import React, { useRef, useState, useEffect } from "react";
import { Animated, Text, View, useColorScheme } from "react-native";
import { TextInput } from "react-native";
import style from "../../../style/Style";
import styleDark from "../../../style/StyleDark";
import { Fontisto } from "@expo/vector-icons";
import MaskInput from "react-native-mask-input";

export default function InputDefault({
    placeholder,
    input,
    setInput,
    keyboardType,
    onEndEditing,
    onFocus,
    onChageText,
    secureTextEntry,
    maskInput
}) {
    const [focus, setFocus] = useState(false);
    const [showSecureText, setShowSecureText] = useState(true);
    const colors = require("../../../style/Colors.json");
    let colorScheme = useColorScheme();
    var styleSelected = colorScheme == "light" ? style : styleDark;

    const animationMove = useRef(new Animated.Value(0)).current;
    const animationScalePlaceholder = useRef(new Animated.Value(1)).current
    const animationScalePlaceholderMove = useRef(new Animated.Value(1)).current

    const animationFocus = () => {
        Animated.timing(animationMove, {
            toValue: -20,
            duration: 100,
            useNativeDriver: true,
        }).start();
    };

    const animationFocusPlaceHolder = () => {
        Animated.timing(animationScalePlaceholder, {
            toValue: 0,
            duration: 100,
            useNativeDriver: true,
        }).start();
    };

    const animationUnFocusPlaceHolderMove = () => {
        Animated.timing(animationScalePlaceholderMove, {
            toValue: 1,
            duration: 100,
            useNativeDriver: true,
        }).start();
    };

    const animationFocusPlaceHolderMove = () => {
        Animated.timing(animationScalePlaceholderMove, {
            toValue: 0,
            duration: 100,
            useNativeDriver: true,
        }).start();
    };

    const animationUnFocusPlaceHolder = () => {
        Animated.timing(animationScalePlaceholder, {
            toValue: 1,
            duration: 100,
            useNativeDriver: true,
        }).start();
    };

    const animationUnFocus = () => {
        Animated.timing(animationMove, {
            toValue: 0,
            duration: 100,
            useNativeDriver: true,
        }).start();
    };

    return (
        <View
            style={{
                borderBottomWidth: focus ? 2 : 0.4,
                borderBottomColor: focus ? colors.BaseSlot1 : colors.BaseSlot4,
                height: 40,
                justifyContent: "flex-end",
                paddingBottom: 5,
            
                width: "100%",
                alignSelf: "center",
                marginBottom: 30,
                marginTop: 10
         
            }}
        >
            <Animated.View
                style={{
                    position: "absolute",
                    top: 10,
                    transform: [
                        {
                            translateY: animationMove,
                        },
                        { translateX: 16 },
                    ],
                }}
            >
                {/* <Animated.Text
                    style={{
                        fontFamily: "Nunito-Regular",
                        alignSelf: "flex-start",
                        color: focus ? colors.BaseSlot1 : colors.BaseSlot4,
                        transform: [{
                            scale: animationScalePlaceholder.interpolate({
                                inputRange: [0, 1],
                                outputRange: [.8, 1]
                            })
                        }, {
                            translateX: animationScalePlaceholderMove.interpolate({
                                inputRange: [0, 1],
                                outputRange: [-15, 0]
                            })
                        }]
                    }}
                >
                    {placeholder}
                </Animated.Text> */}
            </Animated.View>

            {
                maskInput == undefined && (
                    <TextInput
                        value={input}
                        keyboardType={keyboardType}
                        placeholder={placeholder}
                        secureTextEntry={secureTextEntry ? showSecureText : false}
                        onFocus={(value) => {
                            typeof (onFocus) == "function" ? onFocus(value) : null
                            setFocus(true);
                            animationFocus();
                            animationFocusPlaceHolder()
                            animationFocusPlaceHolderMove()
                        }}
                        onEndEditing={(value) => {
                            typeof (onEndEditing) == "function" ? onEndEditing(value) : null
                            setFocus(false);
                            if (input.length == 0) {
                                animationUnFocus();
                                animationUnFocusPlaceHolder()
                                animationUnFocusPlaceHolderMove()
                            }
                        }}
                        onChangeText={(value) => {
                            console.log(value)
                            setInput(value)
                            typeof (onChageText) == "function" ? onChageText(value) : null
                        }}
                        cursorColor={colors.BaseSlot1}
                        selectionColor={colors.BaseSlot1}
                        style={{
                            fontSize: 16,
                            color: colors.BaseSlot1,
                            
                        }}
                    />
                )
            }


            {
                maskInput != undefined && (
                    <MaskInput
                        value={input}
                        style={{
                            fontSize: 16,
                            color: colors.BaseSlot1,
                           
                            alignSelf: "flex-start",
                            width: "100%"
                        }}
                        textAlign={"left"}
                        keyboardAppearance={colorScheme == "dark" ? "dark" : "light"}
                        keyboardType={keyboardType}
                        placeholder={placeholder}
                        onEndEditing={(value) => {
                            typeof (onEndEditing) == "function" ? onEndEditing(value) : null
                            setFocus(false)
                            if (input?.length == 0) {
                                animationUnFocus();
                                animationUnFocusPlaceHolder()
                                animationUnFocusPlaceHolderMove()
                            }
                        }}
                        onFocus={(value) => {
                            typeof (onFocus) == "function" ? onFocus(value) : null
                            setFocus(true);
                            animationFocus();
                            animationFocusPlaceHolder()
                            animationFocusPlaceHolderMove()
                        }}
                        onChangeText={(masked, unmasked) => {
                            setInput(masked);
                            typeof (onEndEditing) == "function" ? onChageText(masked) : null
                        }}
                        mask={maskInput}
                    />
                )
            }
            {
                secureTextEntry && (
                    <Fontisto
                        name={"eye"}
                        style={{ position: "absolute", top: 10, right: 10 }}
                        color={!showSecureText ? colors.BaseSlot1 : "gray"}
                        onPress={() => {
                            setShowSecureText(!showSecureText);
                        }}
                    />
                )
            }
        </View>
    );
}