import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet

} from 'react-native'
import { color } from 'react-native-reanimated';
import colors from '../utils/colors'
import Avatar from './Avatar'
export default function ContactListItem({name, phone, onPress}){
     return(
         <TouchableOpacity onPress={onPress} style={styles.container}>
             <View style={styles.contactInfo}>
            <Avatar name={name} size={40} />
            <View style={styles.details}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subtitle}>{phone}</Text>
            </View>
            </View>
             </TouchableOpacity>
     )


}
const styles  = StyleSheet.create({
 container:{
     flex:1
 },
 contactInfo:{
     flexDirection:'row',
     paddingVertical:16,
     paddingHorizontal:24,
     backgroundColor:colors.secondary,
     borderBottomWidth:0.5,
     borderBottomColor:'gray'


 },
 details:{
     marginLeft:20
 },
 title:{
     color:colors.black,
     fontSize:16,
     fontWeight:'bold'
 },
 subtitle:{
     color:colors.primary,
 }


})