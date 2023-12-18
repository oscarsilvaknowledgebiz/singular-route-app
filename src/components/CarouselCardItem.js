import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from "react-native"
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons'

export const SLIDER_WIDTH = Dimensions.get('window').width + 10
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

// having problems using useColorScheme(), therefore I'm currently using styles in the component

const CarouselCardItem = ({ item, index }) => {
  return (
    <>
      
    <View style={styles.container} key={index}>
      {(index === 0) ? <>
      <Image
      source={ item.img }
      resizeMode="cover"
      style={[{width: 305, height: 253, alignSelf:"center"}]}
    />
    <Text style={{fontSize: 24, fontWeight: 600, marginTop: 65, alignSelf:"center"}}>First steps</Text>
    <Text style={{fontSize: 12, marginTop: 19, alignSelf:"center"}}>After completing these simple steps, you will be able to discover the best routes and have the best experience!</Text>
    </> : <></>}

    {(index === 1) ? <>
    <Text style={{fontSize: 24, fontWeight: 600, marginTop: 75, alignSelf:"center"}}>What we need from you</Text>
    <Text style={{fontSize: 12, marginTop: 13, alignSelf:"center"}}>To ensure that you will enjoy the best possible time during your stay, we just need your permission to track your location.</Text>
      <Image
      source={ item.img }
      resizeMode="contain"
      style={[{width: "100%", height: 253, alignSelf:"center", marginTop: 81}]}
    />
    </> : <></>}

    {(index === 2) && <>
    <View style={{height:500}}>
      <Image
      source={ item.img }
      // resizeMode="contain"
      style={[{width: 300, height: 273, alignSelf:"center"}]}
    />
    <Text style={{fontSize: 24, fontWeight: 600, marginTop: 65, alignSelf:"center"}}>Let's get started!</Text>
    <Text style={{fontSize: 12, marginTop: 19, alignSelf:"flex-start"}}><FontAwesome name='arrow-right' /> Create an account</Text>
    <Text style={{fontSize: 12, marginTop: 19, alignSelf:"flex-start"}}><FontAwesome name='arrow-right' /> Permissions</Text>
    </View>
    </>}
      

      {/* <Text style={styles.body}>{item.body}</Text> */}
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 20,
    flex: 1
  },
  image: {
    width: ITEM_WIDTH,
    height: "70%",
  },
  header: {
    color: "#222",
    fontSize: 28,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingTop: 20
  },
  body: {
    color: "#222",
    fontSize: 18,
    paddingLeft: 20,
    paddingRight: 20
  },
  textBold22DarkBlue: {
    fontSize: 22,
    fontWeight: 600,
    width: 300,
    color: "#030849",
    alignSelf:"center",
    textAlign: "center"
  },
})

export default CarouselCardItem