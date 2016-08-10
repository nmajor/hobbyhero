import React, { PropTypes, Component } from 'react';
import _ from 'lodash';
// import Header from '../components/Header';
import HobbyView from '../components/HobbyView';
import { connect } from 'react-redux';
import * as Actions from '../redux/actions/index';
import Helmet from 'react-helmet';

class EditHobbyWrapper extends Component {
  constructor(props, context) {
    super(props, context);
    this.hobby = _.find(this.props.hobbies, { slug: this.props.params.hobbySlug }) || {};
  }
  componentDidMount() {
    if (this.props.hobbies.length < 1) {
      this.props.dispatch(Actions.getHobbies());
    }
  }
  componentWillReceiveProps(nextProps) {
    this.hobby = _.find(nextProps.hobbies, { slug: nextProps.params.hobbySlug }) || {};
  }
  renderHelmetData() {
    return {
      title: this.hobby.name,
      titleTemplate: 'dathobby.com - %s',
      meta: [
        { name: 'description', content: this.hobby.desc },
      ],
    };
  }
  renderHelmet() {
    return <Helmet {...this.renderHelmetData()} />;
  }
  renderHeader() {
    // if (this.props.user) {
    //   return <Header />;
    // }
  }
  render() {
    return (<div className="hobby-container">
      {this.renderHeader()}
      {this.renderHelmet()}
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <HobbyView hobby={this.hobby} />
          </div>
        </div>
      </div>
    </div>);
  }
}

EditHobbyWrapper.need = [
  (params, cookie) => {
    return Actions.getHobbies.bind(null, cookie)();
  },
];

function mapStateToProps(store) {
  return {
    user: store.user,
    hobbies: store.hobbies,
  };
}

EditHobbyWrapper.propTypes = {
  dispatch: PropTypes.func.isRequired,
  params: PropTypes.object,
  user: PropTypes.object,
  hobbies: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(EditHobbyWrapper);
