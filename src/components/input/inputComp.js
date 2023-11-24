
import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const FormInput = (props) => {
  return <TextInput style={styles.input} {...props} />;
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#000', 
    marginBottom: 30,
    fontSize: 16,
  
  },
});

export default FormInput;
