import React, { useEffect, useRef, useState, useCallback } from 'react'
import { SafeAreaView, Button, StatusBar, Appearance, useColorScheme, Platform, KeyboardAvoidingView, View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import style from '../../../style/Style'
import styleDark from '../../../style/StyleDark'
import * as NavigationBar from 'expo-navigation-bar'
import * as SplashScreen from 'expo-splash-screen';
import Loader from '../../components/Loader'
import EventItem from '../../components/EventItem'
import HighlightedEvent from '../../components/HighlightedEvent'
import * as Location from "expo-location"
import { useDispatch, useSelector } from 'react-redux'
// import DatePicker from "../../components/DatePicker"
import DatePicker from 'react-native-date-ranges';



import { CityNameBold, Container, FindEventsInContainer, FindEventsText, KeyboardContainer, MapPinImage, ScreenView } from "./Styles"
import { locationFeature, updateCity } from '../../features/location/location'
import ModalFilterPicker from 'react-native-modal-filter-picker'
import { FontAwesome } from '@expo/vector-icons'
import ButtonPrimary from '../../components/ButtonPrimary'

export default function HomeScreen({ route, navigation }) {
    const [isLoading, setIsLoading] = useState(true)
    let colorScheme = useColorScheme()
    var styleSelected = colorScheme == 'light' ? style : styleDark
    var colors = require('../../../style/Colors.json')

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    
    const [showPickerStart, setShowPickerStart] = useState(false)
    const [showPickerEnd, setShowPickerEnd] = useState(false)
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())

    const [changeIcon, setChangeIcon] = useState(false)
    const [changeItemIcon, setChangeItemIcon] = useState(false)


    const [highlight, setHighlight] = useState({
        id: null, date: null, name: null, location: null, city: null, starRating: null, image: null, isNew: false,
        hasLike: false,
    })

    const city = useSelector((state) => state.location.city)

    const dispatch = useDispatch()

    const [filterValue, setFilterValue] = useState("")

    const [isVisible, setIsVisible] = useState(false)

    let index = 0;
    const municipalities = [
        { key: index++, label: "Águeda", searchKey: "Aveiro" },
        { key: index++, label: "Albergaria-a-Velha", searchKey: "Aveiro" },
        { key: index++, label: "Anadia", searchKey: "Aveiro" },
        { key: index++, label: "Arouca", searchKey: "Aveiro" },
        { key: index++, label: "Aveiro", searchKey: "Aveiro" },
        { key: index++, label: "Castelo de Paiva", searchKey: "Aveiro" },
        { key: index++, label: "Espinho", searchKey: "Aveiro" },
        { key: index++, label: "Estarreja", searchKey: "Aveiro" },
        { key: index++, label: "Ílhavo", searchKey: "Aveiro" },
        { key: index++, label: "Mealhada", searchKey: "Aveiro" },
        { key: index++, label: "Murtosa", searchKey: "Aveiro" },
        { key: index++, label: "Oliveira de Azeméis", searchKey: "Aveiro" },
        { key: index++, label: "Oliveira do Bairro", searchKey: "Aveiro" },
        { key: index++, label: "Ovar", searchKey: "Aveiro" },
        { key: index++, label: "Santa Maria da Feira", searchKey: "Aveiro" },
        { key: index++, label: "São João da Madeira", searchKey: "Aveiro" },
        { key: index++, label: "Sever do Vouga", searchKey: "Aveiro" },
        { key: index++, label: "Vagos", searchKey: "Aveiro" },
        { key: index++, label: "Vale de Cambra", searchKey: "Aveiro" },

        { key: index++, label: "Aljustrel", searchKey: "Beja" },
        { key: index++, label: "Almodôvar", searchKey: "Beja" },
        { key: index++, label: "Alvito", searchKey: "Beja" },
        { key: index++, label: "Barrancos", searchKey: "Beja" },
        { key: index++, label: "Beja", searchKey: "Beja" },
        { key: index++, label: "Castro Verde", searchKey: "Beja" },
        { key: index++, label: "Cuba", searchKey: "Beja" },
        { key: index++, label: "Ferreira do Alentejo", searchKey: "Beja" },
        { key: index++, label: "Mértola", searchKey: "Beja" },
        { key: index++, label: "Moura", searchKey: "Beja" },
        { key: index++, label: "Odemira", searchKey: "Beja" },
        { key: index++, label: "Ourique", searchKey: "Beja" },
        { key: index++, label: "Serpa", searchKey: "Beja" },
        { key: index++, label: "Vidigueira", searchKey: "Beja" },

        { key: index++, label: "Amares", searchKey: "Braga" },
        { key: index++, label: "Barcelos", searchKey: "Braga" },
        { key: index++, label: "Braga", searchKey: "Braga" },
        { key: index++, label: "Cabeceiras de Basto", searchKey: "Braga" },
        { key: index++, label: "Celorico de Basto", searchKey: "Braga" },
        { key: index++, label: "Esposende", searchKey: "Braga" },
        { key: index++, label: "Fafe", searchKey: "Braga" },
        { key: index++, label: "Guimarães", searchKey: "Braga" },
        { key: index++, label: "Póvoa de Lanhoso", searchKey: "Braga" },
        { key: index++, label: "Terras de Bouro", searchKey: "Braga" },
        { key: index++, label: "Vieira do Minho", searchKey: "Braga" },
        { key: index++, label: "Vila Nova de Famalicão", searchKey: "Braga" },
        { key: index++, label: "Vila Verde", searchKey: "Braga" },
        { key: index++, label: "Vizela", searchKey: "Braga" },

        { key: index++, label: "Alfândega da Fé", searchKey: "Bragança" },
        { key: index++, label: "Bragança", searchKey: "Bragança" },
        { key: index++, label: "Carrazeda de Ansiães", searchKey: "Bragança" },
        { key: index++, label: "Freixo de Espada à Cinta", searchKey: "Bragança" },
        { key: index++, label: "Macedo de Cavaleiros", searchKey: "Bragança" },
        { key: index++, label: "Miranda do Douro", searchKey: "Bragança" },
        { key: index++, label: "Mirandela", searchKey: "Bragança" },
        { key: index++, label: "Mogadouro", searchKey: "Bragança" },
        { key: index++, label: "Torre de Moncorvo", searchKey: "Bragança" },
        { key: index++, label: "Vila Flor", searchKey: "Bragança" },
        { key: index++, label: "Vimioso", searchKey: "Bragança" },
        { key: index++, label: "Vinhais", searchKey: "Bragança" },

        { key: index++, label: "Belmonte", searchKey: "Castelo Branco" },
        { key: index++, label: "Castelo Branco", searchKey: "Castelo Branco" },
        { key: index++, label: "Covilhã", searchKey: "Castelo Branco" },
        { key: index++, label: "Fundão", searchKey: "Castelo Branco" },
        { key: index++, label: "Idanha-a-Nova", searchKey: "Castelo Branco" },
        { key: index++, label: "Oleiros", searchKey: "Castelo Branco" },
        { key: index++, label: "Penamacor", searchKey: "Castelo Branco" },
        { key: index++, label: "Proença-a-Nova", searchKey: "Castelo Branco" },
        { key: index++, label: "Sertã", searchKey: "Castelo Branco" },
        { key: index++, label: "Vila de Rei", searchKey: "Castelo Branco" },
        { key: index++, label: "Vila Velha de Ródão", searchKey: "Castelo Branco" },

        { key: index++, label: "Arganil", searchKey: "Coimbra" },
        { key: index++, label: "Cantanhede", searchKey: "Coimbra" },
        { key: index++, label: "Coimbra", searchKey: "Coimbra" },
        { key: index++, label: "Condeixa-a-Nova", searchKey: "Coimbra" },
        { key: index++, label: "Figueira da Foz", searchKey: "Coimbra" },
        { key: index++, label: "Góis", searchKey: "Coimbra" },
        { key: index++, label: "Lousã", searchKey: "Coimbra" },
        { key: index++, label: "Mira", searchKey: "Coimbra" },
        { key: index++, label: "Miranda do Corvo", searchKey: "Coimbra" },
        { key: index++, label: "Montemor-o-Velho", searchKey: "Coimbra" },
        { key: index++, label: "Oliveira do Hospital", searchKey: "Coimbra" },
        { key: index++, label: "Pampilhosa da Serra", searchKey: "Coimbra" },
        { key: index++, label: "Penacova", searchKey: "Coimbra" },
        { key: index++, label: "Penela", searchKey: "Coimbra" },
        { key: index++, label: "Soure", searchKey: "Coimbra" },
        { key: index++, label: "Tábua", searchKey: "Coimbra" },
        { key: index++, label: "Vila Nova de Poiares", searchKey: "Coimbra" },

        { key: index++, label: "Alandroal", searchKey: "Évora" },
        { key: index++, label: "Arraiolos", searchKey: "Évora" },
        { key: index++, label: "Borba", searchKey: "Évora" },
        { key: index++, label: "Estremoz", searchKey: "Évora" },
        { key: index++, label: "Évora", searchKey: "Évora" },
        { key: index++, label: "Montemor-o-Novo", searchKey: "Évora" },
        { key: index++, label: "Mora", searchKey: "Évora" },
        { key: index++, label: "Mourão", searchKey: "Évora" },
        { key: index++, label: "Portel", searchKey: "Évora" },
        { key: index++, label: "Redondo", searchKey: "Évora" },
        { key: index++, label: "Reguengos de Monsaraz", searchKey: "Évora" },
        { key: index++, label: "Vendas Novas", searchKey: "Évora" },
        { key: index++, label: "Viana do Alentejo", searchKey: "Évora" },
        { key: index++, label: "Vila Viçosa", searchKey: "Évora" },

        { key: index++, label: "Albufeira", searchKey: "Faro" },
        { key: index++, label: "Alcoutim", searchKey: "Faro" },
        { key: index++, label: "Aljezur", searchKey: "Faro" },
        { key: index++, label: "Castro Marim", searchKey: "Faro" },
        { key: index++, label: "Faro", searchKey: "Faro" },
        { key: index++, label: "Lagoa", searchKey: "Faro" },
        { key: index++, label: "Lagos", searchKey: "Faro" },
        { key: index++, label: "Loulé", searchKey: "Faro" },
        { key: index++, label: "Monchique", searchKey: "Faro" },
        { key: index++, label: "Olhão", searchKey: "Faro" },
        { key: index++, label: "Portimão", searchKey: "Faro" },
        { key: index++, label: "São Brás de Alportel", searchKey: "Faro" },
        { key: index++, label: "Silves", searchKey: "Faro" },
        { key: index++, label: "Tavira", searchKey: "Faro" },
        { key: index++, label: "Vila do Bispo", searchKey: "Faro" },
        { key: index++, label: "Vila Real de Santo António", searchKey: "Faro" },

        { key: index++, label: "Aguiar da Beira", searchKey: "Guarda" },
        { key: index++, label: "Almeida", searchKey: "Guarda" },
        { key: index++, label: "Celorico da Beira", searchKey: "Guarda" },
        { key: index++, label: "Figueira de Castelo Rodrigo", searchKey: "Guarda" },
        { key: index++, label: "Fornos de Algodres", searchKey: "Guarda" },
        { key: index++, label: "Gouveia", searchKey: "Guarda" },
        { key: index++, label: "Guarda", searchKey: "Guarda" },
        { key: index++, label: "Manteigas", searchKey: "Guarda" },
        { key: index++, label: "Mêda", searchKey: "Guarda" },
        { key: index++, label: "Pinhel", searchKey: "Guarda" },
        { key: index++, label: "Sabugal", searchKey: "Guarda" },
        { key: index++, label: "Seia", searchKey: "Guarda" },
        { key: index++, label: "Trancoso", searchKey: "Guarda" },
        { key: index++, label: "Vila Nova de Foz Côa", searchKey: "Guarda" },

        { key: index++, label: "Alcobaça", searchKey: "Leiria" },
        { key: index++, label: "Alvaiázere", searchKey: "Leiria" },
        { key: index++, label: "Ansião", searchKey: "Leiria" },
        { key: index++, label: "Batalha", searchKey: "Leiria" },
        { key: index++, label: "Bombarral", searchKey: "Leiria" },
        { key: index++, label: "Caldas da Rainha", searchKey: "Leiria" },
        { key: index++, label: "Castanheira de Pera", searchKey: "Leiria" },
        { key: index++, label: "Figueiró dos Vinhos", searchKey: "Leiria" },
        { key: index++, label: "Leiria", searchKey: "Leiria" },
        { key: index++, label: "Marinha Grande", searchKey: "Leiria" },
        { key: index++, label: "Nazaré", searchKey: "Leiria" },
        { key: index++, label: "Óbidos", searchKey: "Leiria" },
        { key: index++, label: "Pedrógão Grande", searchKey: "Leiria" },
        { key: index++, label: "Peniche", searchKey: "Leiria" },
        { key: index++, label: "Pombal", searchKey: "Leiria" },
        { key: index++, label: "Porto de Mós", searchKey: "Leiria" },

        { key: index++, label: "Alenquer", searchKey: "Lisboa" },
        { key: index++, label: "Amadora", searchKey: "Lisboa" },
        { key: index++, label: "Arruda dos Vinhos", searchKey: "Lisboa" },
        { key: index++, label: "Azambuja", searchKey: "Lisboa" },
        { key: index++, label: "Cadaval", searchKey: "Lisboa" },
        { key: index++, label: "Cascais", searchKey: "Lisboa" },
        { key: index++, label: "Lisboa", searchKey: "Lisboa" },
        { key: index++, label: "Loures", searchKey: "Lisboa" },
        { key: index++, label: "Lourinhã", searchKey: "Lisboa" },
        { key: index++, label: "Mafra", searchKey: "Lisboa" },
        { key: index++, label: "Odivelas", searchKey: "Lisboa" },
        { key: index++, label: "Oeiras", searchKey: "Lisboa" },
        { key: index++, label: "Sintra", searchKey: "Lisboa" },
        { key: index++, label: "Sobral de Monte Agraço", searchKey: "Lisboa" },
        { key: index++, label: "Torres Vedras", searchKey: "Lisboa" },
        { key: index++, label: "Vila Franca de Xira", searchKey: "Lisboa" },

        { key: index++, label: "Alter do Chão", searchKey: "Portalegre" },
        { key: index++, label: "Arronches", searchKey: "Portalegre" },
        { key: index++, label: "Avis", searchKey: "Portalegre" },
        { key: index++, label: "Campo Maior", searchKey: "Portalegre" },
        { key: index++, label: "Castelo de Vide", searchKey: "Portalegre" },
        { key: index++, label: "Crato", searchKey: "Portalegre" },
        { key: index++, label: "Elvas", searchKey: "Portalegre" },
        { key: index++, label: "Fronteira", searchKey: "Portalegre" },
        { key: index++, label: "Gavião", searchKey: "Portalegre" },
        { key: index++, label: "Marvão", searchKey: "Portalegre" },
        { key: index++, label: "Monforte", searchKey: "Portalegre" },
        { key: index++, label: "Nisa", searchKey: "Portalegre" },
        { key: index++, label: "Ponte de Sor", searchKey: "Portalegre" },
        { key: index++, label: "Portalegre", searchKey: "Portalegre" },
        { key: index++, label: "Sousel", searchKey: "Portalegre" },

        { key: index++, label: "Amarante", searchKey: "Porto" },
        { key: index++, label: "Baião", searchKey: "Porto" },
        { key: index++, label: "Felgueiras", searchKey: "Porto" },
        { key: index++, label: "Gondomar", searchKey: "Porto" },
        { key: index++, label: "Lousada", searchKey: "Porto" },
        { key: index++, label: "Maia", searchKey: "Porto" },
        { key: index++, label: "Marco de Canaveses", searchKey: "Porto" },
        { key: index++, label: "Matosinhos", searchKey: "Porto" },
        { key: index++, label: "Paços de Ferreira", searchKey: "Porto" },
        { key: index++, label: "Paredes", searchKey: "Porto" },
        { key: index++, label: "Penafiel", searchKey: "Porto" },
        { key: index++, label: "Porto", searchKey: "Porto" },
        { key: index++, label: "Póvoa de Varzim", searchKey: "Porto" },
        { key: index++, label: "Santo Tirso", searchKey: "Porto" },
        { key: index++, label: "Trofa", searchKey: "Porto" },
        { key: index++, label: "Valongo", searchKey: "Porto" },
        { key: index++, label: "Vila do Conde", searchKey: "Porto" },
        { key: index++, label: "Vila Nova de Gaia", searchKey: "Porto" },

        { key: index++, label: "Abrantes", searchKey: "Santarém" },
        { key: index++, label: "Alcanena", searchKey: "Santarém" },
        { key: index++, label: "Almeirim", searchKey: "Santarém" },
        { key: index++, label: "Alpiarça", searchKey: "Santarém" },
        { key: index++, label: "Benavente", searchKey: "Santarém" },
        { key: index++, label: "Cartaxo", searchKey: "Santarém" },
        { key: index++, label: "Chamusca", searchKey: "Santarém" },
        { key: index++, label: "Constância", searchKey: "Santarém" },
        { key: index++, label: "Coruche", searchKey: "Santarém" },
        { key: index++, label: "Entroncamento", searchKey: "Santarém" },
        { key: index++, label: "Ferreira do Zêzere", searchKey: "Santarém" },
        { key: index++, label: "Golegã", searchKey: "Santarém" },
        { key: index++, label: "Mação", searchKey: "Santarém" },
        { key: index++, label: "Ourém", searchKey: "Santarém" },
        { key: index++, label: "Rio Maior", searchKey: "Santarém" },
        { key: index++, label: "Salvaterra de Magos", searchKey: "Santarém" },
        { key: index++, label: "Santarém", searchKey: "Santarém" },
        { key: index++, label: "Sardoal", searchKey: "Santarém" },
        { key: index++, label: "Tomar", searchKey: "Santarém" },
        { key: index++, label: "Torres Novas", searchKey: "Santarém" },
        { key: index++, label: "Vila Nova da Barquinha", searchKey: "Santarém" },

        { key: index++, label: "Alcácer do Sal", searchKey: "Setúbal" },
        { key: index++, label: "Alcochete", searchKey: "Setúbal" },
        { key: index++, label: "Almada", searchKey: "Setúbal" },
        { key: index++, label: "Barreiro", searchKey: "Setúbal" },
        { key: index++, label: "Grândola", searchKey: "Setúbal" },
        { key: index++, label: "Moita", searchKey: "Setúbal" },
        { key: index++, label: "Montijo", searchKey: "Setúbal" },
        { key: index++, label: "Palmela", searchKey: "Setúbal" },
        { key: index++, label: "Santiago do Cacém", searchKey: "Setúbal" },
        { key: index++, label: "Seixal", searchKey: "Setúbal" },
        { key: index++, label: "Sesimbra", searchKey: "Setúbal" },
        { key: index++, label: "Setúbal", searchKey: "Setúbal" },
        { key: index++, label: "Sines", searchKey: "Setúbal" },

        { key: index++, label: "Arcos de Valdevez", searchKey: "Viana do Castelo" },
        { key: index++, label: "Caminha", searchKey: "Viana do Castelo" },
        { key: index++, label: "Melgaço", searchKey: "Viana do Castelo" },
        { key: index++, label: "Monção", searchKey: "Viana do Castelo" },
        { key: index++, label: "Paredes de Coura", searchKey: "Viana do Castelo" },
        { key: index++, label: "Ponte da Barca", searchKey: "Viana do Castelo" },
        { key: index++, label: "Ponte de Lima", searchKey: "Viana do Castelo" },
        { key: index++, label: "Valença", searchKey: "Viana do Castelo" },
        { key: index++, label: "Viana do Castelo", searchKey: "Viana do Castelo" },
        { key: index++, label: "Vila Nova de Cerveira", searchKey: "Viana do Castelo" },

        { key: index++, label: "Alijó", searchKey: "Vila Real" },
        { key: index++, label: "Boticas", searchKey: "Vila Real" },
        { key: index++, label: "Chaves", searchKey: "Vila Real" },
        { key: index++, label: "Mesão Frio", searchKey: "Vila Real" },
        { key: index++, label: "Mondim de Basto", searchKey: "Vila Real" },
        { key: index++, label: "Montalegre", searchKey: "Vila Real" },
        { key: index++, label: "Murça", searchKey: "Vila Real" },
        { key: index++, label: "Peso da Régua", searchKey: "Vila Real" },
        { key: index++, label: "Ribeira de Pena", searchKey: "Vila Real" },
        { key: index++, label: "Sabrosa", searchKey: "Vila Real" },
        { key: index++, label: "Santa Marta de Penaguião", searchKey: "Vila Real" },
        { key: index++, label: "Valpaços", searchKey: "Vila Real" },
        { key: index++, label: "Vila Pouca de Aguiar", searchKey: "Vila Real" },
        { key: index++, label: "Vila Real", searchKey: "Vila Real" },

        { key: index++, label: "Armamar", searchKey: "Viseu" },
        { key: index++, label: "Carregal do Sal", searchKey: "Viseu" },
        { key: index++, label: "Castro Daire", searchKey: "Viseu" },
        { key: index++, label: "Cinfães", searchKey: "Viseu" },
        { key: index++, label: "Lamego", searchKey: "Viseu" },
        { key: index++, label: "Mangualde", searchKey: "Viseu" },
        { key: index++, label: "Moimenta da Beira", searchKey: "Viseu" },
        { key: index++, label: "Mortágua", searchKey: "Viseu" },
        { key: index++, label: "Nelas", searchKey: "Viseu" },
        { key: index++, label: "Oliveira de Frades", searchKey: "Viseu" },
        { key: index++, label: "Penalva do Castelo", searchKey: "Viseu" },
        { key: index++, label: "Penedono", searchKey: "Viseu" },
        { key: index++, label: "Resende", searchKey: "Viseu" },
        { key: index++, label: "Santa Comba Dão", searchKey: "Viseu" },
        { key: index++, label: "São João da Pesqueira", searchKey: "Viseu" },
        { key: index++, label: "São Pedro do Sul", searchKey: "Viseu" },
        { key: index++, label: "Sátão", searchKey: "Viseu" },
        { key: index++, label: "Sernancelhe", searchKey: "Viseu" },
        { key: index++, label: "Tabuaço", searchKey: "Viseu" },
        { key: index++, label: "Tarouca", searchKey: "Viseu" },
        { key: index++, label: "Tondela", searchKey: "Viseu" },
        { key: index++, label: "Vila Nova de Paiva", searchKey: "Viseu" },
        { key: index++, label: "Viseu", searchKey: "Viseu" },
        { key: index++, label: "Vouzela", searchKey: "Viseu" }

    ];

    let id = 0
    const mockData = [
        {
            id: id++,
            date: "2023-4-18 21:00:00",
            name: "Museu Berardo",
            location: "Praça do Império, 1449-003 Lisboa",
            city: "Lisboa",
            starRating: 5,
            image: "https://www.mude.pt/public/uploads/homeblocks/foto_obras_SITE_nova.jpg",
            isNew: false,
            hasLike: true,
            highlighted: true
        },
        {
            id: id++,
            date: "2023-4-19 20:00:00",
            name: "Museu do Design",
            location: "Rua Augusta, nº24",
            city: "Almada",
            starRating: 5,
            image: "https://www.playocean.net/i/portugal/lisboa/museus/mude-museu-design-moda/mude-museu-design-moda-1.jpg",
            isNew: false,
            hasLike: false,
        },
        {
            id: id++,
            date: "2023-4-11 20:00:00",
            name: "Museu doutra coisa",
            location: "Rua Augustina, nº22",
            city: "Almada",
            starRating: 3,
            image: "https://www.cm-almada.pt/sites/default/files/styles/main_image/public/2021-05/MuseuNaval_site.jpg?h=3af4c258&itok=SiX2BQsX",
            isNew: true,
            hasLike: true,
        }, {
            id: id++,
            date: "2023-4-19 20:00:00",
            name: "Museu do Design",
            location: "Rua Augusta, nº24",
            city: "Almada",
            starRating: 5,
            image: "https://www.playocean.net/i/portugal/lisboa/museus/mude-museu-design-moda/mude-museu-design-moda-1.jpg",
            isNew: false,
            hasLike: false,
        },
        {
            id: id++,
            date: "2023-4-11 20:00:00",
            name: "Museu doutra coisa",
            location: "Rua Augustina, nº22",
            city: "Almada",
            starRating: 3,
            image: "https://www.cm-almada.pt/sites/default/files/styles/main_image/public/2021-05/MuseuNaval_site.jpg?h=3af4c258&itok=SiX2BQsX",
            isNew: true,
            hasLike: false,
        }, {
            id: id++,
            date: "2023-4-19 20:00:00",
            name: "Museu do Design",
            location: "Rua Augusta, nº24",
            city: "Almada",
            starRating: 5,
            image: "https://www.playocean.net/i/portugal/lisboa/museus/mude-museu-design-moda/mude-museu-design-moda-1.jpg",
            isNew: false,
            hasLike: false,
        },
        {
            id: id++,
            date: "2023-4-11 20:00:00",
            name: "Museu doutra coisa",
            location: "Rua Augustina, nº22",
            city: "Almada",
            starRating: 3,
            image: "https://www.cm-almada.pt/sites/default/files/styles/main_image/public/2021-05/MuseuNaval_site.jpg?h=3af4c258&itok=SiX2BQsX",
            isNew: true,
            hasLike: false,
        }, {
            id: id++,
            date: "2023-4-19 20:00:00",
            name: "Museu do Design",
            location: "Rua Augusta, nº24",
            city: "Almada",
            starRating: 5,
            image: "https://www.playocean.net/i/portugal/lisboa/museus/mude-museu-design-moda/mude-museu-design-moda-1.jpg",
            isNew: false,
            hasLike: false,
        },
        {
            id: id++,
            date: "2023-4-11 20:00:00",
            name: "Museu doutra coisa",
            location: "Rua Augustina, nº22",
            city: "Almada",
            starRating: 3,
            image: "https://www.cm-almada.pt/sites/default/files/styles/main_image/public/2021-05/MuseuNaval_site.jpg?h=3af4c258&itok=SiX2BQsX",
            isNew: true,
            hasLike: false,
        }, {
            id: id++,
            date: "2023-4-19 20:00:00",
            name: "Museu do Design",
            location: "Rua Augusta, nº24",
            city: "Almada",
            starRating: 5,
            image: "https://www.playocean.net/i/portugal/lisboa/museus/mude-museu-design-moda/mude-museu-design-moda-1.jpg",
            isNew: false,
            hasLike: false,
        },
        {
            id: id++,
            date: "2023-4-11 20:00:00",
            name: "Museu doutra coisa",
            location: "Rua Augustina, nº22",
            city: "Almada",
            starRating: 3,
            image: "https://www.cm-almada.pt/sites/default/files/styles/main_image/public/2021-05/MuseuNaval_site.jpg?h=3af4c258&itok=SiX2BQsX",
            isNew: true,
            hasLike: false,
        },
    ]

    const [data, setData] = useState(mockData)

    function getCurrentLocation() {
        const timeout = 5000;
        return new Promise(async (resolve, reject) => {
            setTimeout(() => { reject(new Error(`Error getting gps location after ${(timeout * 2) / 1000} s`)) }, timeout * 2);
            setTimeout(async () => { resolve(await Location.getLastKnownPositionAsync()) }, timeout);
            resolve(await Location.getCurrentPositionAsync());
        });
    }

    useEffect(() => {

        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync()
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }
            let location = await getCurrentLocation()
            let event = mockData.find(x => x.highlighted)
            setHighlight(event)
            setLocation(location);
            let reversedLocation = await Location.reverseGeocodeAsync({ latitude: location.coords.latitude, longitude: location.coords.longitude })
            dispatch(updateCity(reversedLocation[0].city))
            setIsLoading(false)

        })();
    }, []);

    const setNewLocation = (city) => {
        dispatch(updateCity(city))

    }

    Appearance.getColorScheme()
    Appearance.addChangeListener(({ colorScheme }) => {
        console.log('COLOR THEME WAS ALTER')
        console.log(colorScheme)
        if (Platform.OS === 'android')
            NavigationBar.setBackgroundColorAsync(colorScheme === 'light' ? colors.Base_Slot_1 : colors.Base_Slot_1)
    })
    const onLayoutRootView = useCallback(async () => {
        if (isLoading) {
        }
    }, [isLoading]);
    if (isLoading) {
        return (
            <Loader />
        );
    }

    const changeDates = (dates) => {
        setStartDate(dates.startDate)
        setEndDate(dates.endDate)
        filterEvents(dates)
    }

    const filterEvents = (dates) => {
        let dateStart = new Date(dates.startDate.substr(6, 4) + "-" + dates.startDate.substr(3, 2) + "-" + dates.startDate.substr(0,2))
        let dateEnd = new Date(dates.endDate.substr(6, 4) + "-" + dates.endDate.substr(3, 2) + "-" + dates.endDate.substr(0,2))
        let newArray = mockData.filter(x => {
            console.log("date:", new Date(x.date))
            console.log("start date:", dateStart)
            console.log("end date:", dateEnd)
            console.log("val:", (new Date(x.date) >= dateStart && x.date <= dateEnd))

            return (new Date(x.date) >= dateStart && new Date(x.date) <= dateEnd)
        })
        setData(newArray)
    }

    const customButton = (onConfirm) => (
        <View style={{flex: 0.7}}>
            <ButtonPrimary title={"Confirm"} colorText={colors.BaseSlot3} event={onConfirm} />
        </View>
    )

    const likeEvent = (id, value, isHighlight=0) => {
        let idx = data.findIndex(x => x.id === id)
        data[idx].hasLike = value
        if (isHighlight || data[idx].id === highlight.id) {
            highlight.hasLike = value
            setHighlight(highlight)
            setChangeIcon(!changeIcon)
            if (isHighlight) {
                setChangeItemIcon(!changeItemIcon)
            }
        }
    }

    return (
        <Container onLayout={onLayoutRootView}>
            <StatusBar translucent={true} backgroundColor={'transparent'} barStyle={colorScheme === 'light' ? 'dark-content' : 'light-content'} />
            <KeyboardContainer
                enabled={true}
                behavior={Platform.OS == 'android' ? 'height' : 'padding'}
                keyboardVerticalOffset={Platform.OS == 'android' ? -150 : -150}
            >
                <ScreenView>

                    <FindEventsInContainer>
                        <View style={{flexDirection: "row"}}>
                            <View style={{flex:0.5}}>
                                <FindEventsText>Find events in</FindEventsText>
                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    <MapPinImage source={require("../../../assets/images/mapPin.png")} />
                                    {/* <ModalSelector
                                        data={data}
                                        supportedOrientations={['portrait']}
                                        accessible={true}
                                        scrollViewAccessibilityLabel={'Scrollable options'}
                                        cancelButtonAccessibilityLabel={'Cancel Button'}
                                        cancelText='Close'
                                        onChange={(option) => { setNewLocation(option.label) }}> */}
                                    <TouchableOpacity onPress={() => setIsVisible(true)}>
                                        <CityNameBold numberOfLines={1} > {city} <FontAwesome name='chevron-down' size={14} /></CityNameBold>
                                    </TouchableOpacity>
                                    {/* </ModalSelector> */}

                                    <ModalFilterPicker
                                        visible={isVisible}
                                        listContainerStyle={{width:320, backgroundColor:"white", height: "80%", top: 30, borderRadius:30}}
                                        renderOption={(item) => {
                                            return(
                                            <TouchableOpacity onPress={() => {setNewLocation(item.label); setIsVisible(false)}} style={{flexDirection:"row", padding:10, borderBottomWidth:0.5}}>
                                                <Text style={{flex:1, fontSize: 16}} >{item.label}</Text>
                                                <Text style={{fontSize: 11, fontWeight: 300}} >{item.searchKey}</Text>
                                            </TouchableOpacity>
                                        )}}
                                        optionTextStyle={{fontSize:18}}
                                        options={municipalities}
                                        onSelect={(value) => setNewLocation(value)}
                                        cancelButtonStyle={{backgroundColor: colors.BaseSlot1, padding: 20, paddingTop:10, paddingBottom:10, borderRadius:10, top: 40}}
                                        cancelButtonTextStyle={[{color: "white", fontSize: 18}]}
                                        // overlayStyle={{flex:1, backgroundColor:"black", opacity: 1, alignItems:"center", justifyContent:"center"}}
                                        onCancel={() => setIsVisible(false)}
                                    />
                                </View>
                            </View>
                            <View style={{flex: 0.5, flexDirection:"row", justifyContent:"center", alignItems:"center", alignContent:"center", alignSelf:"center"}}>
                                <View style={{flex:1}}>
                                    <DatePicker style={{borderRadius:10, borderColor:"black", borderWidth:0.5}} placeholder={"Time period"} outFormat={"DD/MM/YYYY"} returnFormat={"DD/MM/YYYY"} markText={" "} 
                                    customStyles={{
                                        contentText: {fontSize:13, fontWeight:300},
                                        placeholderText: {color:"black", fontWeight:300},
                                        contentInput:{
                                            borderRadius:10
                                        }
                                    }} customButton={customButton} onConfirm={(val) => { changeDates(val) }}  mode={"range"} selectedTextColor={"black"} />
                                </View>
                            </View>
                        </View>
                    </FindEventsInContainer>

                    <View style={{ flex: 0.06, justifyContent: "flex-end" }}>
                        <Text style={{ fontSize: 16, color: "#262627", fontWeight: 400 }} >Popular in {city}</Text>
                    </View>

                    <View style={{ flex: 0.03 }} />

                    <View style={{ flex: 0.3 }}>
                        <HighlightedEvent 
                            id={highlight.id}
                            changeIcon={changeIcon}
                            likeEvent={likeEvent}
                            date={highlight.date} name={highlight.name}
                            location={highlight.location} isNew={highlight.isNew}
                            starRating={highlight.starRating} image={highlight.image}
                            event={() => navigation.navigate("EventDetails", { data: highlight })}
                            hasLike={highlight.hasLike} />
                    </View>

                    <View style={{ flex: 0.01 }} />

                    <View style={{ flex: 0.50 }}>
                        <FlatList
                            style={{ flex: 1, }}
                            data={data}
                            
                            renderItem={({ item, index }) => {
                                return (<>
                                        {
                                            data.length === index + 1 ? (
                                            <View style={{height: 45, justifyContent:"center", alignItems:"center"}}>
                                                <Text>
                                                    There are no more events.
                                                </Text>
                                                </View>) : (<View style={{ marginBottom: 20, marginTop: 5 }}>
                                            <EventItem event={() => navigation.navigate("EventDetails", { data: item })}
                                                id={item.id}
                                                likeEvent={likeEvent}
                                                city={item.city} date={item.date}
                                                location={item.location} name={item.name}
                                                starRating={item.starRating} image={item.image}
                                                changeIcon={item.id === highlight.id ? changeItemIcon : false}
                                                isNew={item.isNew} hasLike={item.hasLike} />
                                        </View>)
                                        }
                                    </>
                                )
                                }
                            } />
                            
                    </View>

                    <TouchableOpacity style={{ position: "absolute", right: 3, bottom: 10, width: 60, height: 60, backgroundColor:colors.BaseSlot2, borderRadius: 44, alignItems: "center", justifyContent: "center" }}>
                        <Image source={require("../../../assets/images/mapPin.png")} style={{ height: 36, width: 32, tintColor:"white" }} />
                    </TouchableOpacity>

                </ScreenView>
            </KeyboardContainer>
        </Container>
    )
}