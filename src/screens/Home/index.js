import React, {useEffect} from 'react';
import {
  Container,
  Header,
  Left,
  Text,
  Icon,
  Body,
  Content,
  Button,
} from 'native-base';
import {ImageBackground, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import * as action from './action';

const images = {
  uri:
    'https://image.freepik.com/free-vector/blue-quiz-background-with-white-details_23-2147597517.jpg',
};
const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {data} = useSelector((state) => state.home);
  console.log(data);
  useEffect(() => {
    dispatch(action.getData({payload: 5}));
  }, [dispatch]);
  return (
    <Container>
      <ImageBackground source={images} style={style.image}>
        <Content></Content>
      </ImageBackground>
    </Container>
  );
};

const style = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

export default HomeScreen;
