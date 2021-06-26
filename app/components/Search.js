import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView,TextInput,Modal } from 'react-native';

export default function Search({navigation}) {
    const [list,setList] = useState([])
    const [text,setText] = useState('')
    const [modal,setModal] = useState(true)

    useEffect(() => {
         fetch("http://www.json-generator.com/api/json/get/bPWwbTqiGa?indent=2")
.then(response => response.json())
.then(data => setList(data))
        
    }, [])
  
  
    
  return (
    
<ScrollView style={styles.container}>     
       
        <TextInput onChangeText ={text =>setText(text)}  placeholderTextColor="black" defaultValue={text}  placeholder="Search..." style = {styles.text}/>
        
      <>
        
       
    
        {text === '' ? list.map(person =>{

            return  <View style={styles.person} key={person._id}>
                    <Text style={styles.personName}>{person.name}</Text>
                    <Text style={styles.personLocality}>🏠{person.locality}</Text>
                   
                    
            
                    </View>
        }): list.filter(opt =>opt.name.toLowerCase().includes(text.toLowerCase())).map(person=>{
            return  <View style={styles.person} key={person._id}>
                    <Text style={styles.personName}>👱{person.name}</Text>
                    <Text style={styles.personLocality}>{person.locality}🏠</Text>
        
        
                    </View>
        })}
        </>
    
</ScrollView>


  );
}

const styles = StyleSheet.create({
  container: {
         flex:1,
        alignSelf: 'stretch',
        backgroundColor: 'lightgray',
        paddingLeft: 10,
    paddingRight: 10,
    
    
    

  },
  text:{
      color:'black',
      fontSize:21,
      marginTop:60,
      marginBottom:40,
      backgroundColor: 'white',
      padding:15,
      borderRadius:25
  },
  person:{
      color:'black',
      display: 'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      borderWidth:2,
      
      marginBottom:5,
      borderRadius:25,
      padding:10,
      backgroundColor: 'whitesmoke',
      padding:20,
      shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 3,
},
shadowOpacity: 0.29,
shadowRadius: 4.65,

elevation: 7,
      




  },
  personLocality:{
      color:'black',
      fontSize: 19,
      
  },
  personName:{
      color:'black',
      fontSize: 19,
  }

});