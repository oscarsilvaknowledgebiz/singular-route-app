import React from "react";
import { Container, BtnVoltarArea, BtnVoltar, TitleMain } from "./styles";

export default ({title}) => {
  return (
    <Container>
      <BtnVoltarArea>
        <BtnVoltar />
      </BtnVoltarArea>
      <TitleMain>{title}</TitleMain>
    </Container>
  );
};
