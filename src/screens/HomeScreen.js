import { FlatList, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React, { Component, useState } from 'react'
const fetchAPI = ()=>{
    fetch("http://10.0.2.2:3000/api/v1/products",
      {
        'method': 'GET'
      }
    )
    .then(Response=>Response.json())
    .then(Response =>{
        console.log(Response);
    })
    .catch(err=>{
        console.log('errreeo');
        console.log(err);
    });
    };
export class HomeScreen extends Component {
  render() {
    return (
      <View style={{flex: 1,backgroundColor: '#FFB140'}}>
        <TouchableHighlight 
          onPress={fetchAPI} 
          underlayColor='#FFB140'
          style={style.touchable}
          >
        <View>
            <Text style={{fontSize:50}}>Call API</Text>
        </View>
        </TouchableHighlight>
      </View>
    )
  }
}
const style = StyleSheet.create({
  touchable: {
    backgroundColor: '#F7F06D',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
export default HomeScreen