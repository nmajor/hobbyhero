import React, { Component, PropTypes } from 'react';

class Header extends Component {
  renderDesc() {
    return <div>{this.props.hobby.desc}</div>;
  }
  render() {
    return (<div>
      <h1>{this.props.hobby.name}</h1>
      {this.renderDesc()}
    </div>);
  }
}

Header.propTypes = {
  hobby: PropTypes.object.isRequired,
};

export default Header;
