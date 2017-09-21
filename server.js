import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import path from 'path';

import getProductData from './API/index';
import { authenticate, login, logout } from './middleware/auth/index';
import html from './src/templates/home';

const app = express();
const port = 8888;
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, './src/public')));

app.use((req, res, next) => {
  console.log('request received, loggedIn: ', req.cookies.loggedIn);
  next();
})

app.post('/login', (req, res) => {
  login(req, res);
});

app.post('/logout', (req, res) => {
  logout(req, res);
});

// app.use(authenticate);

app.use('/admin', (req, res) => {
});

app.use('/search', (req, res) => {
  console.log('search request received');
  getProductData(req, res);
});

app.use((req, res) => {
  res.write(html);
  res.end();
});

//sync with db then create server
app.listen(port, () => console.log('Please navigate to http://localhost:8888'));
