const Pool = require("pg").Pool;
const { json } = require("body-parser");
const { isValidEmail, isValidText, isValidPassword } = require("./validation");
const { hash } = require("bcryptjs");
const { message, redirect } = require("statuses");
const { createJSONToken } = require("./auth");
//const { redirect } = require("react-router-dom");

// const dotenv = require("dotenv");

// dotenv.config();

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

  const getUser = await pool.query(
    "SELECT * FROM users WHERE email == $1",
    [email],
    (errors, results) => {
      if (error) {
        throw error;
      }
      (res.status(200), json(results.rows));
    },
  );

  if (getUser.length == 0) {
    //throw new NotFoundError("Could not find users.");
    return res.redirect("/login");
  }

  bcrypt
    .compare(password, getUser.password)
    .then((doMatch) => {
      if (doMatch) {
        req.session.isLoggedIn = true;
        req.session.user = user;
        return req.session.save((err) => {
          console.log(err);
          res.redirect("/");
        });
        res.redirect("/");
      }
      res.redirect("/login");
    })
    .catch((err) => {
      console.log(err);
      return res.redirect("/");
    });
  // const user = getAllUsers.find((e) => e.email === email);
  // if (!user) {
  //   throw new NotFoundError("Could not find user for email");
  // }

  //const pwIsValid = await isValidPassword(password, user.password);
  // if (!pwIsValid) {
  //   return res.status(422).json({
  //     message: "Invalid credentials",
  //     errors: { credentials: "Invalid email or password entered" },
  //   });
  // }

  // const token = createJSONToken(email);
  // res.json({ token });
};

const postSignup = async (req, res) => {
  const { email, password } = req.body;
  let errors = {};

  const hashedPw = await hash(password, 12);
  //const authToken = createJSONToken(email);

  pool.query(
    "INSERT INTO users (email, password) VALUES ($1, $2)",
    [email, hashedPw],
    (error, results) => {
      if (error) {
        throw error;
      }
      res
        .status(201)
        .json({ message: "User created", user: email, token: authToken })
        .send(`User added with ID:`);
    },
  );

  // if (!isValidEmail(email)) {
  //   errors.email = "Invalid email.";
  // } else {
  //   let emailExist = pool.query(
  //     "SELECT * FROM users WHERE email = $1",
  //     [email],
  //     (error, results) => {
  //       if (emailExist) {
  //         errors.email = "Email exists already";
  //       }
  //     },
  //   );

  //   if (emailExist == mail) {
  //     errors.email("email already exist from if check");
  //   }
  // }

  // if (!isValidText(database.password, 6)) {
  //   errors.password = "Invalid password. Must be at least 6 characters long.";
  // }

  // if (Object.keys(errors).length > 0) {
  //   return res
  //     .status(422)
  //     .json({ message: "User signup failed due to validation errors", errors });
  // }

  // try {
  //   const authToken = createJSONToken(email);
  //   res
  //     .status(201)
  //     .json({ message: "User created.", user: email, token: authToken });
  // } catch (error) {
  //   throw error("Token fail");
  // }
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

// const createUser = (req, res) => {
//   const { name, email } = req.body;

//   pool.query(
//     "INSERT INTO users (name, email) VALUES ($1, $2)",
//     [name, email],
//     (error, results) => {
//       if (error) {
//         throw error;
//       }
//       res.status(201).send(`User added with ID: ${results.insertId}`);
//     },
//   );
// };

// const updateUser = (req, res) => {
//   const id = parseInt(req.params.id);
//   const { name, email } = req.body;

//   pool.query(
//     "UPDATE users SET name = $1, email = $2 WHERE id = $3",
//     [name, email, id],
//     (error, results) => {
//       if (error) {
//         throw error;
//       }
//       res.status(200).send(`User modified with ID: ${id}`);
//     },
//   );
// };

// const deleteUser = (req, res) => {
//   const id = parseInt(req.params.id);

//   pool.query("DELETE FROM users WHERE id = $1", [id], (error, results) => {
//     if (error) {
//       throw error;
//     }
//     res.status(200).send(`User delete with ID: ${id}`);
//   });
// };
