import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import store from './store';
import { GamesList } from 'pages/GamesList';
import { GameDetails } from 'pages/GameDetails';
import { GlobalStyles } from 'ui-kit/GlobalStyles';



export const App: React.FC = () => (
  <BrowserRouter>
    <GlobalStyles />

    <Provider store={store}>
      <Routes>
        <Route path='/' element={<GamesList />} />
        <Route path='/details/:id' element={<GameDetails />} />
      </Routes>
    </Provider>
  </BrowserRouter>
);
