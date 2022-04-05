import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/app/store';
import RenderContextProvider from './context/renderContext/renderContext';
import LogoutContextProvider from './context/logoutContext/logoutContext';

const root = createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RenderContextProvider>
                <BrowserRouter>
                    <LogoutContextProvider>
                        <App />
                    </LogoutContextProvider>
                </BrowserRouter>
            </RenderContextProvider>
        </Provider>
    </React.StrictMode>
);

reportWebVitals();
