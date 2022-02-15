import React from 'react'
import { ReactQueryDevtools } from 'react-query/devtools';
import Routing from '../router';
import './App.css'
import QueryProvider from '../context/query-client';


function App() {
  return (
    <React.StrictMode>
      <QueryProvider>
        <Routing />
        <ReactQueryDevtools />
      </QueryProvider>
    </React.StrictMode>
  );
}

export default App
