const express = require("express");
const createError = require("http-errors");
const morgan = require("morgan");
require("dotenv").config();

const authRoute = require("./routes/auth.route");
const postRoute = require("./routes/post.route");

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan("dev"));
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

app.use(async (req, res, next) => {
	next(createError.NotFound("There is not route existed"));
});
app.use((err, req, res, next) => {
	const errorStatus = err.status || 500;
	res.status(errorStatus);
	res.send({
		error: {
			status: errorStatus,
			message: err.message,
		},
	});
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
