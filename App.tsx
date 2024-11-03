/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import AllRouter from './components/AllRouter/AllRouter';
import { NavigationContainer } from '@react-navigation/native';

function App(): React.JSX.Element {

  return (
    <NavigationContainer>
      <AllRouter></AllRouter>
    </NavigationContainer>
  );
}

export default App;
