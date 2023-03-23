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
import { SCREEN_HOME } from '..';

import {COLORS} from '../../utils/const';
const {width, height} = Dimensions.get('screen');
const Profile = ({navigation}) => {
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
                <Text style={{color: '#000000', fontSize: 24}}>Профиль</Text>
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
          <View style={{marginTop: 31}}>
            <View style={{flexDirection: 'row',}}>
                <Image 
                    style={{width: 128, height: 131,}}
                    source={require('../../image/avatar.png')}
                />
                <View style={{marginLeft: 16,}}>
                    <Text style={{color: 'black', fontSize: 24, fontWeight: '600',}}>Иванов</Text>
                    <Text style={{color: 'black', fontSize: 24, fontWeight: '600',}}>Иван</Text>
                    <View style={{marginTop: 16}}>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{width: 78, height: 40, borderRadius: 35, borderWidth: 1, borderColor: '#E8E9F2', color: 'black', textAlign: 'center', paddingTop: 10, fontSize: 12}}>9 класс</Text>
                            <TouchableOpacity style={{width: 40, height: 40, marginLeft: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 35, borderWidth: 1, borderColor: '#E8E9F2',}}>
                                <Image 
                                    source={require('../../image/screw.png')}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>   
            </View>
            <View style={{marginTop: 20}}>
                <Text style={{color: 'black', fontSize: 20, marginBottom: 25,}}>Рейтинг</Text>
                <ScrollView style={{height: height/2.5, width: '100%'}}>
                <View style={{flexDirection: 'row', marginBottom: 15}}>
                    <Image 
                        style={{height: 48, width: 48,}}
                        source={require('../../image/ellipse.png')}
                    />
                    <View style={{justifyContent: 'center', alignItems: 'center', marginLeft: 16}}>
                        <Text style={{color: 'black', fontSize: 20,}}>Иванов Иван #1</Text>
                    </View>
                </View>
                <Image 
                    source={require('../../image/line.png')}
                />
                <View style={{flexDirection: 'row', marginTop: 15, marginBottom: 15}}>
                    <Image 
                        style={{height: 48, width: 48,}}
                        source={require('../../image/ellipse.png')}
                    />
                    <View style={{justifyContent: 'center', alignItems: 'center', marginLeft: 16,}}>
                        <Text style={{color: 'black', fontSize: 20,}}>Иванов Иван #2</Text>
                    </View>
                </View>
                <Image 
                    source={require('../../image/line.png')}
                />
                <View style={{flexDirection: 'row', marginTop: 15, marginBottom: 15}}>
                    <Image 
                        style={{height: 48, width: 48,}}
                        source={require('../../image/ellipse.png')}
                    />
                    <View style={{justifyContent: 'center', alignItems: 'center', marginLeft: 16,}}>
                        <Text style={{color: 'black', fontSize: 20,}}>Иванов Иван #3</Text>
                    </View>
                </View>
                <Image 
                    source={require('../../image/line.png')}
                />
                <View style={{flexDirection: 'row', marginTop: 15, marginBottom: 15}}>
                    <Image 
                        style={{height: 48, width: 48,}}
                        source={require('../../image/ellipse.png')}
                    />
                    <View style={{justifyContent: 'center', alignItems: 'center', marginLeft: 16,}}>
                        <Text style={{color: 'black', fontSize: 20,}}>Иванов Иван #4</Text>
                    </View>
                </View>
                <Image 
                    source={require('../../image/line.png')}
                />
                <View style={{flexDirection: 'row', marginTop: 15, marginBottom: 15}}>
                    <Image 
                        style={{height: 48, width: 48,}}
                        source={require('../../image/ellipse.png')}
                    />
                    <View style={{justifyContent: 'center', alignItems: 'center', marginLeft: 16,}}>
                        <Text style={{color: 'black', fontSize: 20,}}>Иванов Иван #5</Text>
                    </View>
                </View>
                <Image 
                    source={require('../../image/line.png')}
                />
                </ScrollView>
            </View>
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

export default Profile;
