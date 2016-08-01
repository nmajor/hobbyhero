import React, { PropTypes, Component } from 'react';
import _ from 'lodash';
import Header from '../components/Header';
import HobbyForm from '../components/forms/HobbyForm';
import { connect } from 'react-redux';
import * as Actions from '../redux/actions/index';

class EditHobbyWrapper extends Component {
  constructor(props, context) {
    super(props, context);

    this.submit = this.submit.bind(this);

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
  submit(props) {
    return new Promise((resolve, reject) => {
      this.props.dispatch(Actions.updateHobby(this.hobby._id, props, (res) => {
        if (res.errors) {
          const errors = {
            _error: res.errors.base || 'Hobby update failed.',
          };

          _.forEach(res.errors, (val, key) => {
            errors[key] = val.message;
          });

          reject(errors);
        } else {
          resolve();
          // this.context.router.push('/dashboard');
        }
      }));
    });
  }

  render() {
    return (
      <div className="new-hobby-container">
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Edit Hobby</h1>
              <HobbyForm initialValues={this.hobby} onSubmit={this.submit} />
            </div>
          </div>
        </div>
      </div>
    );
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
