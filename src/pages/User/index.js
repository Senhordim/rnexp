import React from 'react';
import { View, Text } from 'react-native';

const User = ({ navigation }) => {
  console.tron.log(navigation.getParam('user'));
  return (
    <View>
      <Text>Hello User!</Text>
    </View>
  );
};

export default User;
