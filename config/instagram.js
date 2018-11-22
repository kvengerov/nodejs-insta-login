let client_id = '06260dca749b455bb64401a3fd9bfad7',
  client_secret = '76d87c9191534040a10284d321c9cf3d',
  redirect_uri = 'http://localhost:3000/auth/instagram/callback',
  auth_url = `https://api.instagram.com/oauth/authorize/?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code`;

module.exports = {
  instagram: {
    client_id: client_id,
    client_secret: client_secret,
    auth_url: auth_url,
    redirect_uri: redirect_uri
  }
};
