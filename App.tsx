/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import AllRouter from './components/allRouter/AllRouter';
import { NavigationContainer } from '@react-navigation/native';

function App(): React.JSX.Element {

  return (
    <NavigationContainer>
      <AllRouter></AllRouter>
    </NavigationContainer>
  );
}

export default App;
