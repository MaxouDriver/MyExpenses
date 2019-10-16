import React from 'react';
//import react in our code.
import {
  View,
  StyleSheet,
  StatusBar,
  Dimensions,
  Image,
  TouchableOpacity,
  Platform,
  Text,
} from 'react-native';
import AppNavigator from './src/navigation/AppNavigator.js';
import {MainProvider} from './src/context/MainContext.js';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  return (
    <MainProvider>
      {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
      <AppNavigator/>
    </MainProvider>
  );
}
