  import React, { useEffect, useState, useRef } from 'react';
  import { SafeAreaView, StatusBar, Appearance, useColorScheme, Platform, KeyboardAvoidingView, View, Text, TouchableOpacity, Alert } from 'react-native';
  import style from '../../style/Style';
  import styleDark from '../../style/StyleDark';
  import * as NavigationBar from 'expo-navigation-bar';
  import * as SplashScreen from 'expo-splash-screen';
  import Loader from '../components/Loader';
  import { Calendar } from 'react-native-calendars';
  import ButtonPrimary from '../components/ButtonPrimary';

  export default function CalendarScreen({ route, navigation }) {
    const [isLoading, setIsLoading] = useState(true);
    const [selectedDays, setSelectedDays] = useState({});
    const calendarRef = useRef(null);
    let colorScheme = useColorScheme();
    var styleSelected = colorScheme == 'light' ? style : styleDark;
    var colors = require('../../style/Colors.json');

    useEffect(() => {
      console.log('OPEN', Calendar.name, 'SCREEN');
      // For test loading
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
      return () => {
        console.log('SCREEN', Calendar.name, 'CLOSE');
      };
    }, []);

    Appearance.getColorScheme();
    Appearance.addChangeListener(({ colorScheme }) => {
      console.log('COLOR THEME WAS ALTER');
      console.log(colorScheme);
      if (Platform.OS === 'android')
        NavigationBar.setBackgroundColorAsync(colorScheme === 'light' ? colors.Base_Slot_1 : colors.Base_Slot_1);
    });

    const onLayoutRootView = () => {
      if (isLoading) {
      }
    };

    const handleDayPress = (day) => {
      const { dateString } = day;
      const selectedDate = new Date(dateString);
      const markedDates = { ...selectedDays };

      if (Object.keys(markedDates).length === 0) {
        // No dates are selected yet, so mark the current date
        markedDates[dateString] = { selected: true, selectedColor: colors.Base_Slot_3 };
      } else {
        const firstSelectedDate = new Date(Object.keys(markedDates)[0]);
        const lastSelectedDate = new Date(Object.keys(markedDates)[Object.keys(markedDates).length - 1]);

        if (selectedDate < firstSelectedDate) {
          // If the selected date is before the first selected date, mark the range from the selected date to the first selected date
          const currentDate = new Date(selectedDate);
          while (currentDate <= firstSelectedDate) {
            markedDates[currentDate.toISOString().slice(0, 10)] = { selected: true, selectedColor: colors.Base_Slot_3 };
            console.log(currentDate.toISOString().slice(0, 10)); // Log the date
            currentDate.setDate(currentDate.getDate() + 1);
          }
        } else if (selectedDate > lastSelectedDate) {
          // If the selected date is after the last selected date, mark the range from the last selected date to the selected date
          const currentDate = new Date(lastSelectedDate);
          while (currentDate <= selectedDate) {
            markedDates[currentDate.toISOString().slice(0, 10)] = { selected: true, selectedColor: colors.Base_Slot_3 };
            console.log(currentDate.toISOString().slice(0, 10)); // Log the date
            currentDate.setDate(currentDate.getDate() + 1);
          }
        } else {
          // The selected date is within the range, so remove all the dates in the range
          const currentDate = new Date(firstSelectedDate);
          while (currentDate <= lastSelectedDate) {
            delete markedDates[currentDate.toISOString().slice(0, 10)];
            console.log(currentDate.toISOString().slice(0, 10)); // Log the date
            currentDate.setDate(currentDate.getDate() + 1);
          }
        }
      }

      setSelectedDays(markedDates);
    };

    const handleResetCalendar = () => {
      if (Object.keys(selectedDays).length > 0) {
        Alert.alert(
          'Confirmation',
          'Are you sure you want to reset the calendar?',
          [
            {
              text: 'Cancel',
              style: 'cancel',
            },
            {
              text: 'Reset',
              style: 'destructive',
              onPress: () => {
                setSelectedDays({});
                if (calendarRef.current) {
                  calendarRef.current.unmarkDates();
                }
              },
            },
          ],
          { cancelable: true }
        );
      }
    };

    const handleOutsidePress = (event) => {
      if (calendarRef.current) {
        const { locationX, locationY } = event.nativeEvent;
        const calendarRefPosition = calendarRef.current?.getCalendarRefPosition();

        if (
          calendarRefPosition &&
          locationX >= calendarRefPosition.left &&
          locationX <= calendarRefPosition.right &&
          locationY >= calendarRefPosition.top &&
          locationY <= calendarRefPosition.bottom
        ) {
          // Press event occurred inside the calendar, do nothing
          return;
        }
      }

      handleResetCalendar();
    };

    if (isLoading) {
      return <Loader />;
    }

    return (
      <TouchableOpacity activeOpacity={1} style={{ flex: 1 }} onPress={handleOutsidePress}>
        <SafeAreaView style={[styleSelected.backgroundPrimary, { flex: 1 }]} onLayout={onLayoutRootView}>
          <StatusBar
            translucent={true}
            backgroundColor={'transparent'}
            barStyle={colorScheme === 'light' ? 'dark-content' : 'light-content'}
          />
          <KeyboardAvoidingView
            style={{ flex: 1, marginBottom: 10 }}
            enabled={true}
            behavior={Platform.OS == 'android' ? 'height' : 'padding'}
            keyboardVerticalOffset={Platform.OS == 'android' ? -150 : -150}
          >
            <View style={{ backgroundColor: colors.BaseSlot3, flex: 1 }}>
              <Text style={[styleSelected.textNormal20, { textAlign: 'center' }]}>When do you want to go?</Text>
              <Text style={[styleSelected.textNormal12, { textAlign: 'center', marginTop: 40 }]}>
                Select your time schedule and availability:
              </Text>
              <View style={{ margin: 20 }}>
                <Calendar
                  ref={calendarRef}
                  onDayPress={handleDayPress}
                  markedDates={selectedDays}
                  style={{
                    borderRadius: 10,
                  }}
                />
              </View>
              <View style={{ marginTop: 'auto', marginBottom: 20, width: '90%', alignSelf: 'center' }}>
                <ButtonPrimary
                  title={"Next"}
                  colorText={colors.BaseSlot3}
                  event={() => console.log("GO TO PLAN YOUR TRIP")}
                />
              </View>
            </View>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </TouchableOpacity>
    );
  }
