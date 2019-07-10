import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Form, Input, SubmitButton  } from './style';

const Main = () => {
  return (
    <Container>
      <Form>
        <Input
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Adicionar usuário"
        />
        <SubmitButton>
          <Icon name="add" size={20} color="#fff" />
        </SubmitButton>
      </Form>
    </Container>
  );
};

Main.navigationOptions = {
  title: 'Principal',
};

export default Main;
