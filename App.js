import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { concat } from 'react-native-reanimated';
import Profile from './screens/profile'

export default function App() {
  return (
    <View style={styles.container}>
      
      <Profile name="Shakoofa" phone="0730964534" email="Shakoofazamani786@gmail.com" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
