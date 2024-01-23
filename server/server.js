const express = require('express');
const app = express();
require('dotenv').config()
const PORT = process.env.BILLING_PORT;
const cors = require('cors');
const cookieParser = require('cookie-parser');

app.use(express.json());
app.use(cookieParser());

const corsOptions = {
    origin: 'http://localhost:8080',
    credentials: true,
  };
app.use(cors(corsOptions));

//used for serving the application
app.use('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
});

//wild card route handler
app.use('*', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

//global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: err.message },
  };
  const errorObj = Object.assign(defaultErr, err);
  console.log(errorObj.log);
  res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});

