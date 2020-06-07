import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
import './index.css';
import Dashboard from './pages/dashboard';
import Login from './pages/login';
import { AuthContextProvider } from './context/auth';
import { ExpenseContextProvider } from './context/expenses';
import GuardRoute from './components/guardRoute';
import Root from './components/root';
const root = (
  <BrowserRouter>
    <AuthContextProvider>
      <ExpenseContextProvider>
        <Root>
          <Switch>
            <GuardRoute type='public' path='/login' component={Login} />
            <GuardRoute type='private' path='/dashboard' component={Dashboard} />
            <Redirect from='/' to='/dashboard'></Redirect>
          </Switch>
        </Root>
      </ExpenseContextProvider>
    </AuthContextProvider>

  </BrowserRouter>
);
ReactDOM.render(root, document.getElementById('root'));
