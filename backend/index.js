const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./routers/router");
const app = express();
const db = require("./queries");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const corsOption = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOption));
app.use("/", router);

app.get("/", (req, res) => {
  res.json({ info: "Node.js, Express, and Postgres API" });
});

app.get("/blogs", db.getBlogs);
app.get("/users/:id", db.getUserById);
// app.post("/users", db.createUser);
// app.put("/users/:id", db.updateUser);
// app.delete("/users/:id", db.deleteUser);

app.use((err, req, res, next) => {
  console.error("Error:", err.message);
  res.status(500).send("Internal Server Error");
});

app.use((req, res, next) => {
  const error = new Error("Something went wrong");
  next(error);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost ${PORT}`);
});
