import React, { useState } from "react";
import { Text, useColorScheme } from "react-native";
import style from "../../../style/Style";
import styleDark from "../../../style/StyleDark";
import { Container, BtnSelect, StyledText } from "./styles";

export default function ButtonPrimary({ title, colorText, event }) {
  let colorScheme = useColorScheme();
  var styleSelected = colorScheme === "light" ? style : styleDark;
  var colors = require("../../../style/Colors.json");

  const [selectedButton, setSelectedButton] = useState('');


  const handleButtonPress = (buttonNumber) => {
    setSelectedButton(buttonNumber);

  };

  return (
    <Container>
      <BtnSelect
        onPress={() => handleButtonPress(1)}
        isSelected={selectedButton === 1}
        buttonColor={selectedButton === 1 ? "#ffcd01" : "#D9D9D9"}
      >
        <StyledText buttonColor={selectedButton === 1 ? "#ffcd01" : "#000000"}>
         Male
        </StyledText>
      </BtnSelect>
      <BtnSelect
        onPress={() => handleButtonPress(2)}
        isSelected={selectedButton === 2}
        buttonColor={selectedButton === 2 ? "#ffcd01" : "#D9D9D9"}
      >
        <StyledText buttonColor={selectedButton === 2 ? "#ffcd01" : "#000000"}>
         Female
        </StyledText>
      </BtnSelect>
      <BtnSelect
        onPress={() => handleButtonPress(3)}
        isSelected={selectedButton === 3}
        buttonColor={selectedButton === 3 ? "#ffcd01" : "#D9D9D9"}
      >
        <StyledText buttonColor={selectedButton === 3 ? "#ffcd01" : "#000000"}>
          Other
        </StyledText>
      </BtnSelect>
    </Container>
  );
}