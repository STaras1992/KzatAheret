import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header.js';
import Main from './components/Main/Main.js';
import Footer from './components/Footer/Footer.js';
import About from './components/About/About.js';
import Menu from './components/Menu/Menu.js';
import Contact from './components/Contact/Contact.js';
import './App.css';

const App = () => {
  return (
    <div className='app-container'>
      <Header />
      <div className='app-content'>
        <Switch>
          <Route exact path='/' render={(routeParams) => <Main {...routeParams} />} />
          <Route exact path='/about' render={(routeParams) => <About {...routeParams} />} />
          <Route
            exact
            path='/menu/:category'
            render={(routeParams) => <Menu category={routeParams.match.params.category} {...routeParams} />}
          />
          <Route exact path='/menu' render={(routeParams) => <Menu category='breads' {...routeParams} />} />
          <Route exact path='/contact' render={(routeParams) => <Contact {...routeParams} />} />
          <Route render={(routeParams) => <Main {...routeParams} />} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

export default App;
