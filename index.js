const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// app.post('/submit', (req, res) => {
//   const { username, password } = req.body;
//   res.send(`Server received: Username - ${username}, Password - ${password}`);
// });
app.post('/submit', (req, res) => {
  const { fname, lname, email } = req.body;
  // let fname = req.body.fname;
  // let lname = req.body.lname;
  // let email = req.body.email;
  res.send(`First name: ${fname}, Last name: ${lname}, Email: ${email}`);
});

app.listen(3000);
