import React from 'react';
import ReactDOM from 'react-dom/client';

import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import App from './App';
import { Provider } from 'react-redux'
import {store} from "./store/store";

import Log from './components/Log';
import Reg from "./components/Reg";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
      <Provider store={store}>

          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<App />} />
                  <Route path="log" element={<Log />} />
                  <Route path="reg" element={<Reg />} />
              </Routes>
          </BrowserRouter>

      </Provider>
  </React.StrictMode>
);

