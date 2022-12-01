
const express = require(`express`);
const dotenv = require(`dotenv`);

const initiateDBConnection = require(`./config/db`);
const customerrouter = require("./routes/customer");

const carRouter = require ('./routes/car');
const feedbackRouter = require ('./routes/feedback');

const custServiceRouter = require ('./routes/CustomerService');
const postRouter = require ('./routes/post');


dotenv.config({
  path: `./config/.env`
});

const PORT = process.env.PORT;

const app = express();
app.use(`/customer`, customerrouter);
app.listen(PORT, async () => {
  console.log(`server has been started as is listening to port ${PORT}`);
  await initiateDBConnection();
});