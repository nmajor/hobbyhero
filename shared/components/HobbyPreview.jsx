import React, { Component, PropTypes } from 'react';
import EmbeddedVideo from './EmbeddedVideo';

class HobbyPreview extends Component {
  renderVideoPreview() {
    return <EmbeddedVideo src={this.props.preview.src} />;
  }
  renderImagePreview() {
    return <img role="presentation" src={this.props.preview.src} />;
  }
  render() {
    if (this.props.preview.kind === 'video') {
      return this.renderVideoPreview();
    }

    return this.renderImagePreview();
  }
}

HobbyPreview.propTypes = {
  preview: PropTypes.object.isRequired,
};

export default HobbyPreview;
