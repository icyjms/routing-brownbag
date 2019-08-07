import React from 'react';
import './App.css';
import Users from './Users'
import About from './About'
import Nav from './Nav'
import Detail from './Detail'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/users' exact component={Users} />
          <Route path='/users/:id' component={Detail} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);

export default App;
