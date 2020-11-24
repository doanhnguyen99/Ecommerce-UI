import React from "react"
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
// import Navbar from './component/navbar/navbar'
import Login from './component/login/login'
import SignUp from "./component/signup/signup";

const { SubMenu } = Menu;

class App extends React.Component {
  render() {
   
    return (
        // <Login/>
        <SignUp />
    );
  }
}

export default App;