import React, {Component} from 'react' ;
import{AppRegistry,FlatList,StyleSheet,Text,TextInput,View,Image,Alert,Platform,TouchableHighlight, Dimensions} from 'react-native';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import flatListData, { keys } from '../data/flatlistData';

var screen = Dimensions.get('window');
export default class EditModal extends Component{
    constructor(props) {
        super(props);
        this.state={
            foodName:'',
            foodDescription:'',
            foodImage:"",
        };
    }
    showEditModal=(editingFood,flatListItem) => {
        console.log('editingFood = ${JSON.stringify(editingFood)}');
        this.setState({
            key: editingFood.key,
            foodName: editingFood.name,
            foodDescription: editingFood.description,
            foodImage: editingFood.image,
            flatListItem: flatListItem
        });
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
            onChangeText={(text) => this.setState({foodName: text})}
            placeholder="Tambahkan Menu Baru"
            value={this.state.foodName}
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
            onChangeText={(text) => this.setState({foodDescription: text})}
            placeholder="Deskripsi"
            value={this.state.foodDescription}
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
            onChangeText={(text) => this.setState({foodImage: text})}
            placeholder="Masukan Gambar"
            value={this.state.foodImage}
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
                if(this.state.foodName.length == 0 || this.state.foodDescription.length == 0){
                alert("Form belum diInput ");
                return;
            }
            // const newKey =this.generatekey(24);
            // const newFood = {
            //     key:this.generatekey(24),
            //     name: this.state.foodName,
            //     imageUrl:"https://www.inibaru.id/nuploads/1/umum/resep-soto-kerbau-khas-kudus-asli-2.jpg",
            //     description: this.state.foodDescription,
            // };
            // flatListData.push(newFood);
            // this.props.parentFlatList.refreshFlatList(newKey);
            var foundIndex = flatListData.findIndex(item => this.state.key == item.key );
            if (foundIndex < 0) {
                return;
            }
            flatListData[foundIndex].name = this.state.foodName;
            flatListData[foundIndex].description = this.state.foodDescription;
            flatListData[foundIndex].image = this.state.foodImage;
            this.refs.myModal.close();
            }}
            >
                Simpan
            </Button>
            </Modal>
        )
    }
}