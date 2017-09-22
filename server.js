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

// app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, './src/public')));

app.use((req, res, next) => {
  console.log('Request received');
  next();
});

app.get('/', (req, res) => {
  console.log('Delivering html and app.js/bundle link')
  res.write(html);
  res.end();
});

app.post('/login', (req, res) => {
  login(req, res);
});

app.use(authenticate);

app.use('/search', (req, res) => {
  console.log('Search request received');
  getProductData(req, res);
});

app.use((req, res) => {
  console.log('Delivering html and app.js/bundle link')
  res.write(html);
  res.end();
});

app.listen(port, () => console.log('Welcome!  Please navigate to http://localhost:8888'));
