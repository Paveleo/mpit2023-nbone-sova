import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  SafeAreaView,
  useColorScheme,
  TouchableOpacity,
  ImageBackground,
  Image
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
      <ImageBackground source={require('./../../image/splashscreen.png')} style={{width: '100%', height: '100%'}}>
        <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
          <TouchableOpacity onPress={()=>navigation.navigate(SCREEN_HOME)}>
              <Image source={require('./../../image/iconSova.png')}/>
          </TouchableOpacity>
        </View>
      </ImageBackground>
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
