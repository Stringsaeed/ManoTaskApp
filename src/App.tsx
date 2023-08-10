// this is the entry point of the app
// here we add all providers required for the application
// either ThemeProvider or StoreProvider or any other provider
// the containers or the wrappers should not be added here
import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import Navigation from './navigation';

export default function App() {
  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  );
}
