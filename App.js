import 'react-native-gesture-handler'
import React from 'react';
import DrawerNavigation from './src/Navigation/Navigation'
import {Provider} from 'react-redux'
import Store from './src/Redux/configureStore'

const App: () => React$Node = () => {
  return (
    <Provider store={Store}>
      <DrawerNavigation/>
    </Provider>
  );
};

export default App;
