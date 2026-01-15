const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const logger = require('morgan');
const songCtrlr =require('./controllers/tracks');

const app = express();

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

app.use(cors());
app.use(express.json());
app.use(logger('dev'));

// Routes go here

app.post('/tracks', songCtrlr.create);
app.get('/tracks', songCtrlr.index);
app.get('/tracks', songCtrlr.show);
app.put('/tracks', songCtrlr.revise);
app.delete('/tracks', songCtrlr.delete);


app.listen(3000, () => {
  console.log('The express app is ready!');
});
