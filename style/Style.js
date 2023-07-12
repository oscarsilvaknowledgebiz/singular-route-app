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
        textNormal14:{
            fontSize: 14,
            fontWeight: 400,
            fontFamily: 'Inter'
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

        textNormal18: {
            fontSize: 18,
            fontWeight: 500
        },
        textNormal20:{
            fontSize: 20,
            fontWeight: 700
        },

        textNormal12: {
            fontSize: 12,
            fontWeight: 400
        },
        EventImage: {
            width: '100%',
            height: '100%',
        },
        ScrollView:{
            marginHorizontal: 0
        },
checkbox: {
            margin: 5
          },
search_not_menu: {
            width: 16,
            height: 16
        },
        buttonfilter: {
            width: 63,
            height: 28,
            backgroundColor: '#F0F0F0',
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 9
        },
        textNormalFilter: {
            fontSize: 12,
            fontWeight: 400
        },
        buttonfilterprimary: {
            width: 63,
            height: 28,
            backgroundColor: colors.BaseSlot1,
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 12
        },
        generalImage: {
            width: 90,
            height: 90
        },
        map_pin: {
            width: 10,
            height: 12
        },
        heartButton: {
            width: 18,
            height: 16
        },
        shareButton: {
            width: 18,
            height: 18
        },
        dropdown: {
            height: 16,
            width: 16
        },
        seperator: {
            height: 1,
            width: '100%',
            backgroundColor: '#E9E9E9',
            dotted: 9
        },
        stickyfooter: {
            position: 'fixed'
        },
        container: {
            backgroundColor: '#ffffff',
            borderRadius: 8,
            padding: 16,
            marginVertical: 8,
            shadowColor: '#000000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 2,
        },
        title: {
            fontSize: 18,
            fontWeight: 'bold',
            marginBottom: 8,
        },
        date: {
            fontSize: 14,
            marginBottom: 4,
        },
        location: {
            fontSize: 14
        },
        resetButton: {
            height: 60,
            width: "30%",
            borderRadius: 10,
            alignSelf: "center",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: 'auto'
        },

        dropdownContainer: {
            backgroundColor: 'white',
            width: 200, // Increase the width value as needed
            maxWidth: '80%', // Optionally, you can use a percentage value instead of an absolute width
            maxHeight: 724,
            marginLeft: 'auto',
            justifyContent: 'center', // Center the buttons vertically
            alignItems: 'center', // Center the buttons horizontally
            overflow: 'hidden',
        },
    }
)

export default style