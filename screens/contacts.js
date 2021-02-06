import React from 'react'
import {
    View,
    Text,
    FlatList,
    StyleSheet

} from 'react-native'
import {Feather} from '@expo/vector-icons'
import { color } from 'react-native-reanimated';
import colors from '../utils/colors'
import ContactListItem from '../componenets/ContactListItem'

const contacts = [
    { id: '1', name: 'Shakoofa', phone: '0730334455', email: 'shakoofazamani786@gmail.com '},
    { id: '2', name: 'Aqideh', phone: '0730334455', email: 'shakoofazamani786@gmail.com '},
    { id: '3', name: 'Wajiha', phone: '0730334455', email: 'shakoofazamani786@gmail.com '},
    { id: '4', name: 'Sodabeh', phone: '0730334455', email: 'shakoofazamani786@gmail.com '},
    { id: '5', name: 'Fatemah', phone: '0730334455', email: 'shakoofazamani786@gmail.com '},
    { id: '6', name: 'Sayea', phone: '0730334455', email: 'shakoofazamani786@gmail.com '},
    { id: '7', name: 'Nasrin', phone: '0730334455', email: 'shakoofazamani786@gmail.com '},
    { id: '8', name: 'Sima', phone: '0730334455', email: 'shakoofazamani786@gmail.com '},
    { id: '10', name: 'Shakoofa', phone: '0730334455', email: 'shakoofazamani786@gmail.com '},
    { id: '11', name: 'Sima', phone: '0730334455', email: 'shakoofazamani786@gmail.com '},
    { id: '12', name: 'Shakoofa', phone: '0730334455', email: 'shakoofazamani786@gmail.com '}
]

export default function Contacts(){
   return(
       <View>
    <FlatList
    data={contacts}
    keyExtractor={(item)=>item.id}
    renderItem={({item}) => {
    
     return <ContactListItem name={item.name} phone={item.phone } />
}}
/>
 <View>
    <Text style={styles.floatButton}>
        <Feather name="Plus" size={28} color="white" />
    </Text>
 </View>
</View>
   )
}
const styles  = StyleSheet.create({
    floatButton:{
        backgroundColor:'orange',
        padding: 20,
        borderRadius: '50%',
        position:'absolute',
        bottom: 40,
        right: 40,
        
    }

}
)