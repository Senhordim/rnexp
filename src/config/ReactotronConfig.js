import Reactotrom from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactotrom.configure()
    .useReactNative()
    .connect();

  console.tron = tron;

  tron.clear();
}
