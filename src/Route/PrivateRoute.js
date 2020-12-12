import React, { useContext} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    useHistory,
    useLocation,
    Route,
  } from "react-router-dom";
  import {AppContext} from './../App';

function PrivateRoute({ children, ...rest }) {
    let {auth} = useContext(AppContext);
    
    return (
      <Route
        {...rest}
        render={({ location }) =>
          auth ? (
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
  