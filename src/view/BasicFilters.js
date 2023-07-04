import React, { useEffect, useState, useCallback } from 'react';
import {
  SafeAreaView,
  StatusBar,
  Appearance,
  useColorScheme,
  Platform,
  TouchableOpacity,
  KeyboardAvoidingView,
  View,
  Text,
  Image,
  FlatList,
  Modal,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import InputDefaultBasicFilters from '../components/InputDefaultBasicFilters';
import style from '../../style/Style';
import styleDark from '../../style/StyleDark';
import * as NavigationBar from 'expo-navigation-bar';
import * as SplashScreen from 'expo-splash-screen';
import Loader from '../components/Loader';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ButtonFilter from '../components/ButtonFilter';
import ButtonFilterPrimary from '../components/ButtonFilterPrimary';
import SelectableButton from '../components/SelectableButton';
import EventCard from '../components/EventCard';

export default function BasicFilters({ route, navigation }) {
  const [isLoading, setIsLoading] = useState(true);
  const [searchfor, setSearchfor] = useState('');
  const [selectedButton, setSelectedButton] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const colorScheme = useColorScheme();
  const styleSelected = colorScheme === 'light' ? style : styleDark;
  const [searchQuery, setSearchQuery] = useState('');

  styleSelected.dropdownContentContainer = {
    height: 10,
  };

  const colors = require('../../style/Colors.json');
  const Tab = createBottomTabNavigator();

  const filterButtons = [
    {
      id: 1,
      label: 'Museums',
      category: 'History',
    },
    {
      id: 2,
      label: 'Monuments',
      category: 'History',
    },
    {
      id: 3,
      label: 'Heritage',
      category: 'History',
    },
    {
      id: 4,
      label: 'Art',
      category: 'Culture',
    },
    {
      id: 5,
      label: 'Music',
      category: 'Culture',
    },
    {
      id: 6,
      label: 'Theatre',
      category: 'Culture',
    },
    {
      id: 7,
      label: 'Dance',
      category: 'Culture',
    },
    {
      id: 8,
      label: 'Worship',
      category: 'Religion',
    },
    {
      id: 9,
      label: 'Temples',
      category: 'Religion',
    },
    {
      id: 9,
      label: 'Nature',
      category: 'Others',
    },
    {
      id: 10,
      label: 'Sports',
      category: 'Others',
    },
    {
      id: 11,
      label: 'Gastronomy',
      category: 'Others',
    },
    {
      id: 12,
      label: 'Enoturism',
      category: 'Others',
    },
    {
      id: 13,
      label: 'Parks',
      category: 'Amusement',
    },
    // Rest of the buttons...
  ];

  const calculateDropdownHeight = () => {
    const buttonHeight = 60; // Adjust this value according to your button's height
    const minDropdownHeight = 100; // Minimum height of the dropdown container
    const maxDropdownHeight = 400; // Maximum height of the dropdown container

    const buttonCount = filterButtons.length;
    const dropdownHeight = buttonCount * buttonHeight;

    if (dropdownHeight < minDropdownHeight) {
      return minDropdownHeight;
    } else if (dropdownHeight > maxDropdownHeight) {
      return maxDropdownHeight;
    } else {
      return dropdownHeight;
    }
  };

  const handleDropdownPress = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleButtonPress = (label) => {
    if (selectedButton === label) {
      setSelectedButton(null);
      console.log(`${label} has been deselected`);
    } else {
      console.log(`${selectedButton} has been deselected`);
      setSelectedButton(label);
      console.log(`${label} has been selected`);
    }
  };
  

  const handleResetButtonPress = () => {
    setSelectedButton(null);
    setIsDropdownOpen(false);
  };

  const Separator = () => <View style={[styleSelected.separator, { top: 5 }]} />;

  useEffect(() => {
    console.log('OPEN', BasicFilters.name, 'SCREEN');
    // For test loading
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => {
      console.log('SCREEN', BasicFilters.name, 'CLOSE');
    };
  }, []);

  Appearance.getColorScheme();
  Appearance.addChangeListener(({ colorScheme }) => {
    console.log('COLOR THEME WAS ALTER');
    console.log(colorScheme);
    if (Platform.OS === 'android')
      NavigationBar.setBackgroundColorAsync(colorScheme === 'light' ? colors.Base_Slot_1 : colors.Base_Slot_1);
  });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <SafeAreaView style={[{ backgroundColor: colors.BaseSlot3, flex: 1 }]}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={colorScheme === 'light' ? 'dark-content' : 'light-content'}
      />
      <KeyboardAvoidingView
        style={{ flex: 1, marginBottom: 10 }}
        enabled={true}
        behavior={Platform.OS === 'android' ? 'height' : 'padding'}
        keyboardVerticalOffset={Platform.OS === 'android' ? -150 : -150}
      >
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 10 }}>
            <InputDefaultBasicFilters input={searchfor} setInput={setSearchfor} />
            <View style={{ flexDirection: 'row' }}>
              <Image
                style={[styleSelected.search_not_menu, { marginLeft: 'auto', bottom: 35, marginRight: 10 }]}
                source={require('../../assets/images/search.png')}
                placeholder="image"
                contentFit="cover"
                transition={1000}
              />
            </View>
            <View style={{ position: 'absolute', padding: 1, marginTop: 65, zIndex: 999, right: 0 }}>
              <TouchableOpacity onPress={handleDropdownPress}>
                <Text style={[styleSelected.selectable_button_text, styleSelected.selectable_button, { marginRight: 10 }]}>
                  {selectedButton ? selectedButton : 'Select a category'}
                </Text>
              </TouchableOpacity>
              <ScrollView
                contentContainerStyle={[styleSelected.dropdownContentContainer, { height: calculateDropdownHeight() }]}
                showsVerticalScrollIndicator={false}
              >
                <Modal visible={isDropdownOpen} animationType="slide" transparent={true}>
                  <View style={[styleSelected.dropdownContainer, isDropdownOpen && { backgroundColor: colors.BaseSlot1 }]}>
                    {isDropdownOpen && (
                      <TouchableOpacity style={styleSelected.resetButton} onPress={() => setIsDropdownOpen(false)}>
                        <Icon name="close" size={16} color="white"></Icon>
                      </TouchableOpacity>
                    )}
                    <ScrollView showsHorizontalScrollIndicator={false}>
                      <Text style={[styleSelected.textNormal12, { marginLeft: 20, fontWeight: 700, }]}>
                        <Icon name="history" size={12} color={styleSelected.textColor} style={{ marginRight: 90 }} />
                        History
                      </Text>

                      {filterButtons
                        .filter((button) => button.category === 'History')
                        .map((button) => (
                          <SelectableButton
                            key={button.id}
                            label={button.label}
                            onPress={() => handleButtonPress(button.label)}
                            selected={selectedButton === button.label}
                          />
                        ))}
                      <Text style={[styleSelected.textNormal12, { marginLeft: 20, fontWeight: 700, }]}>
                        <Icon name="history" size={12} color={styleSelected.textColor} style={{ marginRight: 90 }} />
                        Culture
                      </Text>
                      {filterButtons
                        .filter((button) => button.category === 'Culture')
                        .map((button) => (
                          <SelectableButton
                            key={button.id}
                            label={button.label}
                            onPress={() => handleButtonPress(button.label)}
                            selected={selectedButton === button.label}
                          />
                        ))}
                      <Text style={[styleSelected.textNormal12, { marginLeft: 20, fontWeight: 700, }]}>
                        <Icon name="history" size={12} color={styleSelected.textColor} style={{ marginRight: 90 }} />
                        Religion
                      </Text>
                      {filterButtons
                        .filter((button) => button.category === 'Religion')
                        .map((button) => (
                          <SelectableButton
                            key={button.id}
                            label={button.label}
                            onPress={() => handleButtonPress(button.label)}
                            selected={selectedButton === button.label}
                          />
                        ))}
                      <Text style={[styleSelected.textNormal12, { marginLeft: 20, fontWeight: 700, }]}>
                        <Icon name="history" size={12} color={styleSelected.textColor} style={{ marginRight: 90 }} />
                        Amusement
                      </Text>
                      {filterButtons
                        .filter((button) => button.category === 'Amusement')
                        .map((button) => (
                          <SelectableButton
                            key={button.id}
                            label={button.label}
                            onPress={() => handleButtonPress(button.label)}
                            selected={selectedButton === button.label}
                          />
                        ))}

                      <Text style={[styleSelected.textNormal12, { marginLeft: 20, fontWeight: 700, }]}>
                        <Icon name="history" size={12} color={styleSelected.textColor} style={{ marginRight: 90 }} />
                        Others
                      </Text>
                      {filterButtons
                        .filter((button) => button.category === 'Others')
                        .map((button) => (
                          <SelectableButton
                            key={button.id}
                            label={button.label}
                            onPress={() => handleButtonPress(button.label)}
                            selected={selectedButton === button.label}
                          />
                        ))}
                    </ScrollView>
                  </View>
                </Modal>
              </ScrollView>
            </View>
          </View>
          <ScrollView style={{ marginLeft: 20, marginTop: 0, zIndex: -5 }}>
            <View style={{ marginLeft: -20, marginBottom: 20, height: '100%' }}>
              <EventCard selectedButton={selectedButton} />
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
