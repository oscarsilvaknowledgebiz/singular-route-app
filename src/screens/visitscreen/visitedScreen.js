import React, { useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { CardList, Container } from './styles';
import Header from '../../components/header/headerComp';
import Card from '../../components/cards/SavedRoutes/cardSavedRoutesComp';
import ButtonPrimary from '../../components/buttons/ButtonPrimary';

import Image1 from '../../../assets/images/ExampleImage1.svg'
import Image2 from '../../../assets/images/ExampleImage2.svg'
import Image3 from '../../../assets/images/ExampleImage3.svg'


export default () => {
    const navigation = useNavigation();

    const { parms } = useRoute;
    useEffect(() => {
        console.log(parms);
    }, []);


    const obj = [
        {
            id: 1,
            title_event: 'Setúbal',
            text_resume: 'Will be visiting from 1st May - 6th May',
            image: <Image1 />
        },
        {
            id: 2,
            title_event: 'Museu da Arte',
            text_resume: 'Will be visting from 22nd June - 1st July',
            image: <Image2 />
        },
        {
            id: 3,
            title_event: 'Museu Berardo',
            text_resume: 'Will be visiting from 16th August - 20th August',
            image: <Image3 />
        }

    ];


    return (
        <Container>
            <CardList data={obj}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Card title_event={item?.title_event} resume={item?.text_resume} image={item?.image} />
                )}>
            </CardList>
            <ButtonPrimary title={'Next'} />
        </Container>
    );
};