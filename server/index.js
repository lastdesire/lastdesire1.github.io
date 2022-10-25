const keys = require("./keys");

// Express Application setup
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Postgres client setup
const { Pool } = require("pg");
const pgClient = new Pool({
  user: keys.pgUser,
  host: keys.pgHost,
  database: keys.pgDatabase,
  password: keys.pgPassword,
  port: keys.pgPort
});

pgClient.on("connect", client => {
  client
    .query("CREATE TABLE IF NOT EXISTS my_comments_table (id SERIAL PRIMARY KEY, name VARCHAR(255), message VARCHAR(255))")
    .catch(err => console.log("PG ERROR", err));
});

//Express route definitions
app.get("/", (req, res) => {
  res.send("Hi");
});

// get the comments
app.get("/comment", async (req, res) => {
  const comments = await pgClient.query(`SELECT * FROM my_comments_table`)
  res.json(comments.rows)
  console.log("Got Comments")
});

// now the post -> insert comment
app.post("/comment", async (req, res) => {
  const {name, message} = req.body
  const newComment = await pgClient.query(`INSERT INTO my_comments_table (name, message) values ($1, $2) RETURNING *`, [name, message])
  res.json(newComment.rows[0])
  console.log("Create Comment")
});

app.listen(5000, err => {
  console.log("Listening port 5000");
});
