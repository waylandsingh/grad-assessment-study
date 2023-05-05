//require the package
const express = require('express');
const mongoose = require('mongoose');
// port num to run the server
const PORT = 3000;

// start the server
const app = express();

// mongo URI here + connect
const URI =
  'mongodb+srv://wmsingh:dcM6MhpJX8OZQGFG@assessment.icovaso.mongodb.net/?retryWrites=true&w=majority';
//connect and verify
mongoose
  .connect(URI)
  .then((d) => {
    console.log('hello, connected to mongo');
  })
  .catch((err) => {
    console.log(err);
  });

// incoming requests need any parsing?

// setup basic route
app.get('/', (req, res) => {
  return res.status(200).send('hello world!');
});

// start listening
app.listen(PORT, () => {
  console.log('listening on port:', PORT);
});
