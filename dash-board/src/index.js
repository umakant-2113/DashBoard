
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import People from './Components/People';
import Book from './Components/Book';
import Article from './Components/Article';

import Aside from './Components/Aside';
import Header from './Components/Header';

import SingleArticle from './Components/SingleArticle';
import './StyleSheet/style.css';

let root = document.getElementById('root');

ReactDOM.render(
  <BrowserRouter>
    <Route path='/'>
      <Header />
    </Route>
    <div className='box'>
      <div className='box-30'>
        <Aside />
      </div>
      <div className='box-70'>
        <Route path='/people'>
          <People />
        </Route>

        <Route path='/book'>
          <Book />
        </Route>

        <Route path='/Article'>
          <Article />
        </Route>

        <Route path='/art/:slug' component={SingleArticle}></Route>
      </div>
    </div>
  </BrowserRouter>,
  root
);
