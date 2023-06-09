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
import {SCREEN_NOTIFICATION} from '..';

import {COLORS} from '../../utils/const';

const {width, height} = Dimensions.get('screen');

const Notification = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#222' : '#F3F3F3',
  };
  return (
    <ScrollView style={[styles.container, backgroundStyle]}>
      <ImageBackground source={require('./../../image/splashscreen.png')} style={{width: '100%', height: '100%'}}>
        <View style={{ paddingHorizontal: 40}}>
            <View style={{paddingTop: 20}}>
                <TouchableOpacity onPress={()=>navigation.navigate(SCREEN_NOTIFICATION)}>
                <Image source={require('./../../image/backspace.png')}/>
                </TouchableOpacity>
            </View>
            <View style={{width: 331, height: 38, marginTop: 40}}><Text style={{fontSize: 30,color: '#262931', fontWeight: '400'}}>Расписание 📃</Text></View>
            <Text style={{color: '#4FEF8F', fontSize: 20, marginTop: 20}}>Понедельник</Text>
            <View  style={{paddingTop: 20}}>
                <View  style={{width: 334, height: 137, borderWidth: 1, borderColor: '#E7E7E7', borderRadius: 16, marginTop: 8}}>
                    <View style={{paddingHorizontal: 20, paddingTop: 16}}>
                        <Text style={{color: '#000000', fontSize: 16}}>Алгебра </Text>
                        <Text style={{color: '#000000', fontSize: 10, opacity: 0.4}}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.  </Text>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <View style={{flexDirection: 'row', marginTop: 10, justifyContent: 'space-between'}}>
                                <Text style={{color: '#000000', fontSize: 10, opacity: 0.4}}>с 13:15 </Text>
                                <Text style={{color: '#000000', fontSize: 10, opacity: 0.4}}>до 14:00 </Text>
                            </View>
                            <View style={{marginTop: 10, backgroundColor: '#F8F8F8', width: 82, height: 26, borderRadius: 50, alignItems: 'center', justifyContent: 'center', borderWidth: 0.4}}>
                                <TouchableOpacity>
                                    <Text style={{fontSize: 10, color: '#000000', opacity: 0.4}}>315 каб</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                <View  style={{width: 334, height: 137, borderWidth: 1, borderColor: '#E7E7E7', borderRadius: 16, marginTop: 8}}>
                    <View style={{paddingHorizontal: 20, paddingTop: 16}}>
                        <Text style={{color: '#000000', fontSize: 16}}>Английский </Text>
                        <Text style={{color: '#000000', fontSize: 10, opacity: 0.4}}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.  </Text>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <View style={{flexDirection: 'row', marginTop: 10, justifyContent: 'space-between'}}>
                                <Text style={{color: '#000000', fontSize: 10, opacity: 0.4}}>с 13:15 </Text>
                                <Text style={{color: '#000000', fontSize: 10, opacity: 0.4}}>до 14:00 </Text>
                            </View>
                            <View style={{marginTop: 10, backgroundColor: '#F8F8F8', width: 82, height: 26, borderRadius: 50, alignItems: 'center', justifyContent: 'center', borderWidth: 0.4}}>
                                <TouchableOpacity>
                                    <Text style={{fontSize: 10, color: '#000000', opacity: 0.4}}>316 каб</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                <View  style={{width: 334, height: 137, borderWidth: 1, borderColor: '#E7E7E7', borderRadius: 16, marginTop: 8}}>
                    <View style={{paddingHorizontal: 20, paddingTop: 16}}>
                        <Text style={{color: '#000000', fontSize: 16}}>История </Text>
                        <Text style={{color: '#000000', fontSize: 10, opacity: 0.4}}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.  </Text>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <View style={{flexDirection: 'row', marginTop: 10, justifyContent: 'space-between'}}>
                                <Text style={{color: '#000000', fontSize: 10, opacity: 0.4}}>с 13:15 </Text>
                                <Text style={{color: '#000000', fontSize: 10, opacity: 0.4}}>до 14:00 </Text>
                            </View>
                            <View style={{marginTop: 10, backgroundColor: '#F8F8F8', width: 82, height: 26, borderRadius: 50, alignItems: 'center', justifyContent: 'center', borderWidth: 0.4}}>
                                <TouchableOpacity>
                                    <Text style={{fontSize: 10, color: '#000000', opacity: 0.4}}>317 каб</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                <View  style={{width: 334, height: 137, borderWidth: 1, borderColor: '#E7E7E7', borderRadius: 16, marginTop: 8}}>
                    <View style={{paddingHorizontal: 20, paddingTop: 16}}>
                        <Text style={{color: '#000000', fontSize: 16}}>Астрономия </Text>
                        <Text style={{color: '#000000', fontSize: 10, opacity: 0.4}}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.  </Text>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <View style={{flexDirection: 'row', marginTop: 10, justifyContent: 'space-between'}}>
                                <Text style={{color: '#000000', fontSize: 10, opacity: 0.4}}>с 13:15 </Text>
                                <Text style={{color: '#000000', fontSize: 10, opacity: 0.4}}>до 14:00 </Text>
                            </View>
                            <View style={{marginTop: 10, backgroundColor: '#F8F8F8', width: 82, height: 26, borderRadius: 50, alignItems: 'center', justifyContent: 'center', borderWidth: 0.4}}>
                                <TouchableOpacity>
                                    <Text style={{fontSize: 10, color: '#000000', opacity: 0.4}}>318 каб</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                <View  style={{width: 334, height: 137, borderWidth: 1, borderColor: '#E7E7E7', borderRadius: 16, marginTop: 8}}>
                    <View style={{paddingHorizontal: 20, paddingTop: 16}}>
                        <Text style={{color: '#000000', fontSize: 16}}>Биология </Text>
                        <Text style={{color: '#000000', fontSize: 10, opacity: 0.4}}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.  </Text>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <View style={{flexDirection: 'row', marginTop: 10, justifyContent: 'space-between'}}>
                                <Text style={{color: '#000000', fontSize: 10, opacity: 0.4}}>с 13:15 </Text>
                                <Text style={{color: '#000000', fontSize: 10, opacity: 0.4}}>до 14:00 </Text>
                            </View>
                            <View style={{marginTop: 10, backgroundColor: '#F8F8F8', width: 82, height: 26, borderRadius: 50, alignItems: 'center', justifyContent: 'center', borderWidth: 0.4}}>
                                <TouchableOpacity>
                                    <Text style={{fontSize: 10, color: '#000000', opacity: 0.4}}>319 каб</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
      </ImageBackground>
    </ScrollView>
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

export default Notification;
