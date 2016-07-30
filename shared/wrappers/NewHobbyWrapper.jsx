import React, { PropTypes, Component } from 'react';
import _ from 'lodash';
import Header from '../components/Header';
import HobbyForm from '../components/forms/HobbyForm';
import { connect } from 'react-redux';
import * as Actions from '../redux/actions/index';

class NewHobbyWrapper extends Component {
  constructor(props, context) {
    super(props, context);
    this.submit = this.submit.bind(this);
  }

  submit(props) {
    return new Promise((resolve, reject) => {
      this.props.dispatch(Actions.createHobby(props, (res) => {
        if (res.errors) {
          const errors = {
            _error: res.errors.base || 'Hobby creation failed.',
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
              <h1>New Hobby</h1>
              <HobbyForm onSubmit={this.submit} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    user: store.user,
  };
}

NewHobbyWrapper.propTypes = {
  dispatch: PropTypes.func.isRequired,
  user: PropTypes.object,
};

export default connect(mapStateToProps)(NewHobbyWrapper);
