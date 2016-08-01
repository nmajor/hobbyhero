import React, { PropTypes, Component } from 'react';
import HobbyListItem from '../listItems/HobbyListItem';

class HobbyList extends Component {
  renderHobbyListItems() {
    return this.props.hobbies.map((hobby) => {
      return <HobbyListItem hobby={hobby} />;
    });
  }
  render() {
    return (<div>
      {this.renderHobbyListItems()}
    </div>);
  }
}

HobbyList.propTypes = {
  hobbies: PropTypes.array.isRequired,
};

export default HobbyList;
