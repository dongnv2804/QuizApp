import {Button, Container, Content, Text, View} from 'native-base';
import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import * as action from './action';

const ContentQuiz = ({route, navigation}) => {
  const dispatch = useDispatch();
  const {question, index, lengthQuestion} = route.params;
  const hanldeSubmit = useCallback(
    ({questionId, answerId}) => {
      dispatch(action.addDataAnswer({questionId, answerId}));
      if (index + 1 < lengthQuestion) {
        navigation.navigate(`Question${index + 1}`);
      } else {
        navigation.navigate('Result');
      }
    },
    [dispatch, question],
  );
  return (
    <View>
      <View>
        <Text>{question && question.Content}</Text>
      </View>
      <View>
        {question &&
          question.Answers.map((value) => (
            <Button
              key={value.ID}
              onPress={() =>
                hanldeSubmit({questionId: question.ID, answerId: value.ID})
              }>
              <Text>{value.Content}</Text>
            </Button>
          ))}
      </View>
    </View>
  );
};

const QuizScreen = ({route, navigation}) => {
  const {topicID} = route.params;
  const dispatch = useDispatch();
  const {questions, dataquestion} = useSelector((state) => state.quizReducer);
  const Stack = createStackNavigator();
  useEffect(() => {
    console.log('render');
    dispatch(action.getQuestions({topicId: topicID}));
  }, [dispatch, topicID]);
  if (questions.length === 0) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }
  return (
    <Stack.Navigator>
      {questions &&
        questions.map((question, index) => (
          <Stack.Screen
            key={index}
            name={`Question${index}`}
            options={{headerShown: false}}
            component={ContentQuiz}
            initialParams={{question, index, lengthQuestion: questions.length}}
          />
        ))}
    </Stack.Navigator>
  );
};

export default QuizScreen;
