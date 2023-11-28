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
            borderColor: "#7C7C7C",
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
        avatar: {
            paddingTop: 20,
            height: 75,
            width: 75,
            borderRadius: 100,
            padding: 20,
          },
          plusCircleAvatar: {
            borderRadius:30,
            padding:5,
            position:"absolute",
            left:"54%",
            top:"65%", 
            position: "absolute",
            backgroundColor: colors.BaseSlot3,
            shadowOffset: {
                height: 3,
                width: 2
            },
            shadowColor:"#878787",
          },
    }
)

export default style