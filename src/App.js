import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './pages/Login';
import store from './store';

function App() {
  return (
    <BrowserRouter>
      <Provider store={ store }>
        <Route exact path="/" component={ Login } />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
