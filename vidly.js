const Joi = require("joi");
const express = require("express");
const app = express();
const { response } = require("express");
const { RSA_NO_PADDING } = require("constants");

// This allows access to the name property in the post method.
app.use(express.json());

const genres = [
  { id: 1, name: "Western" },
  { id: 2, name: "Romcom" },
  { id: 3, name: "Drama" },
  { id: 4, name: "French" },
  { id: 5, name: "XXX" },
];

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on ${port} and it is good...`);
});

// ***** GET *****

app.get("/api/genres", (req, res) => {
  res.send(genres);
});

app.get("/api/genres/:id", (req, res) => {
  const genre = genres.find((g) => g.id === parseInt(req.params.id));
  if (!genre) res.status(404).send("The genre isnt not there");
  res.send(genre);
});

// ***** POST *****

app.post("/api/genres", (req, res) => {
  const genre = {
    id: genres.length + 1,
    name: req.body.name,
  };
  genres.push(genre);
  res.send(genre);
});
