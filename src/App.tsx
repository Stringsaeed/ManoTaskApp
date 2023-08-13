// this is the entry point of the app
// here we add all providers required for the application
// either ThemeProvider or StoreProvider or any other provider
// the containers or the wrappers should not be added here
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import Navigation from './navigation';
import {ManoQueryProvider} from './services';

export default function ManoApp() {
  return (
    <SafeAreaProvider>
      <ManoQueryProvider>
        <Navigation />
      </ManoQueryProvider>
    </SafeAreaProvider>
  );
}
