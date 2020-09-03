import 'react-native-gesture-handler'
import React from 'react';
import DrawerNavigation from './src/Navigation/Navigation'
import {Provider} from 'react-redux'
import { store } from './src/Redux/configureStore'

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <DrawerNavigation/>
    </Provider>
  );
};

export default App;
