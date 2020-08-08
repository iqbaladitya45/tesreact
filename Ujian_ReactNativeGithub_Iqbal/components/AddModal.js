import React, {Component} from 'react' ;
import{AppRegistry,FlatList,StyleSheet,Text,TextInput,View,Image,Alert,Platform,TouchableHighlight, Dimensions} from 'react-native';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import flatListData, { keys } from '../data/flatlistData';

var screen = Dimensions.get('window');
export default class AddModal extends Component{
    constructor(props) {
        super(props);
        this.state={
            newFoodName:'',
            newFoodDescription:'',
            newFoodImage:'',
        };
    }
    showAddModal = () => {
        this.refs.myModal.open();
    }
    generatekey = (numberOfCharacters) => {
        return require('random-string') ({length: numberOfCharacters}); 
    }
    render(){
        return (
            <Modal
            ref={"myModal"} 
            style={{
                justifyContent: 'center',
                borderRadius: Platform.OS === 'android' ? 30: 0,
                shadowRadius:10,
                width: screen.width - 80,
                height:280
            }}
            position='center'
            backdrop={true}
            onClosed={() => {
                //alert("Modal ditutup");
            }}
            >
            <Text
            style={{
                fontSize:16,
                fontWeight:'bold',
                textAlign:'center',
                marginTop:40,
            }}
            >Tambahkan Makanan</Text>
            <TextInput 
            style={{
                height:40,
                borderBottomColor:'red',
                marginBottom:10,
                marginRight:20,
                marginLeft:20,
                marginTop:20,
                borderBottomWidth:1
            }}
            onChangeText={(text) => this.setState({newFoodName: text})}
            placeholder="Tambahkan Menu Baru"
            value={this.state.newFoodName}
            />
            <TextInput 
            style={{
                height:40,
                borderBottomColor:'red',
                marginBottom:10,
                marginRight:20,
                marginLeft:20,
                marginTop:20,
                borderBottomWidth:1
            }}
            onChangeText={(text) => this.setState({newFoodDescription: text})}
            placeholder="Deskripsi"
            value={this.state.newFoodDescription}
            />
            <TextInput 
            style={{
                height:40,
                borderBottomColor:'red',
                marginBottom:10,
                marginRight:20,
                marginLeft:20,
                marginTop:20,
                borderBottomWidth:1
            }}
            onChangeText={(text) => this.setState({newFoodImage: text})}
            placeholder="Masukan Gambar"
            value={this.state.newFoodImage}
            />
            <Button
            style={{
                fontSize:18,
                color:'green',
            }}
            containerstyle={{
                padding: 8,
                marginLeft:70,
                marginRight:70,
                height:40,
                borderRadius:8,
                backgroundColor:'silver',
            }}
            onPress={() => {
                if(this.state.newFoodName.length == 0 || this.state.newFoodDescription.length == 0){
                alert("Form belum diInput ");
                return;
            }
            const newKey =this.generatekey(24);
            const newFood = {
                key:this.generatekey(24),
                name: this.state.newFoodName,
                imageUrl:this.state.newFoodImage,
                description: this.state.newFoodDescription,
            };
            flatListData.push(newFood);
            this.props.parentFlatList.refreshFlatList(newKey);
            this.refs.myModal.close();
            }}
            >
                Simpan
            </Button>
            </Modal>
        )
    }
}