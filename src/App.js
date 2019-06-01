import React, { Component } from 'react';
import './App.css';
import Nav from "./components/Menu/Nav";
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Admin from './pages/Admin/Admin';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import Cart from './components/Cart/Cart';

var data = JSON.parse(localStorage.getItem('CART'));
var initialState = data? data : []

class App extends Component {
  // state={
  //   cart: []
  // }
  addProductToCard=(item,quanlity)=>{
    //console.log("data recive",item)
   
    initialState.push({item, quanlity})
    
    localStorage.setItem('CART', JSON.stringify(initialState));
  }
  
  render() {
   // const {cart} = this.state
    return (
      <Router>
        <div>
              <Nav data={initialState}/>
              <Switch>
                <Route
                  path='/'
                  exact
                  render={(props) => <HomePage addProductToCard={this.addProductToCard} {...props} />}
                />
                <Route
                  path='/cart'
                  render={(props) => <Cart {...props} data={initialState}/>}
                />
                {/* <Route path="/" exact component={HomePage} /> */}
                {/* <Route path="/cart" component={Cart}/> */}
                <Route path="/admin" component={Admin}/>
                <Route path="*" component={NotFoundPage}/>
              </Switch>
        </div>
      </Router>
    );
  }
}

export default App;