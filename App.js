import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import DialogScreen from './src/01-DialogScreen';
import MultiDialogScreen from './src/02-MultiDialogScreen';
import HomePage from './HomePage';
import ReactVideoScreen from './src/04-react-video'
import AxiosRequestScreen from './src/03-axios-request';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="DialogScreen" component={DialogScreen} />
        <Stack.Screen name="MultiDialogScreen" component={MultiDialogScreen} />
        <Stack.Screen name="AxiosRequestScreen" component={AxiosRequestScreen}/>
        <Stack.Screen name="ReactVideoScreen" component={ReactVideoScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;