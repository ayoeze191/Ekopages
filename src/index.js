import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux'
import { AuthProvider } from './context/auth/auth';
import { SignUpProvider } from "./context/auth/signup"
import { store } from './store/Store';
import { ModalProvider } from './context/modal/modal';
import ReactGA from 'react-ga';
// Initialize React Ga with your tracking ID
ReactGA.initialize('G-33MK520YP4');
const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient()

root.render(
  // <React.StrictMode>
    <ModalProvider>
    <AuthProvider>
    <SignUpProvider>
      <Provider store={store}>
     <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
    </Provider>
    </SignUpProvider>
    </AuthProvider>
    </ModalProvider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(//))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
