import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import './App.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Initialize from './components/Initialize';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ToastContainer autoClose={2000} />
        <Initialize>
          <Routes />
        </Initialize>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
