import React, { useState } from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const ProfilePictureScreen = () => {
  const [profilePicture, setProfilePicture] = useState(null);

  // Function to handle the image selection
  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setProfilePicture(result.uri);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity onPress={pickImage}>
        <View style={{ position: 'relative' }}>
          {profilePicture ? (
            <Image source={{ uri: profilePicture }} style={{ width: 100, height: 100, borderRadius: 50 }} />
          ) : (
            <View style={{ width: 100, height: 100, borderRadius: 50, backgroundColor: '#ccc' }} />
          )}
          <View style={{ position: 'absolute', top: 75, left: 75, padding: 5, backgroundColor: 'white', borderRadius: 25 }}>
            <TouchableOpacity onPress={pickImage}>
              <Image source={require('../../assets/images/pen.png')} style={{ width: 15, height: 15 }} resizeMode='contain' />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProfilePictureScreen;
