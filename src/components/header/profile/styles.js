import React from 'react';
import styled from 'styled-components/native';
import Imagem from '../../../../assets/images/icon/back.svg';
import BarYellow from '../../../../assets/images/icon/yellow';
import BarGray from '../../../../assets/images/icon/gray';


export const Container = styled.SafeAreaView`
flex-direction: row;
margin-top: 10%;
align-items: center;
padding: 10%;
`;

export const Back = styled(Imagem)`    
    padding: 5%;
    margin-left: 5%;
    margin-right: 3%;

`;

export const ProgressFull = styled(BarYellow)`  
margin: 2%;
    
`;

export const ProgressEmpty = styled(BarGray)`    
    margin: 2%;
`;



export const LoadingIcon = styled.ActivityIndicator`
   margin-top: 10%;
`;