import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import HomePage from 'src/features/Home/pages/index';
import './index.css';
import store from './store';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate persistor={store.persistor!}>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
