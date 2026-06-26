console.log("APP START...");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
//const router = require("./routers/router");
const app = express();
let db = require("./queries");

const wrap = (fn) => (req, res, next) => {
  try {
    return Promise.resolve(fn(req, res, next)).catch(next);
  } catch (err) {
    next(err);
  }
};

try {
  db = require("./queries");
  console.log("QUERIES LOADED");
} catch (e) {
  console.error("ERROR LOADING QUERIES:", e);
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const corsOption = {
  origin: true,
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOption));
//app.use("/", router);

app.get("/", (req, res) => {
  res.json({ info: "Node.js, Express, and Postgres API!!!" });
});

//app.use("/images", express.static("images"));

// app.post("/posts", async (req, res) => {
//   const { title, content } = req.body;
//   try {
//     const post = await prisma.post.create({
//       data: { title, content },
//     });
//     res.status(201).json(post);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });

// app.get("/posts", async (req, res) => {
//   try {
//     const posts = await prisma.post.findMany();
//     res.status(200).json(posts);
//   } catch (error) {
//     res.status(500).json({ error: "Failed to retrieve posts" });
//   }
// });

app.post("/post", wrap(db.postsPost()));
app.get("/post", wrap(db.getPosts));
app.get("/blogs", wrap(db.getBlogs));
app.get("/blogs/:blogAndNewsId", wrap(db.getBlogsById));
app.get("/events", wrap(db.getEvents));
app.get("/events/:eventsId", wrap(db.getEventById));

app.get("/results", wrap(db.getResults));
app.get("/gallery", wrap(db.getImages));
app.get("/signup", wrap(db.getSignup));
app.get("/login", wrap(db.getLogin));

app.post("/contact", wrap(db.postContactUs));
app.post("/signup", wrap(db.postSignup));
app.post("/login", wrap(db.postLogin));
app.post("/logout", wrap(db.postLogout));

//app.use(checkAuth); routes under this need token authentication

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
