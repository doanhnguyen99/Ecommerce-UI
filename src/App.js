import React, {useState} from 'react';
import MyHeader from './components/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import PrivateRoute from './Route/PrivateRoute'
import HomePage from './Page/HomePage/HomePage';
import LoginPage from './Page/LoginPage/LoginPage';
import RegisterPage from './Page/RegisterPage/RegisterPage';
import ShoppngCart from './Page/ShoppingCart/ShoppingCart';
import MyFooter from './components/MyFooter';
import Product from './Page/ProductPage/ProductPage';
import Order from './components/Order/Order';
import MyShop from './components/Shop/MyShop';
import CategoryPage from './Page/Category/CategoryPage'
import Profile from './Page/Profile/Profile'
import { Layout  } from 'antd';

const { Footer } = Layout;

const AppContext = React.createContext();
const { Provider, Consumer } = AppContext;
export {AppContext};

function App() {
  const [auth, setAuth] = useState(false);    
  const [profile, setProfile] = useState({}); 

  return (
    <Provider value={{
      profile,
      setProfile,
      auth,
      setAuth,
    }}>
    <Router>
      <Layout>
        <MyHeader/>
        <Switch>

          <Route path="/login">
            <LoginPage/>
          </Route>
          <Route path="/categoris">
            <CategoryPage/>
          </Route>

          <Route path="/register">
            <RegisterPage/>
          </Route>

          <PrivateRoute path="/shopping-cart">
            <ShoppngCart/>
          </PrivateRoute>
          
          <PrivateRoute path="/profile">
            <Profile/>
          </PrivateRoute>

          <PrivateRoute path="/my-shop">
            <MyShop/>
          </PrivateRoute>

          <Route path="/product/:id">
            <Product/>
          </Route>

          <PrivateRoute path="/my-order">
            <Order/>
          </PrivateRoute>
          
          <Route path="/">
            <HomePage/>
          </Route>
          
        </Switch>
        <Footer style={{ backgroundColor: "#001529", marginTop: "20px" }}>
          <MyFooter/>
        </Footer>
      </Layout>
    </Router>
    </Provider>
    
  );
}

export default App;
