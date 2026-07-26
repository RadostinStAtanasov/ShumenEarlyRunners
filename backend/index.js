const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
let db = require("./queries");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const corsOption = {
  origin: true,
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOption));

app.get("/", (req, res) => {
  res.json({ info: "Node.js, Express, and Postgres API!!!" });
});

//app.use("/images", express.static("images"));

app.get("/blogs", db.getBlogs);
app.get("/blogs/:blogAndNewsId", db.getBlogsById);
app.get("/events", db.getEvents);
app.get("/events/:eventsId", db.getEventById);
app.get("/results", db.getResults);
app.get("/gallery", db.getImages);
app.get("/post", db.getPosts);

//app.get("/login", db.getLogin);
//app.get("/signup", db.getSignup);
// app.post("/contact", db.postContactUs);
// app.post("/post", db.postsPost);
// app.post("/signup", db.postSignup);
// app.post("/login", db.postLogin);
// app.post("/logout", db.postLogout);

//app.use(checkAuth); routes under this need token authentication

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
