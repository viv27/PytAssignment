import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView,ScrollView,Modal } from 'react-native';
import Registration from './app/components/Registration'
import Search from './app/components/Search'
export default function App() {
  return (
    <ScrollView>

      <View style={styles.container}>
        <Search />

      </View>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
    justifyContent: 'center',
    backgroundColor: 'radial-gradient(circle, rgba(2,0,29,1) 0%, rgba(121,57,9,0.8804564061952906) 30%, rgba(0,212,255,1) 100%)',
    paddingLeft: 30,
    paddingRight: 30,


  },

});