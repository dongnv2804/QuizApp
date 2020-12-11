import React, {useEffect} from 'react';
import {Container, Text, Content, Button, View} from 'native-base';
import {ImageBackground, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import * as action from './action';

const images = {
  uri:
    'https://png.pngtree.com/png-vector/20191021/ourlarge/pngtree-speech-sign-text-quiz-time-vector-illustration-png-image_1824077.jpg',
};
const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {data} = useSelector((state) => state.home);
  useEffect(() => {
    dispatch(action.getData({payload: 5}));
  }, [dispatch]);
  return (
    <Container>
      <ImageBackground source={images} style={style.image}>
        <View style={style.wrapContent}>
          <Button onPress={() => navigation.navigate('Topic')} transparent>
            <Text style={style.text}>Let's Go</Text>
          </Button>
        </View>
      </ImageBackground>
    </Container>
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
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  text: {
    fontSize: 24,
    color: '#22dae0',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
