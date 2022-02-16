import React from 'react'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import Routing from '../router';
import './App.css'
import store from './store';


const persistor = persistStore(store);

function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate persistor={persistor} >
          <Routing />
        </PersistGate>
      </Provider>
    </React.StrictMode>
  );
}

export default App
