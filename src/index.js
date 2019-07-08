import React from 'react';

import { Text, View } from 'react-native';

export default function App() {
  console.log('-->', this);
  return (
    <View>
      <Text>Olá Dev!</Text>
    </View>
  );
}
