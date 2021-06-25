import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Registration from './app/components/Registration'
export default function App() {
  return (
    <>

      <View style={styles.container}>
        <Registration />

      </View>
    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'radial-gradient(circle, rgba(2,0,29,1) 0%, rgba(121,57,9,0.8804564061952906) 30%, rgba(0,212,255,1) 100%)',
    paddingLeft: 60,
    paddingRight: 60,


  },

});