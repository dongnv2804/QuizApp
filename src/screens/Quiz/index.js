import {Button, Container, Content, Spinner, Text, View} from 'native-base';
import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import * as action from './action';
import * as sliceAct from './slice';
import {Loading} from '../../components';

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
    <View style={styles.wrapContent}>
      <View style={styles.contentQuiz}>
        <Text>{question && question.Content}</Text>
      </View>
      <View style={styles.answer}>
        {question &&
          question.Answers.map((value) => (
            <View key={value.ID} style={styles.wrapBtn}>
              <Button
                style={styles.btnAnser}
                onPress={() =>
                  hanldeSubmit({questionId: question.ID, answerId: value.ID})
                }>
                <Text>{value.Content}</Text>
              </Button>
            </View>
          ))}
      </View>
    </View>
  );
};

const QuizScreen = ({route, navigation}) => {
  const {topicID} = route.params;
  const dispatch = useDispatch();
  const {questions} = useSelector((state) => state.quizReducer);
  const Stack = createStackNavigator();
  useEffect(() => {
    dispatch(action.getQuestions({topicId: topicID}));
  }, [dispatch, route]);
  useEffect(() => {
    return () => {
      dispatch(sliceAct.resetState());
    };
  }, []);
  if (questions.length === 0) {
    return <Loading />;
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

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapContent: {
    flex: 1,
    flexDirection: 'column',
  },
  contentQuiz: {
    height: '30%',
    textAlign: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 30,
    paddingTop: 30,
  },
  answer: {
    height: '70%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  wrapBtn: {
    width: '50%',
    padding: 10,
  },
  btnAnser: {
    width: '100%',
    justifyContent: 'center',
  },
});

export default QuizScreen;
