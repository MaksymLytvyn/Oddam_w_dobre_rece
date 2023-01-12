import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Home from './components/Home';
import Logowanie from './components/Logowanie';
import Rejestracja from './components/Rejestracja';
import Wylogowano from './components/Wylogowano';

class App extends Component {
  render() {
    return (
        <Router>
            <Routes>
              <Route exact path='/' element={<Home />} />
                  <Route path='logowanie' element={<Logowanie />} />
                  <Route path='rejestracja' element={<Rejestracja />} />
                  <Route path='start' element={<Home />} />
                  <Route path='wylogowano' element={<Wylogowano />} />
            </Routes>
        </Router>
    )
  }
}

export default App;

