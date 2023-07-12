import React from "react";
import { Container, ButtonArea, AreaMap } from "./styles";
import Header from "../../components/header/index";
import ButtonPrimary from "../../components/buttons/ButtonPrimary";
import MapaConfig from "../../components/maps/mapConfig";

export default () => {
  var colors = require("../../../style/Colors.json");
  return (
    <Container>
      <Header />
      <AreaMap>
        <MapaConfig />
      </AreaMap>
      <ButtonArea>
        <ButtonPrimary title={"Next"} colorText={colors.BaseSlot3} />
      </ButtonArea>
    </Container>
  );
};
