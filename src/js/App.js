import React from 'react'
import { Home } from './views/Home';
import {HashRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Navbar from './components/Navbar';
import Settings from './views/Settings'
import Welcome from './views/Welcome';
import Chat from './views/Chat';
import {Provider} from 'react-redux';
import configureStore from './store';
// const {ipcRenderer} = require('electron')

const App = () => {
    const store= configureStore();
    const sendNotification= ()=>{
        // ipcRenderer.send('notify','This is ipc notification!')
        electron.notificationApi.sendNotification('This is IPC notification')
    }
    return (
       <Provider store={store}>
         <Router>
          <Navbar />
          <div className='content-wrapper'>
          <Switch>

          <Route exact path='/'>
           <Welcome/>
           </Route>
          <Route path='/home'>
           <Home/>
           </Route>
           
          <Route path='/settings'>
           <Settings />
           </Route>
           
           <Route path='/chat/:id'>
           <Chat/>
           </Route>
           </Switch>
           </div>
           </Router>
           </Provider>
          )
    
}

export default App
