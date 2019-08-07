import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchUserStuff } from "../actions/UserActions";

const mapStateToProps = state => ({
  userInfos: state.UserReducer.userInfos,
});

const mapDispatchToProps = dispatch => ({
  fetchUser: () => dispatch(fetchUserStuff()),
});

class Dashboard extends Component {
  constructor(props) {
    super(props);
    const { fetchUser } = props;
    fetchUser();
  }
  render() { 
    const { userInfos} = this.props;
    return ( 
      <div>
        <p>Hello{' '} {userInfos && userInfos.name}</p>
        {console.log(userInfos)}
      </div>
     );
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
