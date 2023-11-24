// src/screens/ProfileScreen/index.js
import React, { useState } from 'react';
import { ScrollView, View, Text } from 'react-native';
import HeaderProgress from '../../components/header/profile/headerCompThree';
import { styles, Label } from './styles';
import ButtonPrimaryComp from '../../components/buttons/ButtonBlueComp';

const ProfileScreen = () => {
  const [gender, setGender] = useState('');

  const handleBackPress = () => {
    // Função para lidar com o pressionar do botão de retorno
    console.log('Back pressed!');
  };

  

  return (
    <ScrollView style={styles.container}>
      <HeaderProgress />
      <View style={styles.form}>
        <Text style={styles.title}>Tell us a little bit about yourself</Text>

      


        <ButtonPrimaryComp textbutton="Save" />
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
