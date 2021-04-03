import { StatusBar } from 'expo-status-bar';
import React,{useEffect} from 'react';

import {MaterialIcons} from '@expo/vector-icons';
import { StyleSheet, Text, Touchable,TouchableOpacity, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import { concat } from 'react-native-reanimated';
import * as SQLite from 'expo-sqlite';
const Stack = createStackNavigator();
const db = SQLite.openDatabase('contacts.db');


import Contacts from './screens/contacts'
import Profile from './screens/profile'
import CreateContact from './screens/CreateContact'
import SearchScreen from './screens/SearchScreen'




export default function App() {
  useEffect(()=>{
    db.transaction(tx =>{
       tx.executeSql('create table if not exists contact(id integer primary key autoincrement, name text, phone text, email text);', [],()=>console.log('table created successful'));
    })
  })
  return (
      <NavigationContainer>
         <Stack.Navigator> 
           <Stack.Screen name="Contacts" component={Contacts} options={({navigation})=>({
             headerRight:() => (
               <TouchableOpacity style={{paddingRight:20}}onPress={() => navigation.navigate('SearchScreen')}>
                 <Text>
                   <MaterialIcons name="search" size={24} color="black"/>
                 </Text>
               </TouchableOpacity>
             )
           })}/>
           <Stack.Screen name="Profile" component={Profile} />
           <Stack.Screen name="CreateContact" component={CreateContact} />
           <Stack.Screen name="SearchScreen" component={SearchScreen} />
         </Stack.Navigator>
      </NavigationContainer>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#f8f4f4'
    
  },
});
