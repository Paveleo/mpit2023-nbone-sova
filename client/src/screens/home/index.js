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

import {COLORS} from '../../utils/const';
// const [value, onChangeText] = React.useState('Useless Multiline Placeholder');
const {width, height} = Dimensions.get('screen');
const Home = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#222' : '#F3F3F3',
  };
  return (
    <ScrollView style={[styles.container, backgroundStyle]}>
      <ImageBackground source={require('./../../image/splashscreen.png')} style={{width: '100%', height: '100%'}}>
        <View style={{ paddingHorizontal: 40}}>
          <View style={{justifyContent: 'center', flexDirection: 'row', justifyContent: 'space-between',alignItems: 'baseline', paddingTop: 40}}>
            <Text style={{color: '#000000', fontSize: 24}}>Главная</Text>
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
          <Image source={require('./../../image/imageAnime.png')} style={{borderRadius: 16, marginTop: 20}}/>
          <View>
            <Text style={{color: '#000000', fontSize: 20, paddingTop: 20}}>Новости</Text>
          </View>
          <View  style={{paddingTop: 20}}>
            <View  style={{width: 334, height: 137, borderWidth: 1, borderColor: '#E7E7E7', borderRadius: 16}}>
              <View style={{paddingHorizontal: 20, paddingTop: 16}}>
                <Text style={{color: '#000000', fontSize: 16}}>Каникулы начинаются </Text>
                <Text style={{color: '#000000', fontSize: 10, opacity: 0.4}}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.  </Text>
                <View style={{flexDirection: 'row', marginTop: 10, justifyContent: 'space-between'}}>
                  <Text style={{color: '#000000', fontSize: 10, opacity: 0.4}}>01.09.2023 </Text>
                  <Text style={{color: '#000000', fontSize: 10, opacity: 0.4}}>20:25 </Text>
                </View>
              </View>
            </View>
          </View>
          <View  style={{paddingTop: 20}}>
            <View  style={{width: 334, height: 137, borderWidth: 1, borderColor: '#E7E7E7', borderRadius: 16}}>
              <View style={{paddingHorizontal: 20, paddingTop: 16}}>
                <Text style={{color: '#000000', fontSize: 16}}>Каникулы начинаются </Text>
                <Text style={{color: '#000000', fontSize: 10, opacity: 0.4}}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.  </Text>
                <View style={{flexDirection: 'row', marginTop: 10, justifyContent: 'space-between'}}>
                  <Text style={{color: '#000000', fontSize: 10, opacity: 0.4}}>01.09.2023 </Text>
                  <Text style={{color: '#000000', fontSize: 10, opacity: 0.4}}>20:25 </Text>
                </View>
              </View>
            </View>
          </View>
          <View  style={{paddingTop: 20}}>
            <View  style={{width: 334, height: 137, borderWidth: 1, borderColor: '#E7E7E7', borderRadius: 16}}>
              <View style={{paddingHorizontal: 20, paddingTop: 16}}>
                <Text style={{color: '#000000', fontSize: 16}}>Каникулы начинаются </Text>
                <Text style={{color: '#000000', fontSize: 10, opacity: 0.4}}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.  </Text>
                <View style={{flexDirection: 'row', marginTop: 10, justifyContent: 'space-between'}}>
                  <Text style={{color: '#000000', fontSize: 10, opacity: 0.4}}>01.09.2023 </Text>
                  <Text style={{color: '#000000', fontSize: 10, opacity: 0.4}}>20:25 </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
      <View style={{width: 416, height: 93}}>
        <Text style={{color: '#000000', fontSize: 10, opacity: 0.4}}>20:25 </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
    height,
    // alignItems: 'center',
    backgroundColor: COLORS.background,
  },
});

export default Home;
