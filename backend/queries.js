//const Pool = require("pg").Pool;
//const { json } = require("body-parser");
//const { isValidEmail, isValidText, isValidPassword } = require("./validation");
// const { hash, compare } = require("bcryptjs");
// const { message, redirect } = require("statuses");
// const jwt = require("jsonwebtoken");

// const dotenv = require("dotenv");

// dotenv.config();

// const pool = new Pool({
//   user: "earlyrunners_me",
//   host: "93.94.140.42",
//   database: "earlyrunners_api",
//   password: "}B9#9(ijq;y.JLK-",
//   port: 5432,
// });

//require("dotenv").config();

const DATABASE_URL =
  "postgresql://earlyrunners_me:%7DB9%239%28ijq%3By.JLK-@93.94.140.42:5432/earlyrunners_api";

const { PrismaClient } = require("@prisma/client");
const { PrismaPg } = require("@prisma/adapter-pg");
const adapter = new PrismaPg({
  connectionString: DATABASE_URL,
});
const prisma = new PrismaClient({ adapter });

console.log(DATABASE_URL);

const postsPost = async (req, res) => {
  const { title, content } = req.body;

  try {
    const post = await prisma.post.create({
      data: { title, content },
    });
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getPosts = async (req, res) => {
  try {
    const posts = await prisma.post.findMany();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error });
  }
};

const getBlogs = async (req, res) => {
  try {
    const blogs = await prisma.blogs.findMany();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve blogs" });
  }
};

const getBlogsById = async (req, res) => {
  const id = Number(req.params.blogAndNewsId);
  console.log(typeof id, id);

  try {
    const getblog = await prisma.blogs.findUniqueOrThrow({
      where: { id: id },
    });
    res.status(200).json(getblog);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve blog by ID" });
  }
};

const getImages = async (req, res) => {
  try {
    const gallery = await prisma.gallery.findMany();

    console.log("DATA", gallery);

    res.status(200).json(gallery);
  } catch (error) {
    console.log("ERROR:", error);

    res.status(500).json(error);
  }
};

const getEvents = async (req, res) => {
  try {
    const events = await prisma.events.findMany();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve events" });
  }
};

const getResults = async (req, res) => {
  try {
    const results = await prisma.results.findMany();
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve results" });
  }
};

const getEventById = async (req, res) => {
  const id = req.params.eventsId;

  try {
    const event = await prisma.events.findUnique({
      where: { id: id },
    });

    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve event" });
  }
};

const postContactUs = async (req, res) => {
  const { inputName, inputLastName, inputTopic, inputMessage } = req.body;

  try {
    const contact = await prisma.contact.create({
      data: {
        name: inputName,
        lastname: inputLastName,
        topic: inputTopic,
        message: inputMessage,
      },
    });
    res.status(200);
  } catch (error) {
    res.status(500).json({ error: "Failed to add contact" });
  }

  //   pool.query(
  //     "INSERT INTO contact (name, lastname, topic, message) VALUES ($1, $2, $3, $4)",
  //     [inputName, inputLastName, inputTopic, inputMessage],
  //     (error, results) => {
  //       if (error) {
  //         throw error;
  //       }
  //       res.status(201).send(`Message is added from contact form`);
  //     },
  //   );
};

const getSignup = async (req, res) => {
  try {
    const signups = await prisma.findMany();
    res.status(200).json(signups);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve signups" });
  }
};

const getLogin = async (req, res) => {
  try {
    const getlogins = await prisma.findMany();
    res.status(200).json(getlogins);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve logins" });
  }
};

const postLogin = async (req, res) => {
  const { email, password } = req.body;

  let errors = {};

  try {
    const result = await prisma.users.findUnique({
      where: { email: email },
    });
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
    res.status(500).json({ error: "Server error cant post login" });
  }
};

const postSignup = async (req, res) => {
  try {
    const { email, password /*confirmPassword need to make*/ } = req.body;

    let errors = {};

    const existing = await prisma.users.findUnique({
      where: { email: email },
    });

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

    const result = await prisma.users.create({
      data: {
        email: email,
        password: hashedPw,
      },
    });

    res.json({ message: "User created", user: result.rows[0] });
  } catch (error) {
    //console.log(error);
    res.status(500).json({ error: "Server error cant signup duo to errors" });
  }
};

//const postLogout = async (req, res) => {};

module.exports = {
  postsPost,
  getPosts,
  getBlogs,
  getLogin,
  getSignup,
  getResults,
  getEvents,
  getImages,
  getEventById,
  getBlogsById,

  postLogin,
  postSignup,
};
