import React from 'react';
import {ImageBackground,StyleSheet, Text, View,TouchableOpacity,Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const image = { uri: "https://lh3.googleusercontent.com/LzQKRZ5nMkSI8allmMwpyLFZjhKfeIcrhWJQeuQCYMnOksFLLW5YhWg-pN1pT_A3bWdUHLH4=w1080-h608-p-no-v0" };
import Aplikasi from './BasicFlatListData';
import header from './header';
import 'react-native-gesture-handler';


const HomeScreen  =({navigation}) =>{
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'yellow'}}>
    <ImageBackground source={image} style={styles.image}>
    <TouchableOpacity style={styles.Menu}
    title="Aplikasi Menu"
    onPress={() => navigation.navigate(' Menu Makanan Koeno Koeni')}>
    <Text style={styles.text}>Menu Makanan Koeno Koeni</Text>
    </TouchableOpacity>
      </ImageBackground></View>
      
  );
}

const Stack = createStackNavigator();

const Home =()=>{
  return (
    <NavigationContainer >
      <Stack.Navigator style={{backgroundColor:'yellow'}}>
        <Stack.Screen name="Home" component={HomeScreen}options={{headerShow:false}} />
        <Stack.Screen name=" Menu Makanan Koeno Koeni" component={Aplikasi}options={{headerShow:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
image: {
  flex: 1,
  resizeMode: "cover",
  justifyContent: "center",
  padding:150
},
Menu :{
  padding :12,
  marginTop:500,
  backgroundColor :'brown',
  color :'black',
  width :280,
  borderRadius :20,
  textAlign :'center',
  fontWeight: 'bold',
},
text :{
  color :'white',
  textAlign :'center',
  fontWeight: 'bold',
}
});
export default Home;