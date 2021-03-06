import React, { Component, PropTypes } from 'react';

class PureInput extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props.field !== nextProps.field;
  }

  render() {
    const { field } = this.props;
    return <input className="form-control" {...field} />;
  }
}

PureInput.propTypes = {
  field: PropTypes.object.isRequired,
};

export default PureInput;
