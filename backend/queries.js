const Pool = require("pg").Pool;
const { json } = require("body-parser");
const { isValidEmail, isValidText, isValidPassword } = require("./validation");
const { hash, compare } = require("bcryptjs");
const { message, redirect } = require("statuses");
//const { createJSONToken } = require("./auth");
const jwt = require("jsonwebtoken");

// const dotenv = require("dotenv");

// dotenv.config();asd

const pool = new Pool({
  user: "earlyrunners_me",
  host: "93.94.140.42",
  database: "earlyrunners_api",
  password: "}B9#9(ijq;y.JLK-",
  port: 5432,
});

const getBlogs = async (req, res) => {
  pool.query("SELECT * FROM blogs", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

const getBlogsById = async (req, res) => {
  const id = req.params.blogAndNewsId;
  pool.query("SELECT * FROM blogs WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows[0]);
  });
};

const getTestImages = async (req, res) => {
  pool.query("SELECT * FROM Gallery", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

const getEvents = async (req, res) => {
  pool.query("SELECT * FROM events", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

const getResults = async (req, res) => {
  pool.query("SELECT * FROM results", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

const getEventById = async (req, res) => {
  const id = req.params.eventsId;
  pool.query("SELECT * FROM events WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

const postContactUs = async (req, res) => {
  const { inputName, inputLastName, inputTopic, inputMessage } = req.body;

  pool.query(
    "INSERT INTO contact (name, lastname, topic, message) VALUES ($1, $2, $3, $4)",
    [inputName, inputLastName, inputTopic, inputMessage],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(201).send(`Message is added from contact form`);
    },
  );
};

const getSignup = async (req, res) => {
  pool.query("SELECT * FROM users", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

const getLogin = async (req, res) => {
  pool.query("SELECT * FROM users", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

const postLogin = async (req, res) => {
  const { email, password } = req.body;

  let errors = {};

  try {
    const result = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    const user = result.rows[0];
    if (!user) {
      errors.user = "Invalid credentials.";
      //return res.status(400).json({ error: "Invalid credentials" });
    }

    const valid = await compare(password, user.password);

    if (!valid) {
      errors.password = "Invalid credentials.";
      //return res.status(400).json({ error: "Invalid credentials" });
    }

    if (Object.keys(errors).length > 0) {
      return res
        .status(422)
        .json({ message: "User login fail duo to validation errors.", errors });
    }

    const token = jwt.sign({ email }, "supersecret", {
      expiresIn: "1h",
    });

    res.json({ message: "Login successful", token: token }); //da probvam tokena

    //res.json({ message: "Login successful", token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
};

const postSignup = async (req, res) => {
  try {
    const { email, password /*confirmPassword need to make*/ } = req.body;

    let errors = {};

    const existing = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    if (existing.rows.length > 0) {
      errors.user = "User already exist";
    }

    if (Object.keys(errors).length > 0) {
      return res.status(422).json({
        message: "User signup fail duo to validation errors.",
        errors,
      });
    }

    const hashedPw = await hash(password, 12);

    const result = await pool.query(
      "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id, email",
      [email, hashedPw],
    );
    res.json({ message: "User created", user: result.rows[0] });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
};

const postLogout = async (req, res) => {};

module.exports = {
  getBlogs,
  getBlogsById,
  getTestImages,
  getEvents,
  getResults,
  getEventById,
  postContactUs,
  postSignup,
  getSignup,
  postLogin,
  getLogin,
  postLogout,
};
