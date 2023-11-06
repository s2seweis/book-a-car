import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

export const UsersRoute = (props) => {    
  if (
    localStorage.getItem('user')
     && 
     props.users?.role === 'user'  
  )
  {
    return <Route {...props} />;
  }
};

UsersRoute.propTypes = {
  users: PropTypes.shape({
    role: PropTypes.string,
  }),
  component: PropTypes.elementType.isRequired,
};