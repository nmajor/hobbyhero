import React, { PropTypes, Component } from 'react';

class PreviewListItem extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (<div>
      {this.props.preview.src}
    </div>);
  }
}

PreviewListItem.propTypes = {
  preview: PropTypes.object.isRequired,
};

export default PreviewListItem;
