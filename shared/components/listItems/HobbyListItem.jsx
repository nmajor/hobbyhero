import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';

class HobbyListItem extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (<div>
      {this.props.hobby.name} <Link to={`/hobbies/${this.props.hobby.slug}/edit`}>Edit</Link>
    </div>);
  }
}

HobbyListItem.propTypes = {
  hobby: PropTypes.object.isRequired,
};

export default HobbyListItem;
