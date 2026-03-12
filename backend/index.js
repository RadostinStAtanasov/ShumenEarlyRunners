const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./routers/router");
const { error } = require("console");
const Pool = require("pg").Pool;

const pool = new Pool({
  user: "me",
  host: "localhost",
  database: "api",
  password: "radostin",
  port: 5432,
});

const app = express();

// app.get("/", (req, res) => {
//   res.send("Hello World From Backend EarlyRunners");
// });

app.get("/", (req, res) => {
  res.json({ info: "Node.js, Express, and Postgres API" });
});

const getUsers = (req, res) => {
  pool.query("SELECT * FROM users ORDFER BY id ASC", (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).json(res.rows);
  });
};

const createUser = (req, res) => {
  const { name, email } = request.bodyParser;

  pool.query(
    "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *",
    [name, email],
    (error, result) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`User added with ID: ${result.rows[0].id}`);
    },
  );
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const corsOption = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOption));
app.use("/", router);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost ${PORT}`);
});

const updateUser = (req, res) => {
  const id = parseInt(req.params.id);
  const { name, email } = request.body;

  pool.query(
    "UPDATE users SET name = $1, email = $2 WHERE id = $3",
    [name, email, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).send(`User modified with ID: ${id}`);
    },
  );
};
