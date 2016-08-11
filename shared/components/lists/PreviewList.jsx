import React, { PropTypes, Component } from 'react';
import PreviewListItem from '../listItems/PreviewListItem';

class PreviewList extends Component {
  renderPreviewListItems() {
    return this.props.previews.map((preview, index) => {
      return <PreviewListItem key={index} preview={preview} />;
    });
  }
  render() {
    return (<div>
      {this.renderPreviewListItems()}
    </div>);
  }
}

PreviewList.propTypes = {
  previews: PropTypes.array.isRequired,
};

export default PreviewList;
