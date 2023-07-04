import React, { useState } from 'react';
import { View, Text, Image, useColorScheme, TouchableOpacity } from 'react-native';
import style from '../../style/Style';
import styleDark from '../../style/StyleDark';
import InputDefaultBasicFilters from './InputDefaultBasicFilters'; // Import the modified input component

const EventCard = ({ selectedButton }) => {
  const colorScheme = useColorScheme();
  const styleSelected = colorScheme === 'light' ? style : styleDark;
  const colors = require('../../style/Colors.json');

  const events = [
    {
      id: 1,
      title: 'asdasdasdasd',
      date: 'June 1, 2023',
      location: 'Lisboa',
      imageSource: require('../../assets/images/RocknRio.png'),
      category: 'Show',
    },
    {
      id: 2,
      title: 'a',
      date: 'June 2, 2023',
      location: 'Los Angeles',
      imageSource: require('../../assets/images/maneskin.png'),
      category: 'Culture',
    },
    {
      id: 3,
      title: 'Sample event 2',
      date: 'June 2, 2023',
      location: 'Los Angeles',
      imageSource: require('../../assets/images/maneskin.png'),
      category: 'Culture',
    },
    {
      id: 4,
      title: 'Sample Event 2',
      date: 'June 2, 2023',
      location: 'Los Angeles',
      imageSource: require('../../assets/images/maneskin.png'),
      category: 'Culture',
    },
    {
      id: 5,
      title: 'Sample Event 2',
      date: 'June 2, 2023',
      location: 'Los Angeles',
      imageSource: require('../../assets/images/maneskin.png'),
      category: 'Culture',
    },
    // Add more events as needed
  ];

  const [likedEvents, setLikedEvents] = useState([]);
  const [searchText, setSearchText] = useState(''); // Add searchText state

    const eventCount = filteredEvents.length;

    const handleLike = (event) => {
      if (likedEvents.includes(event.id)) {
        setLikedEvents(likedEvents.filter((eventId) => eventId !== event.id));
        console.log('Unfavorited event:', event);
      } else {
        setLikedEvents([...likedEvents, event.id]);
        console.log('Favorited event:', event);
      }
    };

    const handleShare = (event) => {
      // Implement your share functionality here
      console.log('Share event:', event);
    };

  const handleSearch = (value) => {
    setSearchText(value); // Update the searchText state with the search input
  };



  return (
    <View>
      <View style={{ padding: 10, flexDirection: 'row', marginLeft: 10 }}>
        <Text style={[styleSelected.textNormal12, { fontWeight: 700, left: 0 }]}>
          {selectedButton ? `${filteredEvents.length} ${selectedButton}` : `${filteredEvents.length} Results`}
        </Text>
      </View>
      <InputDefaultBasicFilters
        placeholder="Search"
        onChangeText={handleSearch} // Pass the handleSearch function
      />
      {eventComponents}
    </View>
  );
};

export default EventCard;
