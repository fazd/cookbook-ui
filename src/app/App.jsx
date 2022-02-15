import React from 'react'
import { ReactQueryDevtools } from 'react-query/devtools';
import Routing from '../router';
import './App.css'
import QueryProvider from '../context/query-client';
import store from './store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';


let persistor = persistStore(store);

function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate persistor={persistor} >
          <QueryProvider>
            <Routing />
            <ReactQueryDevtools />
          </QueryProvider>

        </PersistGate>
      </Provider>
    </React.StrictMode>
  );
}

export default App
