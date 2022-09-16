import './App.css';

import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import FallbackScreen from './components/Fallback/FallbackScreen';
import { AppProvider } from "./core/context/appContextProvider";
import NavBarProvider from "./core/context/navbarContext";
import Home from './pages/Home/Home';
import PrivateRoute from './core/routing/PrivateRoute';

function App() {
  return (
    <Router>
      <AppProvider>
        <ErrorBoundary FallbackComponent={FallbackScreen}>
          <NavBarProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Home} redirectPath="/" />
              <Route path="*" component={FallbackScreen} />
            </Switch>
          </NavBarProvider>
        </ErrorBoundary>
      </AppProvider>
    </Router>
  );
}

export default App;
