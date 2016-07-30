import Mongoose, { Schema } from 'mongoose';

const HobbySchema = new Schema({
  name: String,
  slug: String,
  desc: String,
  visible: { type: Boolean, default: false },
  tags: [],
  images: [],
  videos: [],
  resources: [],
  affiliateLinks: [],
});

export default Mongoose.model('Hobby', HobbySchema);

// name: { type: String, required: 'Name is required!' },
//   slug: { type: String, required: 'Slug is required!' },
//   public: { type: Boolean, default: false },
//   imageUrl: String,
//   indoor: { type: Boolean, default: false },
//   computer: { type: Boolean, default: false },
//   practical: { type: Boolean, default: false },
//   artistic: { type: Boolean, default: false },
//   difficulty: Number,
//   startingCost: [],
//   repeatCost: [],
//   desc: String,
//   resources: [{
//     ref: String,
//     text: String
//   }],
//   affiliateLinks: [{
//     ref: String,
//     text: String
//   }],
//   videos: [{
//     src: String,
//     text: String
//   }],
