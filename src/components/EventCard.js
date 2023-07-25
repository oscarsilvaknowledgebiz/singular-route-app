import React, { useState } from 'react';
import { View, Text, Image, useColorScheme, TouchableOpacity } from 'react-native';
import style from '../../style/Style';
import styleDark from '../../style/StyleDark';

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
    {
      id: 6,
      title: 'Sample Event 2',
      date: 'June 2, 2023',
      location: 'Los Angeles',
      imageSource: require('../../assets/images/maneskin.png'),
      category: 'Culture',
    },
    // Add more events as needed
  ];


  const [likedEvents, setLikedEvents] = useState([]);

  const filteredEvents = selectedButton ? events.filter((event) => event.category === selectedButton) : events;
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

  const eventComponents = filteredEvents.map((event) => (
    <TouchableOpacity key={event.id} onPress={() => console.log('Clicked event:', event)}>
      <View
        style={{ height: 90, backgroundColor: colors.BaseSlot3, marginLeft: 20, marginTop: 20 }}
      >
        <View style={{ backgroundColor: 'white', width: 90 }}>
          <Image
            style={styleSelected.generalImage}
            source={event.imageSource}
            placeholder="image"
            contentFit="cover"
            transition={1000}
          />
        </View>
        <View style={{ alignSelf: 'center', marginTop: -80, top: -10 }}>
          <Text style={[styleSelected.textNormal12, { marginLeft: 10, marginTop: 10, marginLeft: 113  }]}>{event.date}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 10, marginRight: 10, marginTop: -5, marginLeft: 'auto' }}>
            <View style={{ flex: 1 }}>
              <Text style={[styleSelected.textNormal16, { fontWeight: 700, marginLeft: 100 }]} numberOfLines={2}>{event.title}</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 'auto',  zIndex: 1 }}>
              <TouchableOpacity onPress={() => handleLike(event)}>
                <Image
                  style={[
                    styleSelected.heartButton,
                    { tintColor: likedEvents.includes(event.id) ? 'red' : 'gray' },
                  ]}
                  source={require('../../assets/images/heart.png')}
                  placeholder="image"
                  contentFit="cover"
                  transition={1000}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleShare(event)}>
                <Image
                  style={[styleSelected.shareButton, { marginLeft: 10 }]}
                  source={require('../../assets/images/share.png')}
                  placeholder="image"
                  contentFit="cover"
                  transition={1000}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flexDirection: 'row', marginLeft: 103 }}>
            <Image
              style={[styleSelected.map_pin, {}]}
              source={require('../../assets/images/map-pin.png')}
              placeholder="image"
              contentFit="cover"
              transition={1000}
            />
            <Text style={[styleSelected.textNormal12, { marginLeft: 2, marginTop: -4 }]}>{event.location}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  ));
    
  return (
    <View>
      <View style={{ padding: 10, flexDirection: 'row', marginLeft: 10 }}>
        <Text style={[styleSelected.textNormal12, { fontWeight: 700, left: 0 }]}>
          {selectedButton ? `${eventCount} ${selectedButton}` : `${eventCount} Results`}
        </Text>
      </View>
      {eventComponents}
    </View>
  );
};

export default EventCard;
