import React from 'react';
import { Route } from 'react-router-dom';
import Index from './pages/Index';
import Example from './pages/Example';

let Router;
if (process.env.NODE_ENV === 'development') {
  Router = require('react-router-dom').HashRouter;
} else {
  Router = require('react-router-dom').BrowserRouter;
}

function App() {
  return [
    <Route exact path="/" component={Index} />,
    <Route exact path="/example" component={Example} />,
  ];
}

export default function AppRouter() {
  return (
    <Router><App /></Router>
  );
}
