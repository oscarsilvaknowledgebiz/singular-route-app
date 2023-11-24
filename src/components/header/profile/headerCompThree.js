import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container, Back, ProgressFull, ProgressEmpty } from './styles';

export default () => {

  return (
    <Container>
      <Back />
      <ProgressFull />
      <ProgressFull />
      <ProgressFull />
    </Container>
  );
};