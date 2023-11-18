/*
    Imports
*/
const express = require('express');
const app = express();
// Environment variables
require('dotenv').config();
// Logging any requests w/ colorized status codes
const logger = require("morgan");
// Connection to database
const connectToMongoDB = require("./db/mongodb");
// Prevent CORS issue
const cors = require('cors');

// Update corsOptions to have ALL origins given access
const corsOptions = {
    origin: "*",
    optionSuccessStatus: 200
}

/*MIDDLEWARE */
app.use(logger("dev"));
// This will read form data properly
app.use(express.urlencoded({ extended: false }));
// This will read JSON properly
app.use(express.json());
// This will allow us to test both servers locally
app.use(cors(corsOptions));

//Routes
const ypRouter = require("./routes/ypRouter");
// localhost:3001/api/.....
app.use("/api", ypRouter);

/*
    Server listening
*/
// const PORT = 3001;
const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`);

    connectToMongoDB();
})