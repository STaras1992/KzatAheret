import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header.js';
import Main from './components/Main/Main.js';
import Footer from './components/Footer/Footer.js';
import About from './components/About/About.js';
import Menu from './components/Menu/Menu.js';
import './App.css';

const App = () => {
  console.log('render');
  return (
    <div className='app'>
      <Header />
      <div className='content'>
        <Switch>
          <Route exact path='/' render={(routeParams) => <Main {...routeParams} />} />
          <Route exact path='/about' render={(routeParams) => <About {...routeParams} />} />
          <Route exact path='/menu' render={(routeParams) => <Menu {...routeParams} />} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

export default App;
