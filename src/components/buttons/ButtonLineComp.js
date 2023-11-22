import React, { useState, useEffect, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    Container,
    CustomButtonLine,
    CustomButtonTextOne,
    CustomButtonTextTwo,

} from './styles';

export default () => {
    const navigation = useNavigation();
    return (
        <Container>
            <CustomButtonLine>
                <CustomButtonTextOne>No account yet? </CustomButtonTextOne>
                <CustomButtonTextTwo>Sig up</CustomButtonTextTwo>
            </CustomButtonLine>
        </Container>
    );
};