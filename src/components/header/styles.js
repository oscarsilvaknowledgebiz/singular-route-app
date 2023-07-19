import React from "react";
import styled from "styled-components/native";
import IconVoltar from "../../../assets/images/icons/iconBack.svg";

export const Container = styled.SafeAreaView`
  flex-direction: row;
`;

export const BtnVoltarArea = styled.TouchableOpacity``;

export const BtnVoltar = styled(IconVoltar)``;

export const TitleMain = styled.Text`
  font-size: 25px;
  color: #000;
  font-weight: 700;
  text-align: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5%;
`;
