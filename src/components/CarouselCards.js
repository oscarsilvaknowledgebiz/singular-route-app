import React, { useRef, useState } from "react";
import { View,Text, useColorScheme, TouchableOpacity } from "react-native";
import style from '../../style/Style'
import styleDark from '../../style/StyleDark'
import Carousel, { Pagination } from "react-native-snap-carousel"
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from './CarouselCardItem'
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";

export default function CarouselCards({nextScreen}) {
    let colorScheme = useColorScheme()
    var styleSelected = colorScheme == 'light' ? style : styleDark
    var colors = require('../../style/Colors.json')
    
    const [index, setIndex] = useState(0)
    const data = [
        {title: "Xxxxx xxxx xxxx xx xxxxxxx xx xxxx xxx xxxxxxxxxx xxxxxxx xxxxxxxxx xxxxxxxx",img:require('../../assets/images/FirstSteps1.png')},
        {title: "Xxxxx xxxx xxxx xx xxxxxxx xx xxxx xxx xxxxxxxxxx xxxxxxx xxxxxxxxx xxxxxxxx",img:require('../../assets/images/FirstSteps2.png')},
        {title: "Xxxxx xxxx xxxx xx xxxxxxx xx xxxx xxx xxxxxxxxxx xxxxxxx xxxxxxxxx xxxxxxxx",img:require('../../assets/images/FirstSteps3.png')}
      ];

      const isCarousel = useRef(0)

    return (
        <View>
          <TouchableOpacity style={{position:"absolute", marginLeft: 32, marginTop:19}} onPress={() => {isCarousel.current.snapToItem(index-1)}}>
            <MaterialCommunityIcons  name="arrow-left" size={32} />
            </TouchableOpacity>
          <Pagination
            dotsLength={data.length}
            activeDotIndex={index}
            carouselRef={isCarousel}
            dotStyle={{
                width: 73,
                height: 10,
                borderRadius: 0,
                marginHorizontal: 0,
                marginRight:0,
                backgroundColor: colors.BaseSlot1
            }}
            inactiveDotScale={1}
            inactiveDotStyle={{backgroundColor: "#D9D9D9"}}
            tappableDots={true}
          />
          <Carousel scrollEnabled={false}
            layout="tinder"
            layoutCardOffset={9}
            ref={isCarousel}
            data={data}
            renderItem={CarouselCardItem}
            sliderWidth={SLIDER_WIDTH}
            itemWidth={ITEM_WIDTH}
            inactiveSlideShift={0}
            onSnapToItem={(index) => setIndex(index)}
            useScrollView={true}
            inactiveSlideOpacity={0}
            inactiveSlideScale={0}
          />
          <TouchableOpacity onPress={() => {index !== 2 ? isCarousel.current.snapToNext() : nextScreen()}} style={{
            marginTop: 108,
            width: 317,
            alignItems: 'center',
            alignSelf:"center",
            justifyContent: 'center',
            paddingVertical: 18,
            borderRadius: 10,
            backgroundColor: '#FFCD01',}}>
            <Text style={{
              fontSize: 16,
              // fontWeight: 500,
              color: 'white',
              }}>{index === 0 && "Next Step"} {index === 1 && "Next"} {index === 2 && "Confirm"} </Text>
          </TouchableOpacity>
          
        </View>
      )
}