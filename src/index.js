import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './index.css';
import Dashboard from './pages/dashboard';
import Login from './pages/login';
import {watcherUserChange, watchExpenses, createExpense, deleteExpense } from './services/firebase';

watcherUserChange((user) => {
  console.log(user);
  watchExpenses((expenses) => console.log(expenses));
})

const root = (
  <BrowserRouter>
    <Switch>
      <Route path='/login' component={Login}/>
      <Route path='/dashboard' component={Dashboard}/>
      <Redirect from='/' to='/dashboard'></Redirect>
    </Switch>
  </BrowserRouter>
);
ReactDOM.render(root, document.getElementById('root'));
