
const express = require(`express`);
const dotenv = require(`dotenv`);

const initiateDBConnection = require(`./config/db`);

const carRouter = require ('./routes/car');
const feedbackRouter = require ('./routes/feedback');


dotenv.config({
  path: `./config/.env`
});

const PORT = process.env.PORT;

const app = express();

app.listen(PORT, async () => {
  console.log(`server has been started as is listening to port ${PORT}`);
  await initiateDBConnection();
});