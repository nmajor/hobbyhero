import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import Loading from '../Loading';

class RegisterForm extends Component { // eslint-disable-line react/prefer-stateless-function
  renderSubmitting() {
    if (this.props.submitting) {
      return <span className="button-loading"><Loading /></span>;
    }
  }
  renderErrorClass(field) {
    if (field.touched && field.error) {
      return 'has-error';
    }
  }
  renderError(field) {
    if (field.touched && field.error) {
      return <span className="help-block">{field.error}</span>;
    }
  }
  render() {
    const {
      fields: {
        name,
        email,
        password,
        passwordConfirm,
      },
      error,
      handleSubmit,
    } = this.props;

    return (<form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-12">
          <div className={`form-group ${this.renderErrorClass(name)}`}>
            <label className="control-label">Name</label>
            <input type="text" className="form-control" {...name} />
            {this.renderError(name)}
          </div>
        </div>
        <div className="col-md-12">
          <div className={`form-group ${this.renderErrorClass(email)}`}>
            <label className="control-label">Email</label>
            <input type="text" className="form-control" {...email} />
            {this.renderError(email)}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className={`form-group ${this.renderErrorClass(password)}`}>
            <label className="control-label">Password</label>
            <input type="password" className="form-control" {...password} />
            {this.renderError(password)}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className={`form-group ${this.renderErrorClass(passwordConfirm)}`}>
            <label className="control-label">Confirm Password</label>
            <input type="password" className="form-control" {...passwordConfirm} />
            {this.renderError(passwordConfirm)}
          </div>
        </div>
      </div>
      <div className="form-group">
        {error && <div className="text-danger">{error}</div>}
        <button className="btn btn-success btn-block blah" type="submit">Submit {this.renderSubmitting()}</button>
      </div>
    </form>);
  }
}

RegisterForm.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

RegisterForm = reduxForm({ // eslint-disable-line no-class-assign
  form: 'register',
  fields: [
    'name',
    'email',
    'password',
    'passwordConfirm',
  ],
})(RegisterForm);

export default RegisterForm;
