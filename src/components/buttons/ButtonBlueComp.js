import React, { useState, useEffect, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    Container,
    CustomButtonBlue,
    CustomButtonText,

} from './styles';

export default ({textbutton}) => {
    const navigation = useNavigation();
    return (
        <Container>
            <CustomButtonBlue>
                <CustomButtonText>{textbutton}</CustomButtonText>
            </CustomButtonBlue>
        </Container>
    );
};