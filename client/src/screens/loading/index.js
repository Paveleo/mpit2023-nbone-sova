import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  SafeAreaView,
  useColorScheme,
  TouchableOpacity,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {COLORS} from '../../utils/const';
import { SCREEN_HOME } from '..';

const {width, height} = Dimensions.get('screen');

const Loading = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#222' : '#F3F3F3',
  };
  return (
    <SafeAreaView style={[styles.container, backgroundStyle]}>
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Text style={{color: isDarkMode ? 'white' : 'black'}}>
          Loading screen
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={{color: isDarkMode ? 'white' : 'black'}}>
            I'am ready
          </Text>
          <AntDesign
            color={isDarkMode ? 'white' : 'black'}
            size={20}
            name="check"></AntDesign>
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate(SCREEN_HOME)}>
            <Text style={{color: isDarkMode ? 'white' : 'black'}}>TO GO SCREEN_HOME</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
    height,
    alignItems: 'center',
    backgroundColor: COLORS.background,
  },
});

export default Loading;
