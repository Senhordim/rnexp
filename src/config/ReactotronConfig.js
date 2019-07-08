import Reactotrom from 'react-native';

if (__DEV__) {
  const tron = Reactotrom.configure()
    .useReactNative()
    .connect();

  console.tron = tron;

  tron.clear();
}
