import React from 'react';
import styled from 'styled-components/native';
import Imagem from '../../../assets/images/welcome.svg';

export const Container = styled.SafeAreaView`
background-color: #FFF;
flex: 1;
justify-content: center;
align-items: center;
`;

export const BtnAreaView = styled.View`
position: absolute;
bottom: 0;

`;
export const BtnAreaViewTwo = styled.View`
position: absolute;
bottom: 0;
margin-bottom: 10%;

`;

export const ImagemWelcome = styled(Imagem)` 
width: 300px !important;   
    
`;

export const Title = styled.Text` 
color: #000000;
font-size: 32px;
font-weight: 700;
top: 0;
letter-spacing: 0;
line-height: 38.4px;
position: absolute;

margin-top: 20%;
    
`;

export const Subtitle = styled.Text` 
color: #7c7c7c;
font-size: 16px;
font-weight: 400;
top: 0;
letter-spacing: 0;
line-height: 24px;
position: absolute;
text-align: center;
margin-top: 32%;
    
`;


