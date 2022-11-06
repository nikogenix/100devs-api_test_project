const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8000;

const db = {
	test_1: {
		field_1: "text_1",
		field_2: "text_2",
		field_3: "text_3",
	},
	test_2: {
		field_1: "text_1",
		field_2: "text_2",
		field_3: "text_3",
	},
	test_3: {
		field_1: "text_1",
		field_2: "text_2",
		field_3: "text_3",
	},
	unknown: {
		field_1: "unknown",
		field_2: "unknown",
		field_3: "unknown",
	},
};

app.use(cors());

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

app.get("/api/", (req, res) => {
	res.json(db);
});

app.get("/api/:param", (req, res) => {
	const param = req.params.param.toLowerCase();

	if (db[param]) {
		res.json(db[param]);
	} else {
		res.json(db["unknown"]);
	}
});

app.get("/api/:param/:field", (req, res) => {
	const param = req.params.param.toLowerCase();
	const field = req.params.field.toLowerCase();

	if (db[param][field]) {
		res.json(db[param][field]);
	} else {
		res.json(db["unknown"]);
	}
});

app.listen(process.env.PORT || PORT, () => {
	console.log("Server is running.");
});
