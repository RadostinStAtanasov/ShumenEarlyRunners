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
app.use("/", router);

app.get("/", (req, res) => {
  res.json({ info: "Node.js, Express, and Postgres API!!!" });
});

//app.use("/images", express.static("images"));asd

app.get("/blogs", db.getBlogs);
app.get("/blogs/:blogAndNewsId", db.getBlogsById);
app.get("/gallery", db.getTestImages);
app.get("/events", db.getEvents);
app.get("/events/:eventsId", db.getEventById);
app.get("/results", db.getResults);
app.post("/contact", db.postContactUs);
app.post("/signup", db.createUser);
app.post("/login", db.loginUser);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost ${PORT}`);
});
