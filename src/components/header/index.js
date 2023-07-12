import React from "react";
import { Container, BtnVoltarArea, BtnVoltar, TitleMain } from "./styles";

export default () => {
  return (
    <Container>
      <BtnVoltarArea>
        <BtnVoltar />
      </BtnVoltarArea>
      <TitleMain>Where do you want to go?</TitleMain>
    </Container>
  );
};
