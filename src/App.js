import React, { Component } from 'react';
import './App.css';
import Menu from "./components/Menu/Menu";
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ProductList from './pages/ProductListPage/ProductListPage';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Menu />
          <div className="container">
            <div className="row">
              <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/list" component={ProductList}/>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
                <Route path="*" component={NotFoundPage}/>
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}


export default App;
