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
  TextInput,
  Image,
  ScrollView
} from 'react-native';
import { SCREEN_HOMEWORK, SCREEN_HOME } from '..';

import {COLORS} from '../../utils/const';
const {width, height} = Dimensions.get('screen');
const Services = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#222' : '#F3F3F3',
  };
  return (
    <SafeAreaView style={[styles.container, backgroundStyle]}>
      <ImageBackground source={require('./../../image/splashscreen.png')} style={{width: '100%', height: '100%'}}>
        <View style={{ paddingHorizontal: 40}}>
          <View style={{justifyContent: 'center', flexDirection: 'row', justifyContent: 'space-between',alignItems: 'baseline', paddingTop: 40}}>
              <TouchableOpacity onPress={()=>navigation.navigate(SCREEN_HOME)}>
                <Text style={{color: '#000000', fontSize: 24}}>Главная</Text>
              </TouchableOpacity>
            <Text style={{color: '#999999', fontSize: 10}}>Нижне-Бестяхская СОШ им. М. Е. Попова</Text>
          </View>
          <View style={{flexDirection: 'row', paddingTop: 24}}>
            <View style={{backgroundColor: 'white',borderWidth: 1, borderColor: '#39E29A', borderRadius: 100, width: 286, height: 40}}>
              <TextInput
                editable
                multiline
                numberOfLines={4}
                maxLength={40}
                // onChangeText={text => onChangeText(text)}
              />
            </View>
            <TouchableOpacity style={{marginLeft: 8}}>
              <Image source={require('./../../image/icon_bell.png')}/>
            </TouchableOpacity>
            </View>
            <View style={{width: 342, height: 65, borderBottomWidth: 1, flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity onPress={()=>navigation.navigate(SCREEN_HOMEWORK)}>
                <Text style={{fontSize: 14, color: '#262931'}}>🔥   Домашние задания</Text>
                </TouchableOpacity>
            </View >
            <View style={{width: 342, height: 65, borderBottomWidth: 1,flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity>
                    <Text style={{fontSize: 14, color: '#262931'}}>📃   Расписание</Text>
                </TouchableOpacity>
            </View>
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

export default Services;
