import React, { useEffect, useState } from "react";
import { Pressable, Text, TouchableOpacity, useColorScheme, Image, View, Share } from "react-native";
import style from '../../style/Style'
import styleDark from '../../style/StyleDark'
import { MapPinImage } from "../view/home/Styles";
import StarRating from "./StarRating";

export default function HighlightedEvent({ id, image, date, name, location, starRating, isNew, hasLike, event, likeEvent, changeIcon }) {
    let colorScheme = useColorScheme()
    var styleSelected = colorScheme == 'light' ? style : styleDark
    var colors = require('../../style/Colors.json')
    const [heartIcon, setHeartIcon] = useState({ name: "heart-o", path: require("../../assets/images/heartOutline.png"), color: "#333538" })

    const changeHeart = () => {
        if (heartIcon.name === "heart-o") {
            setHeartIcon({ name: "heart", path: require("../../assets/images/heart.png"), color: "#CB1000" })
            likeEvent(id, 1, 1)
        }
        else {
            setHeartIcon({ name: "heart-o", path: require("../../assets/images/heartOutline.png"), color: "#333538" })
            likeEvent(id, 0, 1)
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
        if (hasLike) {
            setHeartIcon({ name: "heart", path: require("../../assets/images/heart.png"), color:"#CB1000" })
        }
        else {
            setHeartIcon({ name: "heart-o", path: require("../../assets/images/heartOutline.png"), color:"#333538" })

        }
    }, [changeIcon])

    return (
        <TouchableOpacity onPress={event} style={{ flex: 1, backgroundColor:"#F2F2F2", borderRadius: 10 }}>
            <View style={{ flex: 0.5, }}>
                <Image source={{ uri: image }} style={{ width: "100%", height: "100%", borderTopLeftRadius: 10, borderTopRightRadius: 10 }} resizeMode='cover' />
                {isNew && <View style={{position: "absolute", backgroundColor:"#30D969", borderRadius:3, right:-3, top: -5, padding: 3 }}>
                        <Text style={{color:"white", fontSize: 12 }}>New</Text>
                    </View>}
            </View>

            <View style={{ flex: 0.5 }}>

                <View style={{ flex: 1, margin: 11, marginRight:0 }}>
                    <View style={{ flex: 0.2, justifyContent: "center" }}>
                        <Text numberOfLines={1} style={{ fontSize: 12, color: "#262627" }}>{date}</Text>
                    </View>
                    <View style={{ flex: 0.25, justifyContent: "center" }}>
                        <Text numberOfLines={1} style={{ fontSize: 16, fontWeight: 700, color: "#262627", }} >{name}</Text>
                    </View>
                    <View style={{ flexDirection: "row", flex: 0.25, alignItems: "center" }}>
                        <MapPinImage source={require("../../assets/images/mapPin.png")} />
                        <Text numberOfLines={1} style={{ fontSize: 12, color: "#262627" }}> {location}</Text>
                    </View>
                    <View style={{ flex: 0.3, flexDirection: "row" }}>
                        <View style={{ flex: 0.75 }} />
                        <View style={{ flex: 0.25, flexDirection: "row",}}>
                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", flex: 0.34}}>
                                {/* <Text style={{ fontWeight: 300, fontSize: 20 }}>{starRating} </Text> */}
                                {/* <Image source={require("../../assets/images/StarFull.png")} style={{ height: 22, width: 20 }} /> */}
                                <StarRating size={18} rating={(starRating*20)}/>
                            </View>
                            <TouchableOpacity onPress={() => changeHeart()} style={{ flex: 0.33, justifyContent: "center", alignItems: "center" }}>
                                <Image resizeMode="contain" source={heartIcon.path} style={{ height: 18, width: 18, tintColor: heartIcon.color }} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => shareEvent()} style={{ flex: 0.33, justifyContent: "center", alignItems: "center" }}>
                                <Image source={require("../../assets/images/shareOutline.png")} style={{ height: 18, width: 18 }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

            </View>

        </TouchableOpacity>
    )
}