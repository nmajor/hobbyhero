import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import * as Actions from '../redux/actions/index';
import { connect } from 'react-redux';
import Header from '../components/Header';
import HobbyListContainer from '../containers/HobbyListContainer';

class DashboardWrapper extends Component {
  componentDidMount() {
    if (this.props.hobbies.length < 1) {
      this.props.dispatch(Actions.getHobbies());
    }
  }
  render() {
    return (<div className="dashboard-wrapper">
      <Header />
      <div className="container">
        <h1>Dashboard</h1>
        <HobbyListContainer />
        <Link to="/hobbies/new" className="btn btn-success">Add New Hobby</Link>
      </div>
    </div>);
  }
}

DashboardWrapper.need = [
  (params, cookie) => {
    return Actions.getHobbies.bind(null, cookie)();
  },
];

function mapStateToProps(store) {
  return {
    hobbies: store.hobbies,
  };
}

DashboardWrapper.propTypes = {
  dispatch: PropTypes.func.isRequired,
  hobbies: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(DashboardWrapper);
