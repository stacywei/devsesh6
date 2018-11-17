// express for server-side methods
const express = require('express');
const bodyParser = require('body-parser');

// creates the application
const app = express();
// sets the port for the application
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));
let counter = 1;
const whirlydoos = [];

app.get('/api/whirlydoos', (req, res) => {
  /* Implement API Call */
  res.status(200).send(whirlydoos);
});

app.post('/api/whirlydoos', (req, res) => {
  /* Implement API Call */
  let whirly = req.body
  const new_whirly =
  {
    name: whirly.name,
    skill: whirly.skill,
    created_at: Date.now(),
    id: counter
  }
  counter++;
  whirlydoos.push(new_whirly);
  res.status(200).send(whirlydoos);
});

app.put('/api/whirlydoos/update/:id', (req, res) => {
  /* Implement API Call */
  whirlydoos = whirlydoos.filter(whirly => whirly.id != req.params.id)

  let whirly = req.body
  const new_whirly =
  {
    name: whirly.name,
    skill: whirly.skill,
    created_at: Date.now(),
    id: whirly.id
  }
  whirlydoos.push(new_whirly);
  res.status(200).send(whirlydoos);
});

// listen for requests made to get /api/hello and post /api/world
app.listen(port, () => console.log(`Listening on port ${port}`));
