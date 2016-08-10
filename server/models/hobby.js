import Mongoose, { Schema } from 'mongoose';
import _ from 'lodash';

const HobbySchema = new Schema({
  name: String,
  slug: String,
  desc: String,
  visible: { type: Boolean, default: false },
  tags: [],
  previews: [{
    kind: String,
    src: String,
  }],
  resources: [],
  affiliateLinks: [],
});

function slugify(text) {
  return text.toString().toLowerCase()
  .replace(/\s+/g, '-')           // Replace spaces with -
  .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
  .replace(/\-\-+/g, '-')         // Replace multiple - with single -
  .replace(/^-+/, '')             // Trim - from start of text
  .replace(/-+$/, '');            // Trim - from end of text
}

HobbySchema.post('init', function () {  // eslint-disable-line func-names
  this._original = this.toObject();
});

HobbySchema.pre('save', function (next) { // eslint-disable-line func-names
  if ((this.propChanged('name') && !_.isEmpty(this.name)) || _.isEmpty(this.slug)) {
    this.slug = slugify(this.name);
  }

  next();
});

HobbySchema.methods.propChanged = function propChanged(propsString) {
  const original = this._original || {};
  const current = this.toObject();

  const originalProp = _.get(original, propsString);
  const currentProp = _.get(current, propsString);

  return !_.isEqual(originalProp, currentProp);
};

export default Mongoose.model('Hobby', HobbySchema);
