// src/screens/ProfileScreen/index.js
import React, { useState } from 'react';
import { ScrollView, View, Text } from 'react-native';
import HeaderProgress from '../../components/header/profile/headerComp';
import FormInput from '../../components/input/inputComp';
import GenderSelect from '../../components/GenderSelect';
import { styles, Label } from './styles';
import ButtonPrimaryComp from '../../components/buttons/ButtonBlueComp';

const ProfileScreen = () => {
  const [gender, setGender] = useState('');

  const handleBackPress = () => {
    // Função para lidar com o pressionar do botão de retorno
    console.log('Back pressed!');
  };

  const handleGenderSelect = (selectedGender) => {
    setGender(selectedGender);
    // Aqui você pode fazer algo com o gênero selecionado
    console.log('Gender selected:', selectedGender);
  };

  return (
    <ScrollView style={styles.container}>
      <HeaderProgress />
      <View style={styles.form}>
        <Text style={styles.title}>Tell us a little bit about yourself</Text>

       <Label>Home address</Label>
        <FormInput placeholder="Home address" />
        <Label>Nationality</Label>
        <FormInput placeholder="Nationality" />
        <Label>Birth date</Label>
        <FormInput placeholder="Birth date" />
        <Label>Gender</Label>
        <GenderSelect onSelect={handleGenderSelect} />


        <ButtonPrimaryComp textbutton="Next" />
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
