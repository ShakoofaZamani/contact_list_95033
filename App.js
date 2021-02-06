import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { concat } from 'react-native-reanimated';
import Contacts from './screens/contacts'

export default function App() {
  return (
    <View style={styles.container}>
      
      <Contacts />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
