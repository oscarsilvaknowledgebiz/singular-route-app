// src/components/GenderSelect.js
import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const GenderSelect = ({ onSelect }) => {
  const [selectedGender, setSelectedGender] = useState(null);

  const handleSelect = (gender) => {
    setSelectedGender(gender);
    onSelect(gender);
  };

  return (
    <View style={styles.container}>
      {['Male', 'Female', 'Other'].map((gender) => (
        <TouchableOpacity
          key={gender}
          style={[styles.button, selectedGender === gender && styles.selectedButton]}
          onPress={() => handleSelect(gender)}
        >
          <Text style={styles.buttonText}>{gender}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  button: {  
    borderRadius: 3,
    backgroundColor: '#D9D9D9',
    width: 76,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center'
  },
  selectedButton: {
    backgroundColor: '#FFD700', 
  },
  buttonText: {
    fontSize: 12,
    color: '#FFF'
    
  },
});

export default GenderSelect;
