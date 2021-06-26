import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView,TextInput,Modal } from 'react-native';
import { Dimensions } from 'react-native';

import {
  LineChart,
  
} from "react-native-chart-kit";
export default function Search({navigation}) {

  const [list,setList] = useState([])
  
  
  let fifty = 0
  let forty = 0
  let thirty = 0
  let twenty = 0
  let ten = 0
  let fivee = 0
  let count = 0 
 let groupSize = 0

  useEffect(() => {
      
      
         fetch("http://www.json-generator.com/api/json/get/bPWwbTqiGa?indent=2")
.then(response => response.json())
.then(data => setList(data))

  

   }, [])
      
       
    list.map(person =>{
        count+=1
        groupSize+= person.guest + 1
        if(person.age > 50){
            fifty+=1
        }
        else if(person.age > 40){
            forty+=1
        }
        else if(person.age > 30){
            thirty+=1
        }
        else if(person.age > 20){
            twenty+=1
        }
        else if(person.age > 10){
            ten+=1
        }
        else{
            fivee+=1
        }
    })
 

   
  return (
      <View style={styles.container}>
    <Text style={styles.header}>STATISTICS</Text>
      <Text style={styles.ageText}>Age Groups:</Text>
      
        <LineChart
    data={{
      labels: ["5-10", "11-20", "21-30", "31-40", "41-50", "51+"],
      datasets: [
        {
          data: [
            fivee,ten,twenty,thirty,forty,fifty
          ]
        }
      ]
    }}
    width={Dimensions.get("window").width} // from react-native
    height={220}
    yAxisLabel=""
    yAxisSuffix=" nos"
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#e26a00",
      backgroundGradientFrom: "#fb8c00",
      backgroundGradientTo: "#ffa726",
      decimalPlaces: 0, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 10
    }}
  />
  <Text style={styles.groupText}>Average Group Size: {(groupSize / count).toFixed(2)}</Text>
  </View>
  
  )
}

const styles = StyleSheet.create({
  container:{
      flex:1,
        alignSelf: 'stretch',
        backgroundColor: 'radial-gradient(circle, rgba(2,0,29,1) 0%, rgba(121,57,9,0.8804564061952906) 30%, rgba(0,212,255,1) 100%)',
        
    marginTop:5
  },
  text:{
      color: 'white',
  },
  ageText:{
      color: 'white',
      marginTop:40,
      fontSize: 18,
      textAlign:'center',
      fontWeight:'bold',
  },
  groupText:{
      color: 'white',
      fontSize: 18,
      marginTop:30,
      display: 'flex',
      textAlign:'center',
      backgroundColor: 'orange',
      padding: 15,
      borderRadius:5,
      color: 'black',
      fontWeight:'bold',
      marginLeft: 20,
    marginRight: 20,
  },
  header:{
      color: 'orange',
      marginTop:20,
      fontSize:25,
      textAlign: 'center',
      marginBottom: 10,
      paddingBottom:10,
        borderBottomColor: "white",
        borderBottomWidth: 1,
        marginLeft: 40,
    marginRight: 40,
    fontWeight:'bold'


  }

});