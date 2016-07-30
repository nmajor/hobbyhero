import Hobby from '../models/hobby';

export function findOne(req, res) {
  Hobby.findOne({ _id: req.params.id })
  .then((hobby) => {
    res.json(hobby);
  });
}

export function get(req, res) {
  const query = req.user && req.user.email === 'nick@nmajor.com' ? {} : { visible: true };

  Hobby.find(query)
  .then((hobbies) => {
    res.json(hobbies);
  });
}

export function create(req, res) {
  const hobby = new Hobby(req.body);
  hobby.save()
  .then((hobby) => { // eslint-disable-line no-shadow
    res.json(hobby);
  });
}

export function patch(req, res) {
  Hobby.findOne({ _id: req.params.id })
  .then((hobby) => {
    hobby.imap = req.body.imap; // eslint-disable-line no-param-reassign

    return hobby.save();
  })
  .then((hobby) => {
    res.json(hobby);
  });
}

export function remove(req, res) {
  Hobby.remove({ _id: req.params.id })
  .then((hobby) => {
    res.json(hobby);
  });
}
