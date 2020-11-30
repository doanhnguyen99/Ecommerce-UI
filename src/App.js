import React from 'react';
import MyHeader from './components/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from './Page/HomePage/HomePage';
import LoginPage from './Page/LoginPage/LoginPage';
import RegisterPage from './Page/RegisterPage/RegisterPage';

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
          <Route path="/">
            <HomePage/>
          </Route>
        </Switch>
        <Footer style={{ textAlign: 'center', backgroundColor: "blue" }}>
        </Footer>
      </Layout>
    </Router>
    
  );
}

export default App;
