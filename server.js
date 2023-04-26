const app = require('./app');
const mongoose = require('mongoose');
const { error } = require('./helpers/validationSchema');

const DB_HOST =
  "mongodb+srv://lenagolubenkova:OZXDMmcBreXfvmPA@cluster0.6gisu5q.mongodb.net/contacts-base?retryWrites=true&w=majority";


mongoose.connect(DB_HOST).then(() =>
  app.listen(3000))
  .catch(error => console.log(error.message));

  // () => {
  //   console.log("Server running. Use our API on port: 3000");
  // };