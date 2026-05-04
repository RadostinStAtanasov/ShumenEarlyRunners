const { Sequelize } = require("@sequelize/core");
const { PostgresDialect } = require("@sequelize/postgres");

const sequelize = new Sequelize({
  dialect: PostgresDialect,
  database: "earlyrunners_api",
  user: "earlyrunners_me",
  password: "}B9#9(ijq;y.JLK-",
  host: "93.94.140.42",
  port: 5432,
  clientMinMessages: "notice",
});

module.exports = sequelize;

// const pool = new Pool({
//   user: "earlyrunners_me",
//   host: "93.94.140.42",
//   database: "earlyrunners_api",
//   password: "}B9#9(ijq;y.JLK-",
//   port: 5432,
// });
