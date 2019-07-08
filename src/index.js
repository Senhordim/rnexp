import React from 'react';

import { Text, View } from 'react-native';

import './config/ReactotronConfig';

export default function App() {
  console.tron.log('-->', this);
  return (
    <View>
      <Text>Olá Dev!</Text>
    </View>
  );
}
