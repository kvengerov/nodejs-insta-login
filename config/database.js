let db_user = 'admin',
  db_password = 'adminadmin1',
  db_uri = `mongodb://${db_user}:${db_password}@ds159344.mlab.com:59344/social-auth`;

module.exports = {
  port: process.env.PORT || 3000,
  db: { uri: db_uri }
};
