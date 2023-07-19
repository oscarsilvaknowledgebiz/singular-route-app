import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Colors from '../../../style/Colors.json';

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
      <Text style={labelStyle} numberOfLines={1}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginVertical: 10, // Adjust the margin between buttons vertically
    marginHorizontal: 6, // Adjust the margin between buttons horizontally
    justifyContent: 'center',
    height: 30,
    borderRadius: 10,
    borderColor:Colors.BaseSlot1,
    borderWidth: 0.5,
    backgroundColor: '#FFFBFB',
    width: 170, // Increase the width of the button
    paddingHorizontal: 10, // Add padding to the left and right of the button
    minWidth: 80, // Set a minimum width for the button
    marginLeft: 20
  },
  selectedButton: {
    borderColor: 'white',
    backgroundColor: Colors.BaseSlot1
  },
  label: {
    color: 'black',
    alignSelf: 'flex-start', // Align the label to the left
    flexWrap: 'wrap', // Allow text to wrap within the button
    paddingHorizontal: 5, // Add padding to the text inside the button
    paddingBottom: 5, // Add padding to the text inside the button
  },
  selectedLabel: {},
});

export default SelectableButton;
