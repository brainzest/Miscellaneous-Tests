import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import './App.css';
import Test1 from './components/Test1';
import Test2 from './components/Test2';
import Test3 from './components/Test3';

const Home = () => {
  return (
    <h2>Welcome to the Agoda React Test</h2>
  );
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Agoda React Test</h1>
        </header>
        <p className="App-intro">
          Please complete each of the tests below
        </p>
        <Router>
          <div>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/test1">Test 1</Link></li>
              <li><Link to="/test2">Test 2</Link></li>
              <li><Link to="/test3">Test 3</Link></li>
              
            </ul>

            <hr />
            <div className="container">
              <Route exact path="/" component={Home} />
              <Route path="/test1" component={Test1} />
              <Route path="/test2" component={Test2} />
              <Route path="/test3" component={Test3} />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
