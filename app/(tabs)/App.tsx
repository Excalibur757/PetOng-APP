import React from 'react';
import { SafeAreaView } from 'react-native';
import HomeScreen from './home';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HomeScreen />
    </SafeAreaView>
  );
}
