const app = require("./app");
const mongoose = require("mongoose");
require("colors");

const { DB_HOST, PORT = 3000 } = process.env;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`.green.italic.bold);
});

const connectDB = async () => {
  try {
    const db = await mongoose.connect(DB_HOST);
    console.log(
      `Database connection successful. DB_NAME: ${db.connection.name}. DB_HOST: ${db.connection.host}. DB_PORT: ${db.connection.port}`
        .green.italic.bold
    );
  } catch (error) {
    console.log(error.message.red.italic.bold);
    process.exit(1);
  }
};

connectDB();