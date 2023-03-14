const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const connectDB = require('./utils/connectDB');
dotenv.config();

/* Cross Origin Policy */
const cors = require('cors');

const suraRoutes = require('./routes/suraRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const ayatRoutes = require('./routes/ayatRoutes');
const hadithRoutes = require('./routes/hadithRoutes');

const app = express();
app.use(express.json());

app.options('*', cors());

app.use(
  cors({
    origin: ['https://islamic-life.netlify.app', 'http://localhost:3000'],
  })
);

app.use('/api/sura', suraRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/ayat', ayatRoutes);
app.use('/api/hadith', hadithRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  );
  connectDB();
});
