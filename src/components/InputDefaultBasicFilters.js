import React, { useRef, useState, useEffect } from 'react';
import { Animated, Text, View, useColorScheme } from 'react-native';
import style from '../../style/Style';
import styleDark from '../../style/StyleDark';
import { TextInput } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import MaskInput from 'react-native-mask-input';

const InputDefaultBasicFilters = ({
  placeholder,
  input,
  setInput,
  keyboardType,
  onEndEditing,
  onFocus,
  onChangeText,
  secureTextEntry,
  maskInput,
}) => {
  const [focus, setFocus] = useState(false);
  const [showSecureText, setShowSecureText] = useState(true);
  const colors = require('../../style/Colors.json');
  const colorScheme = useColorScheme();
  const styleSelected = colorScheme === 'light' ? style : styleDark;

  const animationMove = useRef(new Animated.Value(0)).current;
  const animationScalePlaceholder = useRef(new Animated.Value(1)).current;
  const animationScalePlaceholderMove = useRef(new Animated.Value(1)).current;

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
        justifyContent: 'flex-end',
        paddingBottom: 5,
        paddingLeft: 14,
        width: '95%',
        alignSelf: 'center',
        margin: 10,
      }}
    >
      <Animated.View
        style={{
          position: 'absolute',
          top: 10,
          transform: [
            {
              translateY: animationMove,
            },
            { translateX: 16 },
          ],
        }}
      >
        <Animated.Text
          style={{
            fontFamily: 'Nunito-Regular',
            alignSelf: 'flex-start',
            color: focus ? colors.BaseSlot1 : colors.BaseSlot4,
            transform: [
              {
                scale: animationScalePlaceholder.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.8, 1],
                }),
              },
              {
                translateX: animationScalePlaceholderMove.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-15, 0],
                }),
              },
            ],
          }}
        >
          {placeholder}
        </Animated.Text>
      </Animated.View>

      {maskInput === undefined && (
        <TextInput
          value={input}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry ? showSecureText : false}
          onFocus={() => {
            typeof onFocus === 'function' ? onFocus() : null;
            setFocus(true);
            animationFocus();
            animationFocusPlaceHolder();
            animationFocusPlaceHolderMove();
          }}
          onEndEditing={(e) => {
            typeof onEndEditing === 'function' ? onEndEditing(e.nativeEvent.text) : null;
            setFocus(false);
            if (input.length === 0) {
              animationUnFocus();
              animationUnFocusPlaceHolder();
              animationUnFocusPlaceHolderMove();
            }
          }}
          onChangeText={(value) => {
            setInput(value);
            typeof onChangeText === 'function' ? onChangeText(value) : null;
          }}
          cursorColor={colors.BaseSlot1}
          selectionColor={colors.BaseSlot1}
          style={{
            fontSize: 16,
            color: colors.BaseSlot1,
            fontFamily: 'Nunito-Regular',
          }}
        />
      )}

      {maskInput !== undefined && (
        <MaskInput
          value={input}
          style={{
            fontSize: 16,
            color: colors.BaseSlot1,
            fontFamily: 'Nunito-Regular',
            alignSelf: 'flex-start',
            width: '100%',
          }}
          textAlign={'left'}
          keyboardAppearance={colorScheme === 'dark' ? 'dark' : 'light'}
          keyboardType={keyboardType}
          placeholder=""
          onEndEditing={(masked, unmasked) => {
            typeof onEndEditing === 'function' ? onEndEditing(masked) : null;
            setFocus(false);
            if (input?.length === 0) {
              animationUnFocus();
              animationUnFocusPlaceHolder();
              animationUnFocusPlaceHolderMove();
            }
          }}
          onFocus={() => {
            typeof onFocus === 'function' ? onFocus() : null;
            setFocus(true);
            animationFocus();
            animationFocusPlaceHolder();
            animationFocusPlaceHolderMove();
          }}
          onChangeText={(masked, unmasked) => {
            setInput(masked);
            typeof onChangeText === 'function' ? onChangeText(masked) : null;
          }}
          mask={maskInput}
        />
      )}

      {secureTextEntry && (
        <Fontisto
          name={'eye'}
          style={{ position: 'absolute', top: 10, right: 10 }}
          color={!showSecureText ? colors.BaseSlot1 : 'gray'}
          onPress={() => {
            setShowSecureText(!showSecureText);
          }}
        />
      )}
    </View>
  );
};

export default InputDefaultBasicFilters;
