import React from 'react'

import { Redirect, Route, Switch } from 'react-router-dom';

import HomePage from './Pages/HomePage';


import './App.scss';// all shared styles in this file
import SecondPage from './Pages/SecondPage';
import VideoPage from './Pages/VideoPage';




const App = () => {
  return (
    //div app contain all pages same background
    <div className='app'>
      {/* switch to organize the routes */}
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route  path='/second-page'>
          <SecondPage />
        </Route>
        <Route  path='/video-page'>
          <VideoPage />
        </Route>
        
        <Redirect to='/' />

      </Switch>
    </div>
  )
}

export default App