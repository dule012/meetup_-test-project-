import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import MeetUpCities from './pages/MeetUpCities'
import MeetUpInfo from './pages/MeetUpInfo'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/:meetupCity/:number" component={MeetUpInfo}/>
        <Route path="/:meetupCity" component={MeetUpCities} />
        <Route path="/" component={Home} />
      </Switch>
    );
  }
}

export default App;
