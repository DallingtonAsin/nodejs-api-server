import express from 'express'
import { connectDB } from './database/connection'
const logger = require('morgan')
const bodyParser = require('body-parser')
require('./database/models')
const app = express();

const userRoutes = require('./routes/user')

//Setting the hostname and port number for the server to listen
const hostname = "127.0.0.1";
const port = 3000;

// database setup
connectDB()


app.use(logger('dev'))
app.use(express.json())

app.use(bodyParser.urlencoded({
  limit: '100mb',
  extended: true,
  parameterLimit: 1000000
}))


app.get('/', (req, res) => {
  res.send('Node.js API Server!');
});

app.use('/api/v1/users', userRoutes)

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
