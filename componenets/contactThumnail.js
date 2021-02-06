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
export default function ContactListItem({name, phone}){
    return(
        <View style={styles.thumnailContainer}>
            <Avatar name={name} size={90}/>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.phone}>{phone}</Text>
        </View>
    )


}
const styles  = StyleSheet.create({
    thumnailContainer:{
        justifyContent:'center',
        alignItems:'center',
    name:{
        color:colors.white,
        fontSize:16,
        fontWeight:'blod',
    },
     phone:{
        color:colors.white,
        fontSize:16,
     }
    }


})