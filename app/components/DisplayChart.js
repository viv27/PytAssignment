import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView,TextInput,Modal } from 'react-native';
import LineChartt from './LineChartt'
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import { Dimensions } from 'react-native';

export default function DisplayChart({list}){

  const [twentyFivePlus,setTwentyFivePlus] = useState(0)
  const [fiftyFivePlus,setFiftyFivePlus] = useState(0)
  const [fortyFivePlus,setFortyFivePlus] = useState(0)
  const [thirtyFivePlus,setThirtyFivePlus] = useState(0)
  const [fifteen,setFifteen] = useState(0)
  const [five,setFive] = useState(0)
  if(list.length > 0){
       list.map(person =>{
        
        if(person.age > 55){
           setFiftyFivePlus(fiftyFivePlus+1)
         }
         else if(person.age>45 && person.age <= 55){
            setFortyFivePlus(fortyFivePlus+1)
         }
         else if(person.age > 35 && person.age <= 45){
            setThirtyFivePlus(thirtyFivePlus+1)
         }
         else if(person.age > 25 && person.age <= 35){
            setTwentyFivePlus(twentyFivePlus + 1)
         }
         else if(person.age > 15 && person.age <= 25){
           setFifteen(fifteen + 1)
         }
         else {
           setFive(five + 1)
         }
       })

       
      // }
      }

  return(
    <LineChartt data ={[five,fifteen,twentyFivePlus,thirtyFivePlus,fortyFivePlus,fiftyFivePlus]}/>
    
  )

}
   
const styles = StyleSheet.create({
  container:{
      flex:1,
        alignSelf: 'stretch',
        backgroundColor: 'white',
        paddingLeft: 110,
    paddingRight: 50,
    marginTop:45
  }

});