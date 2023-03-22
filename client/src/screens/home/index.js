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

import {COLORS} from '../../utils/const';

const {width, height} = Dimensions.get('screen');

const Home = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#222' : '#F3F3F3',
  };
  return (
    <SafeAreaView style={[styles.container, backgroundStyle]}>
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Text style={{color: isDarkMode ? 'white' : 'black'}}>
          Home screen
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={{color: isDarkMode ? 'white' : 'black'}}>
            I'am ready
          </Text>
        </View>
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

export default Home;
