import {Container, List, ListItem, Text} from 'native-base';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Loading} from '../../components';
import * as action from './action';

const TopicScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {topics} = useSelector((state) => state.topicReducer);
  useEffect(() => {
    dispatch(action.getTopics());
  }, [dispatch]);
  if (topics.length === 0) {
    return <Loading />;
  }
  return (
    <Container>
      <List
        dataArray={topics}
        keyExtractor={(data) => data.ID.toString()}
        renderRow={(data) => (
          <ListItem
            onPress={() =>
              navigation.navigate('Quiz', {
                topicID: data.ID,
              })
            }>
            <Text>{data.Name}</Text>
          </ListItem>
        )}
      />
    </Container>
  );
};

export default TopicScreen;
