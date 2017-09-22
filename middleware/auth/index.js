import html from '../../src/templates/home';

export const authenticate = (req, res, next) => {
  console.log('Authenticating user, user loggedIn status: ', req.cookies.loggedIn);
  if (req.cookies.loggedIn !== 'true') { //encrypt me for true security
    console.log('Authentication fail, redirecting');
    res.redirect('/');
    res.end();
  } else {
    next();
  }
};

export const login = (req, res, next) => {
  console.log('User login, setting cookie loggedIn=true');
  res.cookie('loggedIn', 'true', { maxAge: 900000, httpOnly: false});
  res.end();
};

export const logout = (req, res, next) => {
  res.cookie('loggedIn', 'false', { maxAge: 900000, httpOnly: false});
  res.end();
};
