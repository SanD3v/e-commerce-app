import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from './src/screens/HomeScreen';
import Details from './src/screens/Details';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer styles={styles.container}>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen 
          name='HomeScreen' 
          component={HomeScreen} 
          options={
            {
              headerTitle: 'Home',
              headerTitleAlign: 'center',
              headerStyle: 
                {
                  backgroundColor: '#FFB140'
                }
            }
          }/>
        <Stack.Screen name='Details' component={Details}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
