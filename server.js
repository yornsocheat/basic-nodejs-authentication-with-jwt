require('dotenv').config()
const express = require("express");

const app = express();
const port = 3000;

const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

app.use('/api/auth', authRoute);
app.use('/api/posts', postRoute);

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
