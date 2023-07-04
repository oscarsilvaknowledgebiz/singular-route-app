import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Colors from '../../style/Colors.json';


const RadioButtonSelectableButton = ({ label, onPress, selected }) => {
  return (
    
    <TouchableOpacity style={[styles.button, selected && styles.selectedButton]} onPress={onPress}>
      <Text style={[styles.label, selected && styles.selectedLabel]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#E7E7E7',
    marginTop: 10,
    margin: 5,
    minWidth: 63, // Set a minimum width for the button
    paddingHorizontal: 10, // Add horizontal padding to accommodate larger content
  },
  selectedButton: {
    borderColor: Colors.BaseSlot1,
    backgroundColor: Colors.BaseSlot1,
  },
  label: {
    color: 'black',
  },
  selectedLabel: {
    color: 'white',
  },
});

export default RadioButtonSelectableButton;
