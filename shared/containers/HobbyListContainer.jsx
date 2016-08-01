import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import HobbyList from '../components/lists/HobbyList';

class HobbyListContainer extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="new-hobby-container">
        <HobbyList hobbies={this.props.hobbies} />
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    hobbies: store.hobbies,
  };
}

HobbyListContainer.propTypes = {
  hobbies: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(HobbyListContainer);
