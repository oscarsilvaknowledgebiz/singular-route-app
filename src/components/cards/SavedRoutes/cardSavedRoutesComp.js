import React, { useEffect } from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  height: 100%;
  width: 100%;


`;

export const Card = styled.View`
margin-bottom: 0%;
border-bottom: 4px solid;
border-color: #F2F2F2;
margin-bottom: 5%;
`;

export const Divider = styled.View`
border-bottom: 4px solid;
border-color: #F2F2F2;

`

export const MainImage = styled.View`

border-radius: 0px 5px 5px 0px;

`;


export const Title = styled.Text`

margin-left: 5%;
  font-size: 20px;
    font-style: normal;
    font-weight: 700;
    color: #000;
`;

export const TextResume = styled.Text`
color: #262627;
font-size: 12px;
font-style: normal;
font-weight: 400;
margin-left: 5%;
margin-top: 2%;

`;

export const ButtonDetail = styled.TouchableOpacity`
 display: flex;
width: 91px;
height: 30px;

justify-content: center;
align-items: center;
gap: 10px;
flex-shrink: 0;
background-color: #FFCD01;
border-radius: 10px;
right: 0;
position: absolute;
margin-right: 5%;

`;

export const AreaJoinView = styled.View`
flex-direction: row;
margin-top: 3%;
`;


export const TextButton = styled.Text`
color: #fff;
  font-size: 16px;
    font-style: normal;
    font-weight: 500;
`;




export default ({ title_event, resume, image }) => {
    return (
        <Container>
            <Card>
                {image}
                <AreaJoinView>
                    <Title>{title_event}</Title>
                    <ButtonDetail><TextButton>Details</TextButton></ButtonDetail>
                </AreaJoinView>
                <TextResume>{resume}</TextResume>
                
            </Card>

        </Container>
    );
};