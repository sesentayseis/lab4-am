import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { DrawerNavegation } from './src/navigation/DrawerNavigation';

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavegation/>
    </NavigationContainer>
  );
}

