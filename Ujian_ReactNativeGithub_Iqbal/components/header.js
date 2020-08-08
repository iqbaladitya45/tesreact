import React from 'react';
import {StyleSheet,Text,View} from 'react-native';
export default function Header(){
    return (
        
<View style={styles.header}>
<Text style={styles.tittle}>Menu</Text>
</View>
)

}
const styles = StyleSheet.create({
header:{
    height:100,
    paddingTop:60,
    backgroundColor: 'white',
    

},
tittle: {
    textAlign:'center',
    color: 'green',
    fontSize:40,
    fontWeight:'bold'
    
},
});