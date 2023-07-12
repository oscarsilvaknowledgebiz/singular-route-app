import React from "react";
import styled from "styled-components/native";
import IconVoltar from "../../../assets/icons/iconBack.svg";

export const Container = styled.SafeAreaView`
  flex-direction: row;
  margin-top: 10%;
`;

export const BtnVoltarArea = styled.TouchableOpacity`
  padding-left: 5%;
  padding-right: 5%;

  
`;

export const BtnVoltar = styled(IconVoltar)``;

export const TitleMain = styled.Text`
  font-size: 25px;
  color: #000;
  font-weight: 700;
  text-align: center;
  justify-content: center;

`;
