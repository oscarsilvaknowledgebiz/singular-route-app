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
  TextInput,
  AreaGender,

} from "./styles";
import ButtonBack from "../../../../components/buttons/ButtonBack";
import ButtonSign from "../../../../components/buttons/ButtonPrimary";
import ButtonGender from "../../../../components/filter/buttonGender";
import InputDefault from "../../../../components/input/InputDefault";


export default () => {
  const navigation = useNavigation();

  var colors = require("../../../../../style/Colors.json");

  const [nameField, setNameField] = useState("");
  const [dataField, setDataField] = useState("");

  const handleNext = () => {
    navigation.navigate("Two");
  };
  return (
    <Container>
      <AreaView>
        <AreaHeaderView>
          <ButtonBack />
          <Full />
          <Empty />
          <Empty />
        </AreaHeaderView>
        <TextSimple>Tell us a little bit about yourself</TextSimple>

        <AreaViewInput>
          <TextInput>Home adress</TextInput>
          <InputDefault
            input={nameField}
            setInput={setNameField}
            placeholder={"Select you coutry"}
            secureTextEntry={false}
          />
          <TextInput>Nationality</TextInput>
          <InputDefault
            input={nameField}
            setInput={setNameField}
            placeholder={"Select you nationality"}
            secureTextEntry={false}
          />
          <TextInput>Birth date</TextInput>
          <InputDefault
            input={dataField}
            setInput={setDataField}
            placeholder={"00-00-0000"}
            secureTextEntry={false}

            maskInput={[/\d/, /\d/, "-", /\d/, /\d/, "-", /\d/, /\d/, /\d/, /\d/]}
          />
          <TextInput>Gender</TextInput>
          <AreaGender>
            <ButtonGender />
          </AreaGender>
        </AreaViewInput>
        <ButtonSign event={() => handleNext()} style={{marginTop: 50}} title={"Next"} colorText={colors.BaseSlot3} />
      </AreaView>
     
    </Container>
  );
};
