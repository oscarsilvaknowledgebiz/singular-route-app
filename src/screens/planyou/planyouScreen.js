import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container, ImagemWelcome, Subtitle, Title, BtnAreaView, BtnAreaViewTwo } from './styles';
import ButtonPrimary from '../../components/buttons/ButtonPrimaryComp';
import ButtonBlue from '../../components/buttons/ButtonBlueComp';

export default () => {
    const navigation = useNavigation();


    return (
        <Container>
            
            <ImagemWelcome />
            <Title>Select Location</Title>
            <Subtitle>Let’s find your next event.
Stay in tune with
what’s happening in your area!
</Subtitle>

            <BtnAreaViewTwo>
                <ButtonBlue textbutton="Plan Trip"/>
            </BtnAreaViewTwo>

            <BtnAreaView>
                <ButtonPrimary text="Whats happening" />
            </BtnAreaView>
            

           
           
          


        </Container>
    );
};