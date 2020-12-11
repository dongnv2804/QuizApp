import {Container, Text} from 'native-base';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import * as action from './action';

const ResultScreen = () => {
  const dispatch = useDispatch();
  const {dataquestion, result} = useSelector((state) => state.quizReducer);
  useEffect(() => {
    dispatch(action.getResult(dataquestion));
  }, [dispatch]);
  return (
    <Container>
      <Text>Result : {result.score}</Text>
      <Text>Count Correct : {result.countCorrect}</Text>
    </Container>
  );
};

export default ResultScreen;
