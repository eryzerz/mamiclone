import React, { Component } from 'react';
import { Image, View, ScrollView, TouchableHighlight, TouchableOpacity,StyleSheet,FlatList,Text
} from 'react-native';
import DatePicker from 'react-native-datepicker'

import Booklist from './booklist'

class Booking extends Component {

    static navigationOptions = ({ navigation }) => (
        {
            headerStyle: {
                elevation: 0
            }
        }
    )

    constructor(){
        super()
        this.state = {
        is_done : false,
        date: '2019-08-19'
        }
    }
    
    render() { 
        return ( <View>
                    <ScrollView>
                    
                        <View style={{justifyContent:'center'}}>
                        <View style={{flexDirection:'row', justifyContent:'center',alignContent:'center',height:50, marginBottom: 20}}>
                            <View style={styles.navbar}>
                                <Text style={{paddingLeft: 14, fontWeight: 'bold' }}>Tanggal Masuk</Text>
                                <DatePicker
                                    style={{width: 97}}
                                    date={this.state.date}
                                    mode="date"
                                    placeholder="select date"
                                    format="YYYY-MM-DD"
                                    confirmBtnText="Confirm"
                                    cancelBtnText="Cancel"
                                    customStyles={{
                                        dateIcon: {
                                            position: 'absolute',
                                            left: 0,
                                            top: 4,
                                            opacity: 0
                                        },
                                        dateInput: {
                                            marginLeft: 6,
                                            borderRadius: 10
                                        }
                                    }}
                                    onDateChange={(date) => {this.setState({date: date})}}
                                />
                            </View>
                            <View  style={styles.navbar}><Text></Text></View>
                            <View  style={styles.navbar}>
                                <Text style={{paddingLeft: 14, fontWeight: 'bold' }}>Tanggal Keluar</Text>
                                <DatePicker
                                    style={{width: 120}}
                                    date={this.state.date}
                                    mode="date"
                                    placeholder="select date"
                                    format="YYYY-MM-DD"
                                    confirmBtnText="Confirm"
                                    cancelBtnText="Cancel"
                                    customStyles={{
                                        dateIcon: {
                                            position: 'absolute',
                                            left: 0,
                                            top: 4,
                                            opacity: 0,
                                        },
                                        dateInput: {
                                            marginRight: 30,
                                            borderRadius: 10
                                        }
                                    }}
                                    onDateChange={(date) => {this.setState({date: date})}}
                                />
                            </View>
                        </View>
            
                        </View>

                        <View style={{backgroundColor:'white',borderBottomColor:'gray',borderWidth:0.4,marginHorizontal:20, marginVertical: 20}}>

                        </View>

                    <View style={{flexDirection:'row',padding:15}}>
                        <View style={{flex:1,padding:10}}>
                        <Image source={{uri: 'https://www.sewakost.com/files/10-2016/ad12720/14764522301017899518_large.JPG'}} style={{width: 100, height: 110}}/>
                        </View>
                        <View style={{flex:2,backgroundColor:'white',paddingTop:10}}>
                            <Text>Kost mamiroms malira tipe A</Text>
                            <View style={{paddingTop:40}}><Text style={{fontWeight:'bold'}}>Rp.100.101/bulan</Text></View>
                            
                        </View>
                    </View>

                    <View style={{backgroundColor:'white',borderBottomColor:'gray',borderWidth:0.4,marginHorizontal:20}}>

                    </View>

                    <View style={{padding:20}}>
                            <View style={{justifyContent:'space-between',flexDirection:'row',padding:10}}>
                            <View style={{flex:1}}><Text style={{fontSize:15}}>Data Penghuni</Text></View>
                            <View style={{flex:1}}><Text style={{color:'red'}}>Ubah</Text></View>
                            </View>
                            <View style={{justifyContent:'space-between',flexDirection:'row',padding:10}}>
                            <View style={{flex:1}}><Text style={{color:'gray'}}>Nama Lengkap</Text></View>
                            <View style={{flex:1}}><Text>Username</Text></View>
                            </View>

                            <View style={{justifyContent:'space-between',flexDirection:'row',padding:10}}>
                            <View style={{flex:1}}><Text style={{color:'gray'}}>Jenis Kelamin</Text></View>
                            <View style={{flex:1}}><Text style={{}}>Laki-Laki</Text></View>
                            </View>
                            <View style={{justifyContent:'space-between',flexDirection:'row',padding:10}}>
                            <View style={{flex:1}}><Text style={{color:'gray'}}>No Hp</Text></View>
                            <View style={{flex:1}}><Text>0822313235</Text></View>
                            </View>
                            <View style={{justifyContent:'space-between',flexDirection:'row',padding:10}}>
                            <View style={{flex:1}}><Text style={{color:'gray'}}>Pekerjaan</Text></View>
                            <View style={{flex:1}}><Text>Lainya</Text></View>
                            </View>

                    </View>

                    <View style={{backgroundColor:'white',borderBottomColor:'gray',borderWidth:0.4,marginHorizontal:20, marginRi: 20}}>

                    </View>

                    <View style={{height:60,padding:20}}>
                        <Text tyle={{fontSize:20}}>Keterangan Biaya lain</Text>
                    </View>
                    <View style={{flexDirection:'row',padding:20}}>
                            <TouchableOpacity onPress={()=> this.setState({
                                is_done: !this.state.is_done
                            })}>
                                <View 
                                style={{width:30,height:30,borderWidth:3,borderColor:'gray',borderRadius:45,paddingLeft:20,marginRight:20}}></View></TouchableOpacity>
                            <Text>Saya Menyetujui syarat dan ketentuan yang berlaku</Text>
                    </View>

                    <View style={{padding:20,backgroundColor:'white',justifyContent:'center'}}>
                        <TouchableOpacity onPress={()  => this.props.navigation.navigate('Booklist')}>
                            <View  style={{backgroundColor:'green',justifyContent:'center',height:40,alignItems:'center',borderRadius:8}}>
                            <Text style={{color:'white'}} >Book</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                        
                    </ScrollView>
                    </View> );
        }
    }
    
export default Booking;
const styles = StyleSheet.create({
    navbar : {
        justifyContent:'center',
        flex:1,
        marginTop: 20,
        paddingLeft:20,
        marginRight: 50
    }
})