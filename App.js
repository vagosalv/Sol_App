import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import NewsScreen from './screens/NewsScreen';
import LearnScreen from './screens/LearnScreen';
import InfoScreen from './screens/InfoScreen';
import QuizScreen from './screens/QuizScreen';

const Stack = createStackNavigator();

//to layout tis kathe selidas
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={'Home'} component={HomeScreen}></Stack.Screen>
        <Stack.Screen name={'News'} component={NewsScreen}></Stack.Screen>
        <Stack.Screen name={'Learn'} component={LearnScreen}></Stack.Screen>
        <Stack.Screen name={'Info'} component={InfoScreen}></Stack.Screen>
        <Stack.Screen name={'Quiz'} component={QuizScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}