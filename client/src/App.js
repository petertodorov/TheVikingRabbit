import React from 'react';
import {
  Route, Switch,
} from 'react-router-dom';
import './App.css';

import Header from './components/header-component/Header'
import Footer from './components/footer-component/Footer'

import Landing from './components/landing-component/Landing'
import Rabbit from './components/rabbit-component/Rabbit'
import Leshica from './components/leshica-component/Leshica'
import Swording from './components/swording-component/Swording'
import Heroes from './components/heroes-component/Heroes'
import Friends from './components/friends-component/Friends'
import Playground from './components/playground-component/Playground'
import PlaygroundTwo from './components/playground-component/PlaygroundTwo'
import TestAPI from './components/testAPI-component/testAPI'



function App() {
  return (
    <div className='main-container'>
      <Header />
      <Switch>
        <Route path="/" component={Landing} exact />
        <Route path="/leshica" exact>
          <Leshica name='Foxy' />
        </Route>
        <Route path="/rabbit" component={Rabbit} exact />
        <Route path="/swording" component={Swording} exact />
        <Route path="/heroes" component={Heroes} exact />
        <Route path="/friends" component={Friends} exact />
        <Route path="/playground" component={Playground} exact />
        <Route path="/playgroundTwo" component={PlaygroundTwo} exact />
        <Route path="/testAPI" component={TestAPI} exact />

      </Switch>
      <Footer />
    </div>
  );
}

export default App;
