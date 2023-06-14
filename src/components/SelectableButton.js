import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Colors from '../../style/Colors.json';

const SelectableButton = ({ label, onPress }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handlePress = () => {
    if (isSelected) {
      setIsSelected(false);
      console.log(`${label} has been deselected`); // Log the button label when deselected
    } else {
      setIsSelected(true);
      onPress();
      console.log(`${label} was pressed`); // Log the button label when pressed
    }
  };

  const buttonStyle = isSelected ? [styles.button, styles.selectedButton] : styles.button;
  const labelStyle = isSelected ? [styles.label, styles.selectedLabel] : styles.label;

  return (
    <TouchableOpacity style={buttonStyle} onPress={handlePress}>
      <Text style={labelStyle}>{label}</Text>
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
    right: 32,
    marginTop: 10 // Adjust the margin between buttons vertically
  },
  selectedButton: {
    borderColor: Colors.BaseSlot1,
    backgroundColor: Colors.BaseSlot1,
  },
  label: {
    color: 'black',
  },
  selectedLabel: {
  },
});

export default SelectableButton;
