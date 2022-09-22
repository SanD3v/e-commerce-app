import { ActivityIndicator, FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React, { Component, useEffect, useState } from 'react'

const HomeScreen = () => {
  const [product,productSet] = useState('');
  const [isLoading, isLoadingSet] = useState(true);
  useEffect(()=>{
    async function fetchProduct(){
      fetch("http://10.0.2.2:3000/api/v1/products",
            {
              'method': 'GET'
            }
      )
      .then(Response=>Response.json())
      .then(Response =>{
          productSet(Response);
          isLoadingSet(false);
          
      })
      .catch(err=>{
          console.log(err);
        });
      }
      fetchProduct();
    },[]);
  if(isLoading){
    return (
      <ActivityIndicator
        size={'large'}
        animating={isLoading}
      />
    )
  }else{
    return(
      <FlatList
        data={product}
        renderItem={({ item})=>
          <View>
            <Text>{item.brand}</Text>
            <Image 
              source={{uri: item.image.replace('localhost','10.0.2.2')}}
              style={{width: 400, height: 600}} 
              resizeMode='cover'
              />
          </View>
          }
        />
      // <View>
      //   <Text>{product[0].brand}</Text>
      //   <Image source={{ uri: product[0].image.replace('localhost','10.0.2.2')}}/>
      //   <Text>{product[1].brand}</Text>
      //   <Image source={{ uri: product[1].image.replace('localhost','10.0.2.2')}}/>
      // </View>
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