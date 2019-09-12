const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost/expense-management', { useNewUrlParser: true });

const userRoute = require('./routes/user');
app.use(userRoute);

app.all('*', (req, res) => {
	res.send('all routes');
});

app.listen(3000, () => {
	console.log('Server Started');
});
