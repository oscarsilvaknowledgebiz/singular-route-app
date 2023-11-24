// src/screens/ProfileScreen/styles.js
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Adicione a cor de fundo da sua tela
  },
  form: {
    padding: 20,
    // ... Adicione outros estilos que você precisa para o formulário
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    // ... Adicione outros estilos para o título
  },
  // ... Aqui você pode adicionar mais estilos específicos para os componentes na tela
});

export const Label = styled.Text`
color: #7c7c7c;
font-size: 16px;
font-weight: 700;
left: 0;
letter-spacing: 0;
line-height: 24px;
position: fixed;
top: 0;
`
