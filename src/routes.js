import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Home from './components/pages/HomePage';
import About from './components/pages/AboutPage';
import Book from './components/book/BookPage';
import App from './App';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home}></IndexRoute>
        <Route path="/about" component={About}></Route>
        <Route path="/books" component={Book}></Route>
    </Route>
);