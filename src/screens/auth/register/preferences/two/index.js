import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import {
  Container,
  TextSimple,
  AreaView,
  AreaHeaderView,
  Full,
  Empty,
  AreaViewInput,
  TitleSimple,
  TextInput,
  AreaGender,

} from "./styles";
import ButtonBack from "../../../../../components/buttons/ButtonBack";
import ButtonSign from "../../../../../components/buttons/ButtonPrimary";
import FilterButton from "../../../../../components/filter/buttonFilter"

export default () => {
  const navigation = useNavigation();

  var colors = require("../../../../../../style/Colors.json");

  const [nameField, setNameField] = useState("");
  const [dataField, setDataField] = useState("");
  const [emailField, setEmailField] = useState("");
  const [passwordField, setPasswordField] = useState("");
  const [passwordConfirmField, setPasswordConfirmField] = useState("");

  const handleNext = () => {
    navigation.navigate("Three");
  };
  return (
    <Container>
      <AreaView>
        <AreaHeaderView>
          <ButtonBack />
          <Full />
          <Full />
          <Empty />
        </AreaHeaderView>
        <TextSimple>Tell us a little bit about yourself</TextSimple>
        <AreaViewInput>
        <TitleSimple>Something</TitleSimple>
        <FilterButton/>
        </AreaViewInput>
        <ButtonSign event={() => handleNext()} style={{marginTop: 50}} title={"Next"} colorText={colors.BaseSlot3} />
      </AreaView>
     
    </Container>
  );
};
