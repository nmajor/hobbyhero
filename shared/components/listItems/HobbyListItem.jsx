import React, { PropTypes, Component } from 'react';

class HobbyListItem extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (<div>
      {this.props.hobby.name}
    </div>);
  }
}

HobbyListItem.propTypes = {
  hobby: PropTypes.object.isRequired,
};

export default HobbyListItem;
