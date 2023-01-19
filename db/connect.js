const mongoose = require("mongoose");

// mongoose
//   .connect(connectionString)
//   .then(() => console.log("Connected to the db"))
//   .catch((err) => console.log(err));

// async function main() {
//   try {
//     await mongoose.connect(connectionString, {
//       useNewUrlParser: true,
//       useCreateIndex: true,
//       useFindAndModify: false,
//       useUnifiedTopology: true,
//     });
//     console.log("Connected to the db");
//   } catch (error) {
//     console.log(error);
//   }
// }

// main();

const connectDB = (url) => {
  return mongoose.connect(
    url,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    () => console.log("Server is connected to the db")
  );
};

module.exports = connectDB;
