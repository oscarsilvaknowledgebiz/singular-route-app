import React, { useState } from "react";
import { Text, useColorScheme } from "react-native";
import style from "../../../style/Style";
import styleDark from "../../../style/StyleDark";
import { Container, BtnSelectFilter, StyledText, AreaFilter, Line } from "./styles";

export default function ButtonPrimary({ title, colorText, event }) {
  let colorScheme = useColorScheme();
  var styleSelected = colorScheme === "light" ? style : styleDark;
  var colors = require("../../../style/Colors.json");

  const [selectedButtons, setSelectedButtons] = useState([]);

  const handleButtonPress = (buttonNumber) => {
    if (selectedButtons.includes(buttonNumber)) {
      setSelectedButtons(selectedButtons.filter((btn) => btn !== buttonNumber));
    } else {
      setSelectedButtons([...selectedButtons, buttonNumber]);
    }
  };

  return (
    <Container>
      <AreaFilter>
        <BtnSelectFilter
          onPress={() => handleButtonPress(1)}
          isSelected={selectedButtons.includes(1)}
          buttonColor={selectedButtons.includes(1) ? "#ffcd01" : "#D9D9D9"}
        >
          <StyledText
            buttonColor={selectedButtons.includes(1) ? "#ffcd01" : "#000000"}
          >
            Category
          </StyledText>
        </BtnSelectFilter>
        <BtnSelectFilter
          onPress={() => handleButtonPress(2)}
          isSelected={selectedButtons.includes(2)}
          buttonColor={selectedButtons.includes(2) ? "#ffcd01" : "#D9D9D9"}
        >
          <StyledText
            buttonColor={selectedButtons.includes(2) ? "#ffcd01" : "#000000"}
          >
            Category
          </StyledText>
        </BtnSelectFilter>
        <BtnSelectFilter
          onPress={() => handleButtonPress(3)}
          isSelected={selectedButtons.includes(3)}
          buttonColor={selectedButtons.includes(3) ? "#ffcd01" : "#D9D9D9"}
        >
          <StyledText
            buttonColor={selectedButtons.includes(3) ? "#ffcd01" : "#000000"}
          >
            Category
          </StyledText>
        </BtnSelectFilter>
        <BtnSelectFilter
          onPress={() => handleButtonPress(4)}
          isSelected={selectedButtons.includes(4)}
          buttonColor={selectedButtons.includes(4) ? "#ffcd01" : "#D9D9D9"}
        >
          <StyledText
            buttonColor={selectedButtons.includes(4) ? "#ffcd01" : "#000000"}
          >
            Category
          </StyledText>
        </BtnSelectFilter>
      </AreaFilter>
      <AreaFilter style={{marginTop: "15%"}}>
        <BtnSelectFilter
          onPress={() => handleButtonPress(6)}
          isSelected={selectedButtons.includes(6)}
          buttonColor={selectedButtons.includes(6) ? "#ffcd01" : "#D9D9D9"}
        >
          <StyledText
            buttonColor={selectedButtons.includes(6) ? "#ffcd01" : "#000000"}
          >
            Category
          </StyledText>
        </BtnSelectFilter>
        <BtnSelectFilter
          onPress={() => handleButtonPress(7)}
          isSelected={selectedButtons.includes(7)}
          buttonColor={selectedButtons.includes(7) ? "#ffcd01" : "#D9D9D9"}
        >
          <StyledText
            buttonColor={selectedButtons.includes(7) ? "#ffcd01" : "#000000"}
          >
            Category
          </StyledText>
        </BtnSelectFilter>
        <BtnSelectFilter
          onPress={() => handleButtonPress(8)}
          isSelected={selectedButtons.includes(8)}
          buttonColor={selectedButtons.includes(8) ? "#ffcd01" : "#D9D9D9"}
        >
          <StyledText
            buttonColor={selectedButtons.includes(8) ? "#ffcd01" : "#000000"}
          >
            Category
          </StyledText>
        </BtnSelectFilter>
        <BtnSelectFilter
          onPress={() => handleButtonPress(9)}
          isSelected={selectedButtons.includes(5)}
          buttonColor={selectedButtons.includes(9) ? "#ffcd01" : "#D9D9D9"}
        >
          <StyledText
            buttonColor={selectedButtons.includes(9) ? "#ffcd01" : "#000000"}
          >
            Category
          </StyledText>
        </BtnSelectFilter>
      </AreaFilter>
      <Line/>

    
    
    </Container>
  );
}
