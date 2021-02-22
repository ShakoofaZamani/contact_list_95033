import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet

} from 'react-native'
import { color } from 'react-native-reanimated';
import colors from '../utils/colors'
import ContactThumnail from '../componenets/contactThumnail';
import DetailListItem from '../componenets/DetailsListItem'
export default function Profile(props){
    const {route} = props;
    const {item} = route.params
    const {name,phone,email} = item
     return(
        <View style={styles.container}> 
            <View style={styles.thumbnailSection}>
                <ContactThumnail name={name} phone={phone}/>
           </View>
           <View style={styles.detailSection}>
               <DetailListItem icon="email" title="Email" subTitle={email}/>
               <DetailListItem icon="phone" title="work" subTitle={phone}/>
           </View>
        </View>
     )


}
const styles  = StyleSheet.create({
 container:{
     flex:1,

 },
 thumbnailSection:{
     flex:1,
     alignItems:'center',
     justifyContent:'center',
     backgroundColor:colors.primary,
     borderBottomWidth:1,
     borderBottomColor:colors.secondary,
 },
  detailSection:{
      paddingTop:10,
      flex:1,
  }



})