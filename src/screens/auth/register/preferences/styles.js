import React from "react";
import styled from "styled-components/native";
import StepFull from "../../../../../assets/images/stepFull.svg";
import StepEmpty from "../../../../../assets/images/stepEmpt.svg";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

export const AreaView = styled.SafeAreaView`
  margin: 8%;
`;

export const AreaHeaderView = styled.SafeAreaView`
  flex-direction: row;
`;

export const TextSimple = styled.Text`
  color: #000;
  margin-top: 5%;
  font-weight: 600;
  font-size: 30px;
`;

export const AreaViewInput = styled.SafeAreaView`
  margin-top: 10%;
`;

export const TextInput = styled.Text`
  color: #7c7c7c;
  font-weight: 800;
  font-size: 18px;
  margin-bottom: -10px;
`;

export const InputPassword = styled.View`
  margin-top: 8px;
`;

export const AreaGender = styled.View`
  flex-direction: row;
  margin-top: 4%;
  margin-bottom: 6%;
`;

export const Full = styled(StepFull)`
  margin: 4%;
`;
export const Empty = styled(StepEmpty)`
  margin: 4%;
`;

export const AreaIconView = styled.View`
  flex-direction: row;

  margin-top: 5%;
  justify-content: center;
  margin-bottom: 7%;
`;
export const BtnIconArea = styled.TouchableOpacity`
  margin: 0 5%;
`;

export const TextName = styled.Text`
  font-size: 22px;
  font-weight: 700;
  margin-top: 3% !important;
  color: #000 !important;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
`;
export const TextEmail = styled.Text`
  font-size: 18px;
  font-weight: 200;
  color: #000 !important;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
`;
