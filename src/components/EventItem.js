import React, {useEffect, useState} from "react";
import { Pressable, Text, TouchableOpacity, useColorScheme, Image, View } from "react-native";
import style from '../../style/Style'
import styleDark from '../../style/StyleDark'
import { MapPinImage } from "../view/home/Styles";
import StarRating from "./StarRating";
import * as Sharing from "expo-sharing"
import { Share } from "react-native";


export default function EventItem({ id, image, date, name, location, starRating, isNew, hasLike, event, likeEvent, changeIcon }) {
    let colorScheme = useColorScheme()
    var styleSelected = colorScheme == 'light' ? style : styleDark
    var colors = require('../../style/Colors.json')
    const [heartIcon, setHeartIcon] = useState({ name:"heart-o", path: require("../../assets/images/heartOutline.png"), color: "#333538"})

    const changeHeart = () => {
        if (heartIcon.name === "heart-o") {
            setHeartIcon({ name: "heart", path: require("../../assets/images/heart.png"), color:"#CB1000" })
            likeEvent(id, 1)
        }
        else {
            setHeartIcon({ name:"heart-o", path: require("../../assets/images/heartOutline.png"), color: "#333538"})
            likeEvent(id, 0)
        }
    }

    const shareEvent = () => {
        Share.share({message: encodeURI(`https://www.google.com/maps/search/${name}/`)})
    }

    useEffect(() => {
        if (hasLike) {
            setHeartIcon({ name: "heart", path: require("../../assets/images/heart.png"), color:"#CB1000" })
        }
    }, [])

    useEffect(() => {
        if (heartIcon.name === "heart-o") {
            setHeartIcon({ name: "heart", path: require("../../assets/images/heart.png"), color:"#CB1000" })
        }
        else {
            setHeartIcon({ name: "heart-o", path: require("../../assets/images/heartOutline.png"), color:"#333538" })

        }
    }, [changeIcon])

    return (
        <View style={{ height: 84 }}>
            <TouchableOpacity onPress={event} style={{ flex: 1, flexDirection: "row" }}>

                <View style={{flex:0.24}}>
                    <Image source={{ uri: image ? image : null}} resizeMode="cover" style={{ width: 89, height: 84, borderRadius:10 }} />
                    {isNew && <View style={{position: "absolute", backgroundColor:"#30D969", borderRadius:3, right:-3, top: -5, padding: 3 }}>
                        <Text style={{color:"white", fontSize: 12 }}>New</Text>
                    </View>}
                </View>

                <View style={{ flex: 0.52, }}>
                    <View style={{ flex: 0.34, justifyContent: "center", marginLeft:5 }}>
                        <Text numberOfLines={1} style={{ fontSize: 12, color: "#262627" }}>{date}</Text>
                    </View>
                    <View style={{ flex: 0.33, justifyContent: "center", marginLeft:5 }}>
                        <Text numberOfLines={1} style={{ fontSize: 16, color: "#262627", fontWeight: 700 }}>{name}</Text>
                    </View>
                    <View style={{ flex: 0.33, width:"96%", flexDirection: "row", alignItems: "center", marginLeft:5 }}>
                        <MapPinImage source={require("../../assets/images/mapPin.png")} resizeMode="contain"/>
                        <Text numberOfLines={1}>{location}</Text>
                    </View>
                </View>

                <View style={{ flex: 0.24, flexDirection: "row" }}>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", flex: 0.34 }}>
                        {/* <Text style={{ fontWeight: 300, fontSize: 20 }}>{starRating} </Text> */}
                        {/* <Image source={require("../../assets/images/StarHalf.png")} style={{ height: 22, width: 20 }} /> */}
                        <StarRating size={18} rating={(starRating*20)}/>
                    </View>
                    <TouchableOpacity onPress={() => changeHeart()} style={{ flex: 0.33, justifyContent: "center", alignItems: "center" }}>
                        <Image resizeMode="contain" source={heartIcon.path} style={{ height: 18, width: 18 , tintColor: heartIcon["color"] ? heartIcon["color"] : ""}} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => shareEvent()} style={{ flex: 0.33, justifyContent: "center", alignItems: "center" }}>
                        <Image source={require("../../assets/images/shareOutline.png")} style={{ height: 18, width: 18 }} />
                    </TouchableOpacity>
                </View>

            </TouchableOpacity>

        </View>
    )
}