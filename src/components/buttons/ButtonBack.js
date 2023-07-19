import React from "react";
import { Container, BtnVoltarArea, BtnVoltar} from "./styles";
import { useNavigation } from "@react-navigation/native";

export default () => {

  const navigation = useNavigation();
  const handleBack = () => {
    navigation.goBack();
  };
  return (
    <Container>
      <BtnVoltarArea>
        <BtnVoltar onPress={handleBack} />
      </BtnVoltarArea>
    </Container>
  );
};