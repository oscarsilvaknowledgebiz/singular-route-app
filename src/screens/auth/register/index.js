  import React, { useState } from "react";
  import { useNavigation } from '@react-navigation/native';

  import {
    Container,
    TextSimple,
    AreaView,
    AreaViewInput,
    TextInput,
    BtnIconArea,
    BtnFacebook,
    BtnApple,
    BtnGoogle,
    AreaIconView,
    TextName,
    TextEmail
  } from "./styles";
  import Header from "../../../components/header/index";
  import ButtonSign from "../../../components/buttons/ButtonPrimary";
  import InputDefault from "../../../components/input/InputDefault";
  import Avatar from "../../../components/avatar/index";

  export default () => {
    const navigation = useNavigation();

    var colors = require("../../../../style/Colors.json");

    const [nameField, setNameField] = useState("");
    const [emailField, setEmailField] = useState("");
    const [passwordField, setPasswordField] = useState("");
    const [passwordConfirmField, setPasswordConfirmField] = useState("");


    const handlePreferences = () => {
      navigation.navigate('Preferences');
    };
    return (
      <Container>
        <AreaView>
          <Header title="Create new account" />
          <Avatar />
          <TextName>{nameField}</TextName>
          <TextEmail>{emailField}</TextEmail>
          <AreaViewInput>
        

            <TextInput>Full name</TextInput>
            <InputDefault
              input={nameField}
              setInput={setNameField}
              placeholder={"You full name here"}
              secureTextEntry={false}
            />
            <TextInput>E-mail adress</TextInput>
            <InputDefault
              input={emailField}
              setInput={setEmailField}
              placeholder={"name@example.com"}
              secureTextEntry={false}
            />

            <TextInput>Create Password</TextInput>
            <InputDefault
              input={passwordField}
              setInput={setPasswordField}
              placeholder={"Create your password"}
              secureTextEntry={true}
            />
            <TextInput>Repeate Password</TextInput>
            <InputDefault
              input={passwordConfirmField}
              setInput={setPasswordConfirmField}
              placeholder={"Confirm your password"}
              secureTextEntry={true}
            />
          </AreaViewInput>
          <TextSimple style={{marginTop: '2%'}}>Or Sign in with:</TextSimple>
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

          <ButtonSign event={() => handlePreferences()} title={"Continue"} colorText={colors.BaseSlot3} />
        </AreaView>
      </Container>
    );
  };
