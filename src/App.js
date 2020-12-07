import React from 'react';
import MyHeader from './components/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HomePage from './Page/HomePage/HomePage';
import LoginPage from './Page/LoginPage/LoginPage';
import RegisterPage from './Page/RegisterPage/RegisterPage';
import ShoppngCart from './Page/ShoppingCart/ShoppingCart';
import MyFooter from './components/MyFooter';
import Product from './components/Product'

import { Layout  } from 'antd';

const { Footer } = Layout;

function App() {
  return (
    <Router>
      <Layout>
        <MyHeader/>
        <Switch>
          <Route path="/login">
            <LoginPage/>
          </Route>
          <Route path="/register">
            <RegisterPage/>
          </Route>
          <Route path="/shopping-cart">
            <ShoppngCart/>
          </Route>
          <Route path="/product">
            <Product/>
          </Route>
          <Route path="/">
            <HomePage/>
          </Route>
        </Switch>
        <Footer style={{  backgroundColor: "#001529", marginTop: "20px" }}>
          <MyFooter/>
        </Footer>
      </Layout>
    </Router>
    
  );
}

export default App;
