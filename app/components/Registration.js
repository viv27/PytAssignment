import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import DateTimePickerModal from "react-native-modal-datetime-picker";




import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, Button } from 'react-native';

export default function App() {
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
        console.warn("A date has been picked: ", date);
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
            <View style={styles.guest}><Text style={styles.guestText}>Number of guests:  {guests}</Text><Text style={styles.guestButton} onPress={increase}>➕</Text><Text onPress={decrease} style={styles.guestButton}>➖</Text></View>


            <TextInput placeholderTextColor="black" placeholder="id" style={styles.textInput} />
            <TextInput placeholderTextColor="black" placeholder="Your Address" style={styles.textInput} />
            <TouchableOpacity style={styles.submit}>
                <Text style={styles.btnText}>SUBMIT</Text>
            </TouchableOpacity>
        </View>

    );
}

const styles = StyleSheet.create({
    registration: {
        alignSelf: 'stretch',
        


    },
    header: {
        fontSize: 30,
        color: 'black',
        paddingBottom: 10,
        marginBottom: 10,
        borderBottomColor: "black",
        borderBottomWidth: 1,
        textAlign: 'center',
        fontWeight: 'bold'


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