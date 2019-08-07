import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './pages/Dashboard';
import Signin from './pages/Signin';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/connection" component={Signin} />
          <PrivateRoute path="/" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;