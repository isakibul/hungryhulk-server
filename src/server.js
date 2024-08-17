require("dotenv").config();
const http = require("http");
const app = require("./app");
const dbConnection = require("./db");

const server = http.createServer(app);
const PORT = process.env.PORT || 5000;

const main = async () => {
  try {
    await dbConnection();
    server.listen(PORT, () => {
      console.log(
        `Server started on port ${PORT} at ${new Date().toLocaleTimeString()}`
      );
    });
  } catch (e) {
    console.log("Database error");
    console.log(e);
  }
};

main();
