import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from "react-redux";

const mapStateToProps = state => ({
  user: state.UserReducer.user,
});

const PrivateRoute = (props) => {
  const { user } = props;
  if (!user) return <Redirect to="/connection" />;
  return (<Route {...props} />);
};

export default connect(mapStateToProps)(PrivateRoute);
