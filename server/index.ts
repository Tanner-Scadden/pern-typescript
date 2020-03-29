import * as express from 'express';
import api from './api';

require('dotenv').config();
const app = express();
const { SERVER_PORT } = process.env;

app.use(express.json());
app.use('/api', api);

app.listen(SERVER_PORT, () =>
  console.log(`Server is running at port ${SERVER_PORT}`)
);
