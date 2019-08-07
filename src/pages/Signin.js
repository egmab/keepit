import React, { useEffect } from 'react';
import {
  Container, Row, Col
} from 'reactstrap';
import { withRouter } from 'react-router';
import { connect } from "react-redux";
import { loginGoogle, fetchUserStuff } from "../actions/UserActions";


const mapStateToProps = state => ({
  user: state.UserReducer.user,
});

const mapDispatchToProps = dispatch => ({
  fetchUser: () => dispatch(fetchUserStuff()),
});

const Signin = (props) => {
  const { history, user, fetchUser } = props;

  const login = () => {
    loginGoogle();
  };

  useEffect(() => {
    fetchUser();
    console.log('yeah', user)
    if (user) {
      history.push('/');
    }
  }, [fetchUser, history, user]);

  return (
    <div>
      <Container>
        <Row>
          <Col xs="12" style={{ marginTop: '20px', width: '50px' }}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Logo_TV_2015.png/280px-Logo_TV_2015.png" alt="logo" className="logo" />
          </Col>
        </Row>
        <Row>
          <Col xs="12" style={{ marginTop: '15px' }}>
            <h1>Keepit</h1>
          </Col>
        </Row>
        <Row>
          <Col xs="12" style={{ marginTop: '5px' }}>
            <p>Ego vero sic intellego, Patres conscripti, nos hoc tempore in provinciis decernendis perpetuae pacis habere oportere rationem. </p>
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <button className="Button-3" type="button" onClick={login}>Connexion Google</button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Signin));
