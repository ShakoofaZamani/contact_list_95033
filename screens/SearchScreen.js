import React from 'react'
import {
    View,
    Text,
    TextInput,
    StyleSheet

} from 'react-native'

export default function SearchScreen(){
     return(
         <View style={styles.searchContainer}>
             <TextInput placeholder="Search..." style={styles.searchInput} />
         </View>
     )


}
const styles  = StyleSheet.create({

 searchContainer:{
     backgroundColor:colors.secondary,

 },
 searchInput:{
     borderRadius:10,
     paddingHorizontal:20,
     paddingVertical:10,
     margin:20,
     backgroundColor:colors.white,
 }

})