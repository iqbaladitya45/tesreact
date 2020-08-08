import React, {Component} from 'react' ;
import{AppRegistry,FlatList,StyleSheet,Text,View,Image,Alert,Platform,TouchableHighlight,TouchableOpacity,Modal,flatList} from 'react-native';
import flatlistData from '../data/flatlistData';
import Header from '../components/header';
import Swipeout from 'react-native-swipeout';
import AddModal from '../components/AddModal';
import EditModal from '../components/EditModal';


class FlatListItem extends Component{
    constructor(props) {
        super(props);
        this.state = {
            activeRowkey: null
        };
    }
    render(){
        const swipeSettings = {
            autoClose: true,
            onClose: (secId, rowId , direction) =>{
                if (this.state.activeRowkey != null) {
                this.setState({activeRowkey:null});
                }
            },
            onOpen: (secId, rowId , direction) => {
                this.setState({activeRowkey: this.props.item.key});
            },
            right: [
                {
                    onPress: () => {
                        alert('update');
                        this.props.parentFlatList.refs.editModal.showEditModal(flatlistData[this.props.index],this);
                    },
                    text: 'Edit', type: 'primary'
                },
                {
                    onPress: () => {
                        const deletingRow = this.state.activeRowkey;
                        Alert.alert(
                            'Hayoo',
                            'Yakin dihapus Bos ?',
                            [
                                {text:'No', onPress: () => console.log('Cancel Procesd'), style: 'cancel'},
                                {text:'Yes', onPress:() =>{
                                    flatlistData.splice(this.props.index, 1);
                                    this.props.parentFlatList.refreshFlatList(deletingRow);
                                }},
                            ],
                            {cancelable:true}
                        )
                    },
                    text: 'Delete', type:'delete'
                }
            ],
            rowId: this.props.index,
            sectionId: 1
        };
        return (
            
            <Swipeout {...swipeSettings}>
 <View style={{
                flex:1,
                flexDirection:'column',
            }}>

            <View style={{
                flex:1,
                backgroundColor:'blue',
                flexDirection:'row',
            }}>
                
<Image
source={{uri:this.props.item.imageUrl}}
style={{width:100,height:100,margin:5}}
></Image>
<View style={{
flex:1,
flexDirection: 'column',
height:100

}}>
               
                <Text style={styles.FlatListItem}>{this.props.item.name}</Text>
                <Text style={styles.FlatListItem}>{this.props.item.description}</Text>
                
            </View>
            </View>
            <View
            style={{
                height:2,
                backgroundColor: 'white'

            }}
            >     
            </View>
            </View>
            </Swipeout>

           
        )
    }
}
const styles = StyleSheet.create({
    FlatListItem:{
        color:'white',
        padding:10,
        fontSize:20,
    },

})


export default class BasicFlatListData extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            deletedRowKey:null,
        });
        this._onPressAdd = this._onPressAdd.bind(this);
    }
    refreshFlatList = (activeKey) => {
        this.setState((prevState) => {
            return {
                deletedRowKey: activeKey
            };
        });
        this.refs.flatList.scrollToEnd();
    }
    _onPressAdd () {
        //alert("Berhasil Ditambah");
        
        this.refs.addModal.showAddModal();
    }
    render() {
        return (
            <View style={{flex:1, marginBottom: Platform.OS === 'android' ? 34 : 0}}>
                <Header/>
                <View
                style={{
                    backgroundColor:'yellow',
                    height: 50,
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    alignItems: 'center',

                }}>
                    <TouchableHighlight
                    style={{marginRight: 10}}
                    underLayColor='brown'
                    onPress={this._onPressAdd}
                    >
                        <Image
                        style={{width: 35, height: 35}}
                        source={require('../icons/addcart.png')}
                        />
                    </TouchableHighlight>

                </View>
                
                <FlatList
                ref={"flatList"} 
                data={flatlistData}
                renderItem={({item ,index}) => {
                    return(
                        <FlatListItem item={item} index={index} parentFlatList={this}>
                        
                        </FlatListItem>
                 );
                }}
                >

                </FlatList>
                <AddModal ref={'addModal'} parentFlatList={this}>

                </AddModal>
                <EditModal ref={'editModal'} parentFlatList={this}>
                    
                </EditModal>
                </View>
        );
    }
}
        