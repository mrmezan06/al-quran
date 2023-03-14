const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const connectDB = async () => {
  const MONGO_URI = process.env.MONGO_URI;
  try {
    mongoose
      .connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log('Connected to MongoDB'.green.inverse);
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
