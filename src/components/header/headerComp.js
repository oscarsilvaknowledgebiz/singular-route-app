import React, { useEffect } from 'react';
import styled from 'styled-components/native';
import Voltar from '../../../assets/icons/iconBack.svg';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;


 
`;
export const AreaButton = styled.TouchableOpacity`
left: 0;
position: absolute;
margin-left: 5%;
`;

export const Icon = styled(Voltar)`


`;

export const TextArea = styled.View`
  flex-direction: row;
  position: absolute;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 15%;
`;

export const Title = styled.Text`
  font-size: 20px;
    font-style: normal;
    font-weight: 700;
`;


export default ({ title }) => {
    return (
        <Container>
            <TextArea>
                <AreaButton>
                    <Icon />
                </AreaButton>
                <Title>{title}</Title>
            </TextArea>
        </Container>
    );
};