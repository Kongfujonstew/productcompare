import html from '../templates/home';

export const authenticate = (req, res, next) => {
  console.log('authenticate', req.cookies);

  if (req.cookies.loggedIn !== true) {
    res.write(html);
    res.end();
  }

  next();
};

export const login = (req, res, next) => {
  console.log('setting cookie');
  res.cookie('loggedIn', 'true', { maxAge: 900000, httpOnly: false});
  res.end();
};

export const logout = (req, res, next) => {
  console.log('deleting cookie');
  res.cookie('loggedIn', 'false', { maxAge: 900000, httpOnly: false});
  res.end();
};
