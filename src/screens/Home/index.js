import React from 'react';
import {Text, View} from 'native-base';
import {ImageBackground, StyleSheet} from 'react-native';

const images = {
  uri:
    'https://png.pngtree.com/png-vector/20191021/ourlarge/pngtree-speech-sign-text-quiz-time-vector-illustration-png-image_1824077.jpg',
};
const HomeScreen = ({navigation}) => {
  return (
    <View
      style={style.wrapContent}
      onTouchStart={() => navigation.navigate('Topic')}>
      <ImageBackground source={images} style={style.image}>
        <Text style={style.text}>Let's Go</Text>
      </ImageBackground>
    </View>
  );
};

const style = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapContent: {
    flex: 1,
  },
  text: {
    fontSize: 48,
    color: '#17c245',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
