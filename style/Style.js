import { Platform, StyleSheet } from 'react-native';
const colors = require('../style/Colors.json');
const style = StyleSheet.create(
    {
        backgroundPrimary: { backgroundColor: colors.BaseSlot1 },
        backgroundPrimaryLogin: {
            backgroundColor: colors.BaseSlot3
        },
        textNormal16: {
            fontSize: 16,
            fontWeight: 400
        },
        textNormal32: {
            fontSize: 32,
            fontWeight: 700
        },
        textNormal24: {
            fontSize: 24,
            fontWeight: 600
        },
        button: {
            backgroundColor: colors.BaseSlot1,
            height: 60,
            width: "100%",
            borderRadius: 10,
            alignSelf: "center",
            justifyContent: "center",
            alignItems: "center"
        },
        ButtonChoicePrimary: {
            backgroundColor: colors.BaseSlot1,
            height: 24,
            width: 76,
            borderRadius: 10,
            alignSelf: "center",
            justifyContent: "center",
            alignItems: "center"
        },
        textbutton: {
            color: 'white',
        },
        button2: {
            height: 60,
            width: "100%",
            borderRadius: 10,
            alignSelf: "center",
            borderColor: colors.BaseSlot4,
            borderWidth: 1,
            justifyContent: "center",
            alignItems: "center"
        },
        textbutton2: {
            color: 'black'
        },
        textbutton3: {
            color: colors.BaseSlot1
        },
        WelcomeImage: {
            flex: 1,
            width: '100%',

        },

        //text
        textNormal18: {
            fontSize: 18,
            fontWeight: 500
        },
        textNormal20: {
            fontSize: 20,
            fontWeight: 700
        }
    }
)

export default style