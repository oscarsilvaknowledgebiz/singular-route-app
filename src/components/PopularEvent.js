import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import style from '../../style/Style';
import styleDark from '../../style/StyleDark';

const PopularEvent = ({ styleSelected }) => {
  const colors = require('../../style/Colors.json');
  const [liked, setLiked] = useState(false);

  const handleLike = (event) => {
    event.stopPropagation(); // Prevent touch event propagation to parent TouchableOpacity
    setLiked(!liked);
    console.log(liked ? 'Unfavorited event: Museu Berardo' : 'Favorited event: Museu Berardo');
  };

  const handleShare = () => {
    console.log('Share button clicked');
  };

  const handleEventClick = () => {
    console.log('Clicked event: Museu Berardo');
  };

  return (
    <View style={{ backgroundColor: colors.BaseSlot3, marginLeft: 20, marginTop: 20 }}>
      <Text style={styleSelected.textNormal16}>Popular in Lisboa</Text>
      <TouchableOpacity onPress={handleEventClick}>
        <View style={{ backgroundColor: '#FFFFFF', marginTop: 20, marginRight: 10, borderRadius: 5 }}>
          <Image
            style={[styleSelected.Museu_Image]}
            source={require('../../assets/images/Museu_Image.png')}
            placeholder="image"
            contentFit="cover"
            transition={1000}
          />
          <View>
            <Image
              style={[styleSelected.label, { top: -115, left: 320, marginRight: -100 }]}
              source={require('../../assets/images/label.png')}
              placeholder="image"
              contentFit="cover"
              transition={1000}
            />
            <Text style={styleSelected.textNormal12}>Mon, Apr 18 · 21:00 Pm </Text>
            <Text style={[styleSelected.textNormal16, { fontWeight: '700' }]}>Museu Berardo</Text>
            <View style={{ flexDirection: 'row' }}>
              <Image
                style={[styleSelected.map_pin, { marginTop: 3 }]}
                source={require('../../assets/images/map_pin.png')}
                placeholder="image"
                contentFit="cover"
                transition={1000}
              />
              <Text style={[styleSelected.textNormal12, { marginLeft: 2 }]}>Praça do Império, 1449-003 Lisboa</Text>
            </View>
            <View style={{ flexDirection: 'row', marginLeft: 'auto', justifyContent: 'space-between' }}>
              <Text style={[styleSelected.textNormal18, { marginRight: 4 }]}>5</Text>
              <TouchableOpacity onPress={handleLike}>
                <Image
                  style={[
                    styleSelected.down_button,
                    { marginTop: 4, marginRight: 10, tintColor: liked ? 'red' : 'gray' },
                  ]}
                  source={require('../../assets/images/heart.png')}
                  placeholder="image"
                  contentFit="cover"
                  transition={1000}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={handleShare}>
                <Image
                  style={[styleSelected.down_button, { marginTop: 4, marginRight: 10 }]}
                  source={require('../../assets/images/share.png')}
                  placeholder="image"
                  contentFit="cover"
                  transition={1000}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default PopularEvent;
