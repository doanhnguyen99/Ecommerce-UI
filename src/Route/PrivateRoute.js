import React, { useContext, useEffect} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    useHistory,
    useLocation,
    Route,
  } from "react-router-dom";
  import axios from "axios";
  import {AppContext} from './../App';

function PrivateRoute({ children, ...rest }) {
  let {auth, setAuth} = useContext(AppContext);

    if(!auth)
    axios({
      method: "get",
      url: "http://localhost:3000/api/user/profile",
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("token")
      }
    })
    .then(res => {
        if(res.data.id != null){
          setAuth(true);
        }
    })
  
    
    
    return (
      <Route
        {...rest}
        render={({ location }) =>
          auth || localStorage.getItem("auth") == "true" ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }

  export default PrivateRoute
  