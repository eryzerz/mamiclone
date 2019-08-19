import React, { Component } from 'react'
import Icon from 'native-base'
import { TouchableWithoutFeedback, Button, Image, TextInput, FlatList, StyleSheet, ScrollView, View, Text, TouchableHighlight, TouchableOpacity } from 'react-native'
import { SearchBar } from 'react-native-elements'
import { withNavigation, createMaterialTopTabNavigator } from 'react-navigation'

import FilterPage from './filterPage'
import DetailView from './detailView'


const dorms = [
    {
        id: '0',
        type: 'Campur',
        city: 'Medan',
        room: 3,
        cost: 1600000,
        name: "Kost D'eiffel Medan Petisah",
        latestUpdate: '12 juni 2019',
        image: 'https://static.mamikos.com/uploads/cache/data/style/2019-07-03/ZIihOxY2-540x720.jpg'
    },
    {
        id: '1',
        type: 'Putri',
        city: 'Medan',
        room: 5,
        cost: 1000000,
        latestUpdate: '1 Juli 2019',
        name: "Kost Seikera Gg Rezeki Medan Perjuangan",
        image: 'https://static.mamikos.com/uploads/cache/data/style/2018-12-14/YzhzNQsY-540x720.jpg'
    },
    {
        id: '2',   
        type: 'Putra',
        city: 'Jakarta Selatan',
        room: 2,
        cost: 2500000,
        latestUpdate: '4 Agustus 2019',
        name: "Kost Mampang Ceria",
        image: 'https://static.mamikos.com/uploads/cache/data/style/2019-08-09/HpPoK7Yf-540x720.jpg'
    },
    {
        id: '3',
        type: 'Campur',
        city: 'Bogor',
        room: 2,
        cost: 1000000,
        latestUpdate: '19 Agustus 2019',
        name: "Kost IPB",
        image: 'https://static.mamikos.com/uploads/cache/data/style/2019-07-03/ZIihOxY2-540x720.jpg'
    }
]


export default class ListDorm extends Component {

    _keyExtrractor = ( item, index ) => item.id

    render() {
        return (
            <View>
                <FlatList 
                    data={dorms}
                    keyExtractor={this._keyExtrractor}
                    renderItem={({ item }) => (
                        <TouchableOpacity key={item.id} style={styles.card} onPress={() => this.props.navigation.navigate('DetailView', { item:item})} dataItem={item}>
                            <Image source={{uri: item.image}} style={styles.image} />
                            <View style={styles.text}>
                                <Text sytle={{ flexDirection: 'row', alignContent: 'space-between'}}>
                                    <Text style={{color: 'red'}}>{item.type}  </Text> 
                                    <Text style={{color: 'green'}}> Tersisa {item.room} kamar  </Text>
                                    <Text> {item.city}</Text>
                                </Text>
                                <Text style={{ fontWeight: 'bold'}}>
                                    Rp {item.cost}/bln
                                </Text>
                                <Text>
                                    {item.name}
                                </Text>
                                <View style={styles.button}>
                                    <Text style={{ color: 'white', alignSelf: 'center'}}>Bisa Pesan</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                />
                <View style={{ flex:1, flexDirection: 'row'}}>
                        <TouchableOpacity 
                            style={styles.buttonFilter}
                            onPress={() => this.props.navigation.navigate('FilterPage')}
                        >
                            <Text style={{alignSelf: 'center', color: 'green', fontSize: 20}} >Filter</Text>
                        </TouchableOpacity>
                    
                
                        <TouchableOpacity 
                            style={styles.buttonSort}
                        >
                            <Text style={{alignSelf: 'center', color: 'green', fontSize: 20}}>Sort</Text>
                        </TouchableOpacity>
                    
                    
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    searchBar: {
        backgroundColor:'white',
        width: 380,
        height: 50,
        borderRadius: 20,
        borderWidth: 0,
        marginVertical: 15,
        marginHorizontal: 15,
        elevation: 7,
    },
    input: {
        backgroundColor: 'white',
        borderWidth: 0,
        borderRadius: 20
    },
    card: { 
        width: 390, 
        padding: 0, 
        paddingBottom: 15,
        margin: 8, 
        borderRadius: 30, 
        backgroundColor: 'white', 
        elevation: 6,
        alignContent: 'center'
    },
    button: {
        backgroundColor:'green',
        width: 100,
        height: 20,
        borderRadius: 20,
        borderWidth: 0,
        alignItems: 'center',
    },
    buttonFilter: {
        paddingTop: 8,
        position: 'absolute',
        bottom: 6,
        borderColor: 'white',
        backgroundColor:'#ebf0ec',
        borderWidth: 1,
        width: 100,
        height: 50,
        borderRadius: 10,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        borderRightColor: 'silver',
        elevation: 9,
        marginLeft:111,
        marginTop: 80
    },
    buttonSort: {
        paddingTop: 8,
        bottom: 56,
        backgroundColor:'#ebf0ec',
        borderWidth: 1,
        borderColor: 'white',
        width: 100,
        height: 50,
        borderRadius: 10,
        borderRightWidth: 1,
        elevation: 9,
        marginLeft: 210,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
    },
    image: { 
        borderTopRightRadius: 20, 
        borderTopLeftRadius: 20,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
        width: 390, 
        height: 200, 
        alignSelf: 'center', 
        flex:1
    },
    text: {
        paddingTop: 15,
        flexDirection: 'column', 
        flex: 1.5, 
        paddingLeft: 2, 
        marginLeft: 20
    }
})