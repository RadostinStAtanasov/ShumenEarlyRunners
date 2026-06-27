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

app.post("/post", wrap(db.postsPost));
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
