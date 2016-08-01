import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import PureInput from '../PureInput';
import Loading from '../Loading';

class HobbyForm extends Component { // eslint-disable-line react/prefer-stateless-function
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
        slug,
        desc,
        tags,
        images,
        videos,
        resources,
        affiliateLinks,
        visible,
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
          <div className={`form-group ${this.renderErrorClass(slug)}`}>
            <label className="control-label">Slug</label>
            <input type="text" disabled className="form-control" {...slug} />
            {this.renderError(slug)}
          </div>
        </div>
        <div className="col-md-12">
          <div className={`form-group ${this.renderErrorClass(desc)}`}>
            <label className="control-label">Description</label>
            <textarea type="text" className="form-control" {...desc}></textarea>
            {this.renderError(desc)}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label className="control-label">Tags</label>
            {tags.map((tag, index) =>
              <div className="form-group" key={index}>
                <PureInput type="text" placeholder="Tag" field={tag} />
                {this.renderError(tag)}
              </div>
            )}
            <div className="form-group">
              <button className="btn btn-success" type="button" onClick={event => { event.preventDefault(); tags.addField(); }}>
                <i /> Add Tag
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label className="control-label">Images</label>
            {images.map((image, index) =>
              <div className="form-group" key={index}>
                <PureInput type="text" placeholder="Image" field={image} />
                {this.renderError(image)}
              </div>
            )}
            <div className="form-group">
              <button className="btn btn-success" type="button" onClick={event => { event.preventDefault(); images.addField(); }}>
                <i /> Add Image
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label className="control-label">Videos</label>
            {videos.map((video, index) =>
              <div className="form-group" key={index}>
                <PureInput type="text" placeholder="Video" field={video} />
                {this.renderError(video)}
              </div>
            )}
            <div className="form-group">
              <button className="btn btn-success" type="button" onClick={event => { event.preventDefault(); videos.addField(); }}>
                <i /> Add Video
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label className="control-label">Resources</label>
            {resources.map((resource, index) =>
              <div className="form-group" key={index}>
                <PureInput type="text" placeholder="Resource" field={resource} />
                {this.renderError(resource)}
              </div>
            )}
            <div className="form-group">
              <button className="btn btn-success" type="button" onClick={event => { event.preventDefault(); resources.addField(); }}>
                <i /> Add Resource
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label className="control-label">Affiliate Links</label>
            {affiliateLinks.map((affiliateLink, index) =>
              <div className="form-group" key={index}>
                <PureInput type="text" placeholder="AffiliateLink" field={affiliateLink} />
                {this.renderError(affiliateLink)}
              </div>
            )}
            <div className="form-group">
              <button className="btn btn-success" type="button" onClick={event => { event.preventDefault(); affiliateLinks.addField(); }}>
                <i /> Add Affiliate Link
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className={`form-group ${this.renderErrorClass(visible)}`}>
            <input type="checkbox" {...visible} />
            <label className="left-bumper control-label">Visible</label>
            {this.renderError(visible)}
          </div>
        </div>
      </div>
      <div className="form-group">
        {error && <div className="text-danger">{error}</div>}
        <button className="btn btn-success" type="submit">Submit {this.renderSubmitting()}</button>
      </div>
    </form>);
  }
}

HobbyForm.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

HobbyForm = reduxForm({ // eslint-disable-line no-class-assign
  form: 'hobby',
  fields: [
    'name',
    'slug',
    'desc',
    'visible',
    'tags[]',
    'images[]',
    'videos[]',
    'resources[]',
    'affiliateLinks[]',
  ],
})(HobbyForm);

export default HobbyForm;
