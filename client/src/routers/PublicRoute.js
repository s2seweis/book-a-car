import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

export const PublicRoute = (props) => {
    
  if (
    props.users?.role === undefined   
  )
  {
    return <Route {...props} />;
  }
};

PublicRoute.propTypes = {
  users: PropTypes.shape({
    role: PropTypes.string,
  }),
  component: PropTypes.elementType.isRequired,
};