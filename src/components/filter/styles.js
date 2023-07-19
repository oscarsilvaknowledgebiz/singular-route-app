import React from "react";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  margin-top: 3%;
  flex-direction: row;
  margin-bottom: 40%;
`;

export const BtnSelect = styled.TouchableOpacity`
  width: 100px;
  height: 30px;
  border-radius: 5px;
  margin: 3%;
  background-color: ${(props) => props.buttonColor};
`;

export const AreaFilter = styled.View`
width: 100%;
margin-left: -18px;
margin-right: auto;
flex-direction: row;
`

export const Line = styled.View`
width: 100%;
margin-top: 30%;
border: 0.7px solid;
border-color: #d9d9d9;


`

export const BtnSelectFilter = styled.TouchableOpacity`
  width: 90px;
  height: 30px;
  border-radius: 5px;
  margin-right: 3%;
  background-color: ${(props) => props.buttonColor};
`;

export const StyledText = styled.Text`
text-align: center;
margin-top: 6%;
font-size: 15px;
color: ${(props) => props.buttonColor === "#ffcd01" ? "#FFFFFF" : "#000000"};
 
`;


