const db = require("mysql2");
const { Pool } = require("pg");

const pool = new Pool({
  user: "earlyrunners_me",
  host: "93.94.140.42",
  database: "earlyrunners_api",
  password: "a0a80b18@",
  port: 5432,
});

const getBlogs = async (req, res) => {
  try {
    const blogs = await pool.query("SELECT * FROM blogs");
    res.json(blogs.rows);
  } catch (error) {
    res.status(500).json({
      message: error.message,
      code: error.code,
      meta: error.meta,
    });
  }
};

const getPosts = async (req, res) => {
  try {
    const posts = await pool.query("SELECT * FROM post");
    res.json(posts.rows);
  } catch (error) {
    res.status(500).json({
      message: error.message,
      code: error.code,
    });
  }
};

const getImages = async (req, res) => {
  try {
    const gallery = await pool.query("SELECT * FROM gallery");
    res.status(200).json(gallery.rows);
  } catch (error) {
    res.status(500).json({
      message: error.message,
      code: error.code,
      meta: error.meta,
    });
  }
};

const getEvents = async (req, res) => {
  try {
    const events = await pool.query("SELECT * FROM events");
    res.status(200).json(events.rows);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve events" });
  }
};

const getResults = async (req, res) => {
  try {
    const results = await pool.query("SELECT * FROM results");
    res.status(200).json(results.rows);
  } catch (error) {
    res.status(500).json({
      message: error.message,
      code: error.code,
      meta: error.meta,
    });
  }
};

const getBlogsById = async (req, res) => {
  const id = Number(req.params.blogAndNewsId);

  try {
    const getblog = await pool.query("SELECT * FROM blogs WHERE id = $1", [id]);
    res.status(200).json(getblog.rows);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve blog by ID" });
  }
};

const getEventById = async (req, res) => {
  const id = Number(req.params.eventsId);

  try {
    const event = await pool.query("SELECT * FROM events WHERE id = $1", [id]);
    res.status(200).json(event.rows);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve event" });
  }
};

// const getSignup = async (req, res) => {
//   try {
//     const signups = await pool.query("");
//     res.status(200).json(signups);
//   } catch (error) {
//     res.status(500).json({ error: "Failed to retrieve signups" });
//   }
// };

// const getLogin = async (req, res) => {
//   try {
//     const getlogins = await prisma.users.findMany();
//     res.status(200).json(getlogins);
//   } catch (error) {
//     res.status(500).json({ error: "Failed to retrieve logins" });
//   }
// };

// const postsPost = async (req, res) => {
//     if(req == null || res == null) return;

//   const { title, content } = req.body || {};

//   try {
//     const post = await prisma.post.create({
//       data: { title, content },
//     });
//     res.status(201).json(post);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };

// const postLogin = async (req, res) => {
//   const { email, password } = req.body || {};

//   let errors = {};

//   try {
//     const result = await prisma.users.findUnique({
//       where: { email: email },
//     });
//     if (!user) {
//       errors.user = "Invalid credentials.";
//       //return res.status(400).json({ error: "Invalid credentials" });
//     }

//     const valid = await compare(password, user.password);

//     if (!valid) {
//       errors.password = "Invalid credentials.";
//       //return res.status(400).json({ error: "Invalid credentials" });
//     }

//     if (Object.keys(errors).length > 0) {
//       return res
//         .status(422)
//         .json({ message: "User login fail duo to validation errors.", errors });
//     }

//     const token = jwt.sign({ email }, "supersecret", {
//       expiresIn: "1h",
//     });

//     res.json({ message: "Login successful", token: token }); //da probvam tokena
//     //res.json({ message: "Login successful", token });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: "Server error cant post login" });
//   }
// };

// const postSignup = async (req, res) => {
//   try {
//     const { email, password /*confirmPassword need to make*/ } = req.body || {};

//     let errors = {};

//     const existing = await prisma.users.findUnique({
//       where: { email: email },
//     });

//     if (existing.rows.length > 0) {
//       errors.user = "User already exist";
//     }

//     if (Object.keys(errors).length > 0) {
//       return res.status(422).json({
//         message: "User signup fail duo to validation errors.",
//         errors,
//       });
//     }

//     const hashedPw = await hash(password, 12);

//     const result = await prisma.users.create({
//       data: {
//         email: email,
//         password: hashedPw,
//       },
//     });

//     res.json({ message: "User created", user: result.rows[0] });
//   } catch (error) {
//     //console.log(error);
//     res.status(500).json({ error: "Server error cant signup duo to errors" });
//   }
// };

// const postContactUs = async (req, res) => {
//   const { inputName, inputLastName, inputTopic, inputMessage } = req.body;

//   try {
//     const contacts = await pool.query(
//       "INSERT INTO contact (name, lastname, topic, message) VALUES ($1, $2, $3, $4)",
//       [inputName, inputLastName, inputTopic, inputMessage],
//       (error, results) => {
//         if (error) {
//           throw error;
//         }
//         res.status(201).send(`Message is added from contact form`);
//       },
//     );
//     res.status(200).json(contacts);
//   } catch (error) {
//     res.status(500).json({ error: "Failed to add contact" });
//   }
// };

// const postLogout = async (req, res) => {};

module.exports = {
  getBlogs,
  getResults,
  getEvents,
  getImages,
  getEventById,
  getBlogsById,
  getPosts,

  // getLogin,
  // getSignup,
  // postContactUs,
  // postsPost,
  // postLogin,
  // postSignup,
};
