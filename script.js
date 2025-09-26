const express = require('express');
const app = express();
app.use(express.static('public'));

// view engine set karna zaroori hai agar render use karna hai
app.set('view engine', 'ejs');

// middleware 1
app.use((req, res, next) => {
  console.log('Hello Middleware 1');
  next();
});

// Routes
app.get('/', (req, res) => {
  res.render('index');  // views/home.ejs
});
app.use((req, res, next) => {
  console.log('Hello Middleware 2');
  next();
});
app.get('/about', (req, res) => {
  res.render('about'); // views/about.ejs
});
app.use((req, res, next) => {
  console.log('Hello Middleware 3');
  next();
});
app.get('/contact', (req, res) => {
  res.render('contact'); // views/contact.ejs
});
app.use((req, res, next) => {
  console.log('Hello Middleware 4');
  next();
});
app.get('/service', (req, res) => {
  res.render('service'); // views/service.ejs
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
}); 