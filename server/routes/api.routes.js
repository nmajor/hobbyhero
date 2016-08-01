import passport from 'passport';
import express from 'express';
const router = express.Router(); // eslint-disable-line new-cap

import User from '../models/user';

import * as HobbyController from '../controllers/hobby.controller';

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(401);
    res.json({ error: { message: 'Unauthorized. User may not be logged in.' } });
  }
}

router.get('/user', (req, res) => {
  if (req.user) {
    res.json(req.user);
  } else {
    res.status(401);
    res.json({ error: { message: 'User not logged in.' } });
  }
});

router.post('/register', (req, res) => {
  if (req.body.password !== req.body.passwordConfirm) {
    return res.json({ errors: {
      password: { message: 'Does not match' },
      passwordConfirm: { message: 'Does not match' },
    } });
  }

  User.register(new User({ email: req.body.email }), req.body.password, (err, user) => {
    if (err) {
      return res.json({ error: {
        message: err.message,
        error: err,
      } });
    }

    passport.authenticate('local')(req, res, () => {
      res.json(user);
    });
  });
});

router.post('/login', passport.authenticate('local'), (req, res) => {
  res.json(req.user);
});

router.get('/logout', (req, res) => {
  req.logout();
  res.json({});
});

router.get('/health', (req, res) => {
  res.send('OK');
});

router.get('/hobbies', HobbyController.get);
router.get('/hobbies/:id', HobbyController.findOne);
router.post('/hobbies', ensureAuthenticated, HobbyController.create);
router.put('/hobbies/:id', ensureAuthenticated, HobbyController.patch);
router.patch('/hobbies/:id', ensureAuthenticated, HobbyController.patch);
router.delete('/hobbies/:id', ensureAuthenticated, HobbyController.remove);

module.exports = router;
