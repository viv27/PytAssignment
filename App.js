import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView,ScrollView,Modal } from 'react-native';
import Registration from './app/components/Registration'
import Search from './app/components/Search'
import { NavigationContainer } from '@react-navigation/native';
import {createDrawerNavigator} from "@react-navigation/drawer"
import Report from './app/components/Report'
import Test from './app/components/Report'
const Drawer = createDrawerNavigator()
export default function App() {
  return (
    < >

      <View style={styles.container}>
        <NavigationContainer> 
           <Drawer.Navigator initialRoute ="Registration">
            <Drawer.Screen name="Registration" component ={Registration}/>
            <Drawer.Screen name="Search" component ={Search}/>
            <Drawer.Screen name ="Report" component ={Report}/>

          </Drawer.Navigator>

        </NavigationContainer>
        
        

      </View>
    </>

  );
}

const styles = StyleSheet.create({
  container: {
    
  
    
    flex:1,
    justifyContent: 'center',
    backgroundColor: 'radial-gradient(circle, rgba(2,0,29,1) 0%, rgba(121,57,9,0.8804564061952906) 30%, rgba(0,212,255,1) 100%)',
    // paddingLeft: 30,
    // paddingRight: 30,


  },

});