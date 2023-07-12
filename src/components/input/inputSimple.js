import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components/native";

import Eye from "../../../assets/images/icons/eye.svg";

const InputArea = styled.View`
  width: 100%;
  height: 50px;
  border: 1px solid #444;
  border-left: 7px solid #444;
  flex-direction: row;
  align-items: center;


`;
const Input = styled.TextInput`
  flex: 1;
  font-size: 16px;
  color: #444;
  font-weight: 300;

`;

const EyeIcon = styled(Eye)`
  padding-left: 60px;
`;

export default ({ placeholder, value, onChangeText, isPassword }) => {
  const [password, setPassword] = useState(true);
  const togglePasswordVisiblity = () => {
    setPassword(password ? false : true);
  };

  const inputElementRef = useRef(null);

  useEffect(() => {
    inputElementRef.current.setNativeProps({
      style: { fontFamily: "roboto-regular" },
    });
  }, []);

  const EyeIconVisible = () => {
    if (isPassword) {
      return (
        <EyeIcon
          width="24"
          height="24"
          onPress={togglePasswordVisiblity}
        />
      );
    }
  };

  return (
    <InputArea>
      <Input
        placeholder={placeholder}
        placeholderTextColor="#C0BCBC"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={isPassword ? password : false}
        ref={inputElementRef}
      />
      {EyeIconVisible()}
    </InputArea>
  );
};
