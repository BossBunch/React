import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
//import { store } from './store';
//import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement);
//root.render(
//    <React.StrictMode>
//        <BrowserRouter>
//           /* <Provider store={ store }>*/
//                <App />
//          /*  </Provider>*/
//        </BrowserRouter>
//</React.StrictMode>
//);



root.render(
    <React.StrictMode>
        <BrowserRouter>
            <UserProvider>
                <App />
            </UserProvider>
        </BrowserRouter>
    </React.StrictMode>

);

reportWebVitals();


