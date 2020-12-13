import {Button, Container, H3, Spinner, Text} from 'native-base';
import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Loading from '../../components/loading';
import * as action from './action';

const ResultScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {dataquestion, result} = useSelector((state) => state.quizReducer);
  useEffect(() => {
    dispatch(action.getResult(dataquestion));
  }, [dispatch]);
  if (result == null) {
    return <Loading title="Caculating" />;
  }
  return (
    <Container style={styles.content}>
      <View>
        <H3>Score : {result.score}</H3>
        <H3>Count Correct : {result.countCorrect}</H3>
      </View>
      <View style={styles.playAgain}>
        <Button onPress={() => navigation.navigate('Topic')}>
          <Text>Play again</Text>
        </Button>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingTop: '50%',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  playAgain: {
    paddingTop: 20,
  },
});

export default ResultScreen;
