import { ActivityIndicator, FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, ScrollView, Button} from 'react-native'
import React, { Component, useEffect, useState } from 'react'
import { Left, Right, Container, Heading, NativeBaseProvider, HStack } from 'native-base';
import Toast from 'react-native-toast-message';

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
          <NativeBaseProvider>
            {/* <Container style={styles.container}> */}
            <ScrollView style={{ marginBottom: 10, padding: 5 }}>
              <View>
                        <Image 
                            source={{
                                uri: item.image.replace('localhost','10.0.2.2')
                              }}
                            resizeMode="contain"
                            style={styles.image}
                        />
                    </View>
                    <View style={styles.contentContainer}>
                        <Heading style={styles.contentHeader}>{
                        item.name.length > 25 ? item.name.substring(0, 25 - 3)
                    + '...' : item.name}</Heading>
                        <Text style={styles.contentText}>{item.brand}</Text>
                    </View>
                    <View style={styles.availabilityContainer}>
                        <View style={styles.availability}>
                            <Text style={{ marginRight: 10 }}>
                                Available
                            </Text>
                            <View style={
                                {
                                  backgroundColor: '#afec1a',
                                  borderRadius: 50,
                                  width: 10,
                                  height: 10,
                                  padding: 10,
                                }
                              }></View>
                        </View>
                        <Text>{item.description}</Text>
                    </View>
            </ScrollView>
            <View style={styles.bottomContainer}>
                <HStack>
                  <Text style={styles.price}>$ {item.price}</Text>
                  <TouchableOpacity 
                    style={styles.touchable}
                    onPress={()=>{
                      Toast.show({
                        type: 'success',
                        text1: 'Hello',
                        text2: 'This is some something 👋'
                      });
                    }}
                    >
                    <Text style={{ color: 'white'}}>Add</Text>
                  </TouchableOpacity>
                </HStack>
            </View>  
            {/* </Container>       */}
          </NativeBaseProvider>
          }
        />
    )
  }
}
const styles = StyleSheet.create({
  touchable: {
    flexDirection: 'row',
    borderRadius: 3,
    padding: 10,
    margin: 5,
    justifyContent: 'center',
    backgroundColor: '#5cb85c',
    width: 100,
    alignItems: 'center'
  },
  container: {
    position: 'relative',
    height: '100%'
  },
  imageContainer: {
      backgroundColor: 'white',
      padding: 0,
      margin: 0
  },
  image: {
      width: '100%',
      height: 250
  },
  contentContainer: {
      marginTop: 20,
      justifyContent: 'center',
      alignItems: 'center'
  },
  contentHeader: {
      fontWeight: 'bold',
      marginBottom: 20
  },
  contentText: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 20
  },
  bottomContainer: {
    alignItems: 'center',
      // flexDirection: 'row',
      // position: 'absolute',
      // bottom: 0,
      // left: 0,
      // backgroundColor: 'white'
  },
  price: {
      fontSize: 24,
      margin: 20,
      color: 'red'
  },
  availabilityContainer: {
      marginBottom: 20,
      alignItems: "center"
  },
  availability: {
      flexDirection: 'row',
      marginBottom: 10,
  }
});
export default HomeScreen