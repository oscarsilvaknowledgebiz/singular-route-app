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
    height: 24,
    width: 76,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: '#D9D9D9',
    marginTop: 10,
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
