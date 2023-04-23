import { StatusBar } from 'expo-status-bar';
import FlashMessage from 'react-native-flash-message';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Addcars from './app/screens/Addcars';
import CarsList from './app/screens/CarsList';
import Home from './app/screens/Home';
import CarInfo from './app/screens/CarInfo';



export default function App() {

const {Navigator,Screen}=createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Navigator initialRouteName='Home'>
      <Screen name='Home'  component={Home}/>
      <Screen name='Addcars'  component={Addcars}/>
      <Screen name='Allcars'  component={CarsList}/>
      <Screen name='carInfo'  component={CarInfo}/>
      </Navigator>
    <FlashMessage position='top'/>
    </NavigationContainer>
  );
}

  