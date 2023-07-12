import React from "react";
import styled from "styled-components/native";
import IconFacebook from "../../../assets/images/icons/iconFacebook.svg";
import IconApple from "../../../assets/images/icons/iconApple.svg";
import IconGoogle from "../../../assets/images/icons/iconGoogle.svg";


export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

export const AreaView = styled.SafeAreaView`
  margin: 8%;
`;

export const TextSimple = styled.Text`
  color: #000;
  margin-top: 20%;
  font-weight: 600;
  font-size: 24px;
`;

export const AreaViewInput = styled.SafeAreaView`
margin-top: 15%;
`;

export const TextInput = styled.Text`
  color: #7C7C7C;
  font-weight: 800;
  font-size: 18px;
  margin-bottom: 2%;
`;

export const TextRemember = styled.Text`
color: #7C7C7C;

font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px;
`;


export const InputPassword = styled.View`
    margin-top: 8px; 
`;


export const AreaRemember = styled.View`
   flex-direction: row;
   margin-top: 3%;
`;


export const BtnFacebook = styled(IconFacebook)`
margin-top: 18%;
`;
export const BtnApple = styled(IconApple)``;
export const BtnGoogle = styled(IconGoogle)`
margin-top: 37%;`;


export const AreaIconView = styled.View`
   flex-direction: row;

   margin-top: 10%;
   justify-content: center;
   margin-bottom: 30%;
  
`;
export const BtnIconArea = styled.TouchableOpacity`
margin: 0 5%;
`;


