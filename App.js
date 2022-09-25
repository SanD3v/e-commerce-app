import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Ionicons from '@expo/vector-icons/Ionicons'
import HomeScreen from './src/screens/HomeScreen';
import Details from './src/screens/Details';
import Cart from './src/screens/Cart'
import Header from './src/screens/header'
import Toast from 'react-native-toast-message';

export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer styles={styles.container}>
      <Header/>
      <Tab.Navigator 
        initialRouteName='Home'
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'HomeScreen') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Cart') {
              iconName = focused ? 'cart' : 'cart-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
        >
        <Tab.Screen 
          name='HomeScreen' 
          component={HomeScreen} 
          />
        <Tab.Screen name='Cart' component={Cart}/>
      </Tab.Navigator>
    <Toast/>
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
