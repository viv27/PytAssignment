import { StatusBar } from 'expo-status-bar';
import React, { useState,useEffect } from 'react';
import DateTimePickerModal from "react-native-modal-datetime-picker";




import { StyleSheet,BackHandler,Alert, Text, View, SafeAreaView, TextInput, TouchableOpacity, Button } from 'react-native';

export default function App({navigation}) {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [birthday, setBirthday] = useState("")
    const [birthdayTitle, setBirthdayTitle] = useState("Date of Birth")
    const [guests, setGuests] = useState(0)
    const showDatePicker = () => {
        setDatePickerVisibility(true);
        console.log("Hello")
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        
        hideDatePicker();
        setBirthday(date.toString().slice(3, 15));
        setBirthdayTitle(date.toString().slice(3, 15))
        console.log(date)
    };
    function increase() {
        if(guests < 2 && guests >=0){
        setGuests(guests + 1)
        }
    }
    function decrease() {
         if(guests <= 2 && guests >=1){
        setGuests(guests - 1)
         }
    }

    useEffect(() => {
    const backAction = () => {
      Alert.alert("Hold on!", "Are you sure you want to go back?", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel"
        },
        { text: "YES", onPress: () => BackHandler.exitApp() }
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);
   

    return (

        <View style={styles.registration}>
            <Text style={styles.header}>Registration</Text>
            <TextInput placeholderTextColor="black" placeholder="Your name" style={styles.textInput} />
            <TextInput placeholderTextColor="black" placeholder="Your Age" style={styles.textInput} />

            <Button  style={styles.birthdayButton} title={birthdayTitle} onPress={showDatePicker} />

            {/* <Text style={styles.text} placeholderTextColor="red" placeholder="Birthday" style={styles.textInput} >{birthday}</Text> */}

            <View style={styles.date}>
                <DateTimePickerModal style={styles.date}
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                />
            </View>



            <TextInput placeholderTextColor="black" placeholder="Your Profession" style={styles.textInput} />
            <View style={styles.guest}><Text style={styles.guestText}>Number of guests:  {guests}</Text><Text style={styles.guestButton} onPress={increase}>???</Text><Text onPress={decrease} style={styles.guestButton}>???</Text></View>


            <TextInput placeholderTextColor="black" placeholder="Locality" style={styles.textInput} />
            <TextInput   placeholderTextColor="black" placeholder="Your Address" style={styles.textInput} />
            <TouchableOpacity style={styles.submit}>
                <Text multiline={true} style={styles.btnText}>SUBMIT</Text>
            </TouchableOpacity>
        </View>

    );
}

const styles = StyleSheet.create({
    registration: {
        flex:1,
        alignSelf: 'stretch',
        backgroundColor: 'radial-gradient(circle, rgba(2,0,29,1) 0%, rgba(121,57,9,0.8804564061952906) 30%, rgba(0,212,255,1) 100%)',
        paddingLeft: 30,
    paddingRight: 30,

    },
    header: {
        fontSize: 30,
        color: 'white',
        paddingBottom: 10,
        marginBottom: 10,
        borderBottomColor: "white",
        borderBottomWidth: 1,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 40

    },
    textInput: {
        alignSelf: 'stretch',
        height: 40,
        marginBottom: 30,
        fontSize: 18,
        color: 'black',
        borderColor: 'white',
        borderWidth: 0,
        borderRadius: 5,
        padding: 10,
        marginTop: 5,
        backgroundColor: 'white',
        padding: 10,
        shadowColor: "#000",
        fontWeight:'bold',
shadowOffset: {
	width: 0,
	height: 12,
},
shadowOpacity: 0.58,
shadowRadius: 16.00,

elevation: 24,

    },
    submit: {
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'white',
        marginTop: 0,
        borderRadius: 15,
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 12,
},
shadowOpacity: 0.58,
shadowRadius: 16.00,

elevation: 24,

    },
    btnText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 18,
    },
    text: {
        padding: 0
    },
    birthday: {
        display: 'flex',
        flexDirection: 'row',


    },
    birthdayButton: {
        color: 'black'
    },
    guest: {
        display: 'flex',
        flexDirection: 'row',

        padding: 10,
        fontSize: 18,
        borderWidth:1,
        borderColor: 'white',
        borderRadius:5,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'black',
        marginBottom: 30,
        backgroundColor: 'white',
        

    },
    guestText: {
        color: 'black',
        fontSize: 18,
        fontWeight:'bold'
    },
    guestButton: {
        marginLeft: 10,
        backgroundColor: 'white',
        color: 'black',
        padding: 7,
        borderRadius: 50,
        borderColor: 'black',
        borderWidth: 1,
        
    },
    
    date: {
        marginBottom: 30
    }


});