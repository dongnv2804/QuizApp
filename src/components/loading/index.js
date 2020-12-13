import React from 'react';
import {Spinner} from 'native-base';
import {StyleSheet, View, Text} from 'react-native';

const Loading = ({title}) => {
  return (
    <View style={styles.content}>
      <Spinner />
      {title ? <Text>{title}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Loading;
