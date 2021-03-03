/* eslint-disable max-len */
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import HomeInput from '../homeInput/HomeInput';

// -------------------------------g----------------------------------------------------

export default function App() {

  // -----------------------------------------------------------------------------------

  return (
    <div>
      <Router>

        <Switch>

          <Route
            path="/"
            exact
            component = { HomeInput } 
          />
            
        </Switch>

      </Router>
    </div>
  );
}

