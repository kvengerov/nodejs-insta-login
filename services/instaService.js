const httpRequest = require('request');

const instaConfig = require('../config/instagram');
const User = require('../models/User');

module.exports = (req, res) => {
  console.log('Instagram code: ', req.query.code);
  let data = {
    client_id: instaConfig.instagram.client_id,
    client_secret: instaConfig.instagram.client_secret,
    grant_type: 'authorization_code',
    redirect_uri: instaConfig.instagram.redirect_uri,
    code: req.query.code
  };

  let options = {
    url: 'https://api.instagram.com/oauth/access_token',
    method: 'POST',
    form: data
  };
  httpRequest(options, (error, response, body) => {
    if (!error && response.statusCode == 200) {
      let userRes = JSON.parse(body);
      console.log(userRes);
      let user = {
        id: userRes.user.id,
        username: userRes.user.username,
        full_name: userRes.user.full_name,
        bio: userRes.user.bio,
        website: userRes.user.website,
        profile_picture: userRes.user.profile_picture,
        access_token: userRes.access_token
      };
      User.create(user, error => {
        if (error) {
          res.send(error);
        }
        res.redirect('/');
      });
    }
  });
};
