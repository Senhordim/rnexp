import React from 'react';
import { View, Text } from 'react-native';
import { Container } from './style';

const Main = () => {
  return (
    <Container>
      <Text>Hello Main!</Text>
    </Container>
  );
};

Main.navigationOptions = {
  title: 'Principal'
}

export default Main;
