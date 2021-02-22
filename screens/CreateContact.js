import React,{useState} from 'react'
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet

} from 'react-native'

import colors from '../utils/colors'
import * as SQLite from 'expo-sqlite';
const db = SQLite.openDatabase('contacts.db');

export default function CreateContact({navigation}){
    const [name , setName] = useState(null);
    const [phone , setPhone] = useState(null);
    const [email , setEmail] = useState(null);
    const addContact = (name, phone,email) =>{
        db.transaction(tx=>{
            tx.executeSql('insert into contact(name, phone,email) values(?, ?, ?);',[name, phone, email], ()=>navigation.navigate('Contacts'));
        })
    }
     return(
        <View style={styles.formContainer}>
            <TextInput placeholder="Name" style={styles.input} value={name} onChangeText={(name)=> setName(name)}/>
            <TextInput placeholder="Email" keyboardType="email-address" style={styles.input} value={email} onChangeText={(email)=> setEmail(email)}/>
            <TextInput placeholder="phone" keyboardType="numeric" style={styles.input} value={phone} onChangeText={(phone)=> setPhone(phone)}/>
            <TouchableOpacity style={[styles.button, {backgroundColor:colors.primary}]}>
                <Text style={styles.buttonText} onPress={()=>addContact(name,phone,email)}>Save</Text>

            </TouchableOpacity>

            <TouchableOpacity style={[styles.button,{backgroundColor:'red'}]}>
                <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
         </View>
     )


}
const styles  = StyleSheet.create({
formContainer:{
    borderRadius:30,
    marginTop:60,
    paddingVertical:20,
    paddingHorizontal:40,
    backgroundColor:colors.white,
},
input:{
    paddingBottom:10,
    marginBottom:10,
    borderBottomColor:colors.secondary,
    borderBottomWidth:1
},

button:{
    padding:20,
    marginTop:20,
    borderRadius:5,
    justifyContent:'center',
    alignItems:'center',


},
buttonText:{
    color:colors.white
}


})