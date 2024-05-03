const express = require('express');
const userRouter = require('./routers/user')
const tableRouter = require('./routers/table')
const cors = require('cors');
require('./db/mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const port = process.env.PORT;

const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

app.use(cookieParser());

app.use(bodyParser.json());

app.use(express.json())
app.use(userRouter)
app.use(tableRouter)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});