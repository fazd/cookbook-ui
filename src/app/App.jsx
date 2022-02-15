import React from 'react'
import { ReactQueryDevtools } from 'react-query/devtools';
import Routing from '../router';
import './App.css'
import QueryProvider from '../context/query-client';
import store from './store';
import { Provider } from 'react-redux';


function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <QueryProvider>
          <Routing />
          <ReactQueryDevtools />
        </QueryProvider>
      </Provider>
    </React.StrictMode>
  );
}

export default App
