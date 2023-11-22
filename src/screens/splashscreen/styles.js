import React from 'react';
import styled from 'styled-components/native';
import Imagem from '../../../assets/images/logo.svg';


export const Container = styled.SafeAreaView`
background-color: #FFCD01;
flex: 1;
justify-content: center;
align-items: center;

`;

export const Logo = styled(Imagem)`    
    
`;

export const LoadingIcon = styled.ActivityIndicator`
   margin-top: 10%;
`;