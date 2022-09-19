import { FlatList, Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React, { Component, useState } from 'react'

const HomeScreen = () => {
  const [res,resSet] = useState([{brand:'',image:''}])
  const fetchAPI = ()=>{
    fetch("http://10.0.2.2:3000/api/v1/products",
      {
        'method': 'GET'
      }
    )
    .then(Response=>Response.json())
    .then(Response =>{
        resSet(Response)
        console.log(res);
        console.log(res[0].image)
        
    })
    .catch(err=>{
        console.log('errreeo');
        console.log(err);
    });
    };
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
        <Text>{res[0].brand}</Text>
        <Image 
          source={{uri: res[0].image.replace('localhost','10.0.2.2')}}
          style={{width: 400, height: 400}} />
        <Text>something</Text>
        {/* <FlatList
          data={res}
          renderItem={({ res }) => <Text >{res}</Text>}
          keyExtractor={(res) => res.id}/> */}
    </View>
    
  )
}
const style = StyleSheet.create({
  touchable: {
    backgroundColor: '#F7F06D',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
export default HomeScreen