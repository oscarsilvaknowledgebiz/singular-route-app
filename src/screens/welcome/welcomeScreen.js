import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container, ImagemWelcome, Subtitle, Title, BtnAreaView, BtnAreaViewTwo } from './styles';
import ButtonPrimary from '../../components/buttons/ButtonPrimaryComp';
import ButtonPrimaryLine from '../../components/buttons/ButtonLineComp';

export default () => {
    const navigation = useNavigation();


    return (
        <Container>
            <Title>Welcome!</Title>
            <Subtitle>Sing in or creat a new account</Subtitle>
            <ImagemWelcome />
            <BtnAreaViewTwo>
                <ButtonPrimaryLine />
            </BtnAreaViewTwo>
            <BtnAreaView>
                <ButtonPrimary />
            </BtnAreaView>
            


        </Container>
    );
};