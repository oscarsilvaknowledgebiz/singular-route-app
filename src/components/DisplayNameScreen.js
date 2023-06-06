import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';

const DisplayNameScreen = ({ displayName, setDisplayName }) => {
  const [editing, setEditing] = useState(false);
  const [tempName, setTempName] = useState(displayName);

  const startEditing = () => {
    setEditing(true);
  };

  const finishEditing = () => {
    setEditing(false);
    setDisplayName(tempName);
  };

  const handleNameChange = (text) => {
    setTempName(text);
  };

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      {editing ? (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image
            source={require('../../assets/images/pen.png')}
            style={{ width: 20, height: 20, marginRight: 8 }}
          />
          <TextInput
            style={{ borderWidth: 1, borderColor: 'gray', padding: 10, flex: 1 }}
            placeholder="Click here to insert a name"
            value={tempName}
            onChangeText={handleNameChange}
          />
          <TouchableOpacity onPress={finishEditing}>
            <Text style={{ color: 'blue', marginLeft: 8 }}>Save</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity onPress={startEditing}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              source={require('../../assets/images/pen.png')}
              style={{ width: 20, height: 20, marginRight: 8 }}
            />
            <Text style={{ fontSize: 16, color: displayName ? 'black' : 'gray' }}>
              {displayName || 'Click here to insert a name'}
            </Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default DisplayNameScreen;
