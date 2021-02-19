import React, { useEffect } from 'react'
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Login from './components/Login';
import Payment from './components/Payment'
import Orders from './components/Orders';

import { AUTH } from './config/firebase'
import { useStateValue } from './StateProvider';

import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

const promise = loadStripe('pk_test_51IMHE1BWqpp6KGTacXwIWY3xLqcuMxCnkaGmHlOQfagOBZOZyFwTxkWf3H2OIYeuG0XIZNx1gmoNoJdroePIfNG300kg8trb5T');

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    
    AUTH.onAuthStateChanged(authUser => {
      console.log('UASER IS ',authUser)
      if (authUser) {
        dispatch({
          type : 'SET_USER',
          user : authUser
        })
      } else {
        dispatch({
          type : 'SET_USER',
          user : null
        })
      }
    })

  }, [])

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path={'/orders'}>
            <Header/>
            <Orders/>
          </Route>
          <Route path='/payment'>
            <Header/>
            <Elements stripe={promise}>
              <Payment/>
            </Elements>
          </Route>
          <Route path='/login'>
            <Login/>
          </Route>
          <Route path='/checkout'>
            <Header/>
            <Checkout/>
          </Route>
          <Route path='/'>
            <Header/>
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
