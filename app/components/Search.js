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
    // function searchUser(text) {
    //     const newList = list.filter(i=>
    //         i.name.includes(text)
    //        
    //     setList(newList)    
    // }


    // function onChange(text) {

    //     if(text !== ''){
    //     const newList = list.filter(i=>
    //         i.name.toLowerCase().includes(text))
           
    //     setList(newList)   
    //     }
        
        
    

// }
  
    
  return (
<ScrollView style={styles.container}>     
       
        <TextInput onChangeText ={text =>setText(text)}  placeholderTextColor="black" defaultValue={text}  placeholder="Search..." style = {styles.text}/>
        
      <>
        
        {/* {list.map(person =>{
            return <View style={styles.person} key={person._id}>
                    <Text style={styles.personName}>👱{person.name}</Text>
                    <Text style={styles.personLocality}>🏠{person.locality}</Text>
            
                    </View>
        })} */}
    
        {text === '' ? list.map(person =>{

            return  <View style={styles.person} key={person._id}>
                    <Text style={styles.personName}>👱{person.name}</Text>
                    <Text style={styles.personLocality}>🏠{person.locality}</Text>
                   
                    
            
                    </View>
        }): list.filter(opt =>opt.name.includes(text)).map(person=>{
            return  <View style={styles.person} key={person._id}>
                    <Text style={styles.personName}>👱{person.name}</Text>
                    <Text style={styles.personLocality}>🏠{person.locality}</Text>
        
        
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
        backgroundColor: 'radial-gradient(circle, rgba(2,0,29,1) 0%, rgba(121,57,9,0.8804564061952906) 30%, rgba(0,212,255,1) 100%)',
        paddingLeft: 30,
    paddingRight: 30,
    
    
    

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
      color:'white',
      display: 'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      borderWidth:2,
      borderColor:'white',
      marginBottom:5,
      borderRadius:5,
      padding:10


  },
  personLocality:{
      color:'white',
      fontSize: 18,
      
  },
  personName:{
      color:'white',
      fontSize: 18,
  }

});