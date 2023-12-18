import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { View } from "react-native";

const useStyles = {
  starFill: {
    cursor: "pointer",
    transition: "color 200ms",
    position: "relative",
    zIndex: 2,
    top: 8.1
  },
  starContainer: {
    cursor: "pointer",
    transition: "color 200ms",
    position: "relative",
    zIndex: 1,
    top: -10.5
  }
};

const StarRating = ({ rating = 100, size = 200, ...props }) => {


  rating = (rating / 100) * size;

  return (
  <>
  <View style={{position:"relative"}}>
      <View style={[useStyles.starFill]}>
        <View style={{ width: rating, overflow:"hidden", }}>
          <FontAwesome name="star" color="black" size={size} />
        </View>
        <View style={{ width: size }}></View>
      </View>
      <View style={[useStyles.starContainer]}>
        <FontAwesome name="star-o" color="black" size={size} />
      </View>
  </View>
    </>
  );
};

export default StarRating;
