import React from "react";
import { View,Text, TouchableOpacity, useColorScheme } from "react-native";
import style from '../../style/Style'
import styleDark from '../../style/StyleDark'
import DateTimePicker from '@react-native-community/datetimepicker';
/***
 * @param placeholder: string - Text that will appear as placeholder
 * @param date: Date - Value for date picker
 * @param showPicker: boolean - Display the date picker when true. Default is false
 * @param onDateChange: function - Function that will execute when a date is chosen in the date picker
 * @param viewWidth: string or integer - width of the View element. Defaults to "100%"
 * @param event: any
 */

export default function DatePicker(
    { 
        placeholder,
        date=new Date(),
        showPicker=false,
        onDateChange,
        viewWidth="100%",
        event 
    }) {

    //placeholder: 
    let colorScheme = useColorScheme()
    var styleSelected = colorScheme == 'light' ? style : styleDark
    var colors = require('../../style/Colors.json')
    return (
        <View style={{width: viewWidth}}>
            <TouchableOpacity
            onPress={() => {
                if (typeof event == "function")
                    event()
            }}
            style={{
                backgroundColor: colors.BaseSlot3,
                paddingTop:5,
                paddingBottom:5,
                flexDirection: "row",
                width: "100%",
                alignSelf: "flex-start",
                borderWidth: 0.5,
                borderRadius: 10,
                borderColor: colors.BaseSlot5,
                alignItems: "center",
                justifyContent: "center"
              }}>
            <Text style={{fontSize:13, fontWeight:300, textAlign:"center",}}>
                {date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()}
            </Text>
        </TouchableOpacity>
            {showPicker && (<DateTimePicker
            value={date}
            onChange={onDateChange}
            
            
            />)}
        </View>
    )
}