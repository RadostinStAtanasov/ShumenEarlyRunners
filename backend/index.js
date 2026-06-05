const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./routers/router");
const app = express();
const db = require("./queries");

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

app.post("/post", db.postsPost);
app.get("/post", db.getPosts);
app.get("/blogs", db.getBlogs);
app.get("/blogs/:blogAndNewsId", db.getBlogsById);
app.get("/events", db.getEvents);
app.get("/events/:eventsId", db.getEventById);

app.get("/results", db.getResults);
app.get("/gallery", db.getImages);
app.get("/signup", db.getSignup);
app.get("/login", db.getLogin);

// app.post("/contact", db.postContactUs);
// app.post("/signup", db.postSignup);
// app.post("/login", db.postLogin);
// app.post("/logout", db.postLogout);

//app.use(checkAuth); routes under this need token authentication

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
