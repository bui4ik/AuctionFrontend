import React from 'react'
import { Redirect, Route } from 'react-router'
import routes from '../config/routes'
import * as selectors from '../store/auth/selectors'
import { connect } from 'react-redux'

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest } : any) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated ? <Component {...props} /> : <Redirect to={{ pathname: routes.login }}/>
    }
  />
);

const mapStateToProps = (state: any) => {
  return {
    isAuthenticated: selectors.isAuthenticatedSelector(state),
  }
};

export default connect(mapStateToProps)(PrivateRoute)
