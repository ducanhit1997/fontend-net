import React, { Component } from 'react';
import './App.css';
import Nav from "./components/Menu/Nav";
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ProductList from './pages/ProductListPage/ProductListPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav/>
              <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/list" component={ProductList}/>
                <Route path="*" component={NotFoundPage}/>
              </Switch>
        </div>
      </Router>
    );
  }
}


export default App;
