const Pool = require("pg").Pool;

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

module.exports = {
  getBlogs,
  getBlogsById,
  getTestImages,
  getEvents,
  // createBlog,
  // updateUser,
  // deleteUser,
};
