import React, { useState } from "react";
import { Switch } from "react-native";

import {
  Container,
  TextSimple,
  AreaView,
  AreaViewInput,
  TextInput,
  InputPassword,
  AreaRemember,
  TextRemember,
  BtnIconArea,
  BtnFacebook,
  BtnApple,
  BtnGoogle,
  AreaIconView
} from "./styles";
import ButtonBack from "../../components/buttons/ButtonBack";
import ButtonSign from "../../components/buttons/ButtonPrimary";
import InputDefault from "../../components/input/InputDefault";

export default () => {
  var colors = require("../../../style/Colors.json");

  const [emailField, setEmailField] = useState("");
  const [passwordField, setPasswordField] = useState("");
  const [switchValue, setSwitchValue] = useState(false);

  const toggleSwitch = (value) => {
    setSwitchValue(value);
  };

  return (
    <Container>
      <AreaView>
        <ButtonBack />
        <TextSimple>Hi again</TextSimple>
        <AreaViewInput>
          <TextInput>E-mail adress</TextInput>
          <InputDefault
            input={emailField}
            setInput={setEmailField}
            placeholder={"name@example.com"}
            secureTextEntry={false}
          />

          <TextInput>Password</TextInput>
          <InputDefault
            input={passwordField}
            setInput={setPasswordField}
            placeholder={"Enter your password"}
            secureTextEntry={true}
          />
          <AreaRemember>
            <TextRemember>Remember-me</TextRemember>
            <Switch
              onValueChange={toggleSwitch}
              value={switchValue}
              style={{ marginLeft: "50%" }}
            />
          </AreaRemember>
        </AreaViewInput>
        <TextSimple>Or Sign in with:</TextSimple>
        <AreaIconView>
          <BtnIconArea>
            <BtnFacebook />
          </BtnIconArea>
          <BtnIconArea>
            <BtnApple />
          </BtnIconArea>
          <BtnIconArea>
            <BtnGoogle />
          </BtnIconArea>
        </AreaIconView>

        <ButtonSign title={"Sign"} colorText={colors.BaseSlot3} />
      </AreaView>
    </Container>
  );
};
