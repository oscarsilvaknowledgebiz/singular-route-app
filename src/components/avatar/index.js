import React, { useState, useEffect } from "react";
import {
  Image,
  View,
  Platform,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
export default function UploadImage() {
  const [image, setImage] = useState(null);
  const addImage = () => {};
  return (
    <View style={imageUploaderStyles.container}>
      {image && (
        <Image source={{ uri: image }} style={{ width: 150, height: 150 }} />
      )}
      <View style={imageUploaderStyles.uploadBtnContainer}>
        <TouchableOpacity
          onPress={addImage}
          style={imageUploaderStyles.uploadBtn}
        >
          <Entypo name="camera" size={20} color="black" style={{marginTop: 10}} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
const imageUploaderStyles = StyleSheet.create({
  container: {
    elevation: 2,
    height: 130,
    width: 130,
    backgroundColor: "#efefef",
marginLeft: 'auto',
marginRight: 'auto',
    borderRadius: 999,
    overflow: "hidden",
  },
  uploadBtnContainer: {
    opacity: 0.7,
    position: 'absolute',
    backgroundColor: "#FFF",
    right: 0,
    bottom: 0,
    zIndex: 999,
    width: "100%",
    height: "30%",
  },
  uploadBtn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
