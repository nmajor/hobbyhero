import React, { Component, PropTypes } from 'react';
import HobbyPreview from './HobbyPreview';
import PreviewList from './lists/PreviewList';

class HobbyView extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      selectedPreview: this.props.hobby.previews[0],
    };
  }
  renderDesc() {
    return <div>{this.props.hobby.desc}</div>;
  }
  renderPreviewMain() {
    return (<div className="row">
      <div className="col-md-12">
        <HobbyPreview preview={this.state.selectedPreview} />
      </div>
    </div>);
  }
  renderPreviewList() {
    return <PreviewList previews={this.props.hobby.previews} />;
  }
  render() {
    return (<div>
      <h1>{this.props.hobby.name}</h1>
      {this.renderPreviewMain()}
      {this.renderPreviewList()}
      {this.renderDesc()}
    </div>);
  }
}

HobbyView.propTypes = {
  hobby: PropTypes.object.isRequired,
};

export default HobbyView;
