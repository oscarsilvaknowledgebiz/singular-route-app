import React, { useState, useEffect, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    Container,
    CustomButton,
    CustomButtonText,

} from './styles';

export default ({text}) => {
    const navigation = useNavigation();
    return (
        <Container>
            <CustomButton>
                <CustomButtonText>{text}</CustomButtonText>
            </CustomButton>
        </Container>
    );
};