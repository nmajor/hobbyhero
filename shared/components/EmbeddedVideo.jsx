// var React = require('react');
// var YouTube = require('react-youtube').default;
import React, { Component, PropTypes } from 'react';
import YouTube from 'react-youtube';
import { youTubeIdFromUrl } from '../helpers';

// var ga = require('../ga');

class Header extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      played: false,
      clicked: false,
    };

    this.youTubeId = this.youTubeId.bind(this);
    this.defaultImage = this.defaultImage.bind(this);
    this.mqdefaultImage = this.mqdefaultImage.bind(this);
    this.hqdefaultImage = this.hqdefaultImage.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.handleImageClick = this.handleImageClick.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.src !== this.props.src) {
      this.setState({
        played: false,
        clicked: false,
      });
    }
  }
  opts() {
    return {
      frameBorder: '0',
      playerVars: {
        autoplay: 1,
      },
    };
  }
  youTubeId() {
    return youTubeIdFromUrl(this.props.src);
  }
  defaultImage() {
    return `http://img.youtube.com/vi/${this.youTubeId()}/default.jpg`;
  }
  mqdefaultImage() {
    return `http://img.youtube.com/vi/${this.youTubeId()}/mqdefault.jpg`;
  }
  hqdefaultImage() {
    return `http://img.youtube.com/vi/${this.youTubeId()}/hqdefault.jpg`;
  }
  handlePlay() {
    // if (!this.state.played) {
    //   if (ga) {
    //     ga.event({
    //       category: 'Hobby',
    //       action: 'Played Video',
    //       value: this.youTubeId(),
    //     });
    //   }
    //   this.setState({ played: true });
    // }
  }
  handleImageClick() {
    this.setState({ clicked: true });
  }
  renderEmbeddedVideo() {
    // if (this.props.src && this.state.clicked) {
    return (<YouTube
      videoId={this.youTubeId()}
      opts={this.opts()}
      onPlay={this.handlePlay}
    />);
    // } else if (this.props.src) {
      // return <img role="presentation" onClick={this.handleImageClick} src={this.hqdefaultImage()} />;
    // }
  }
  render() {
    return (<div>
      {this.renderEmbeddedVideo()}
    </div>);
  }
}

Header.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Header;
