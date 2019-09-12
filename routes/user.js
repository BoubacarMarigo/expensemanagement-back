const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const models = require('../models/Models');
const User = models.User;

router.post('/user/create', async (req, res) => {
	const user = User.findOne({ username: req.body.username });
	const expenseTab = [];
	const expenseItem = {};
	expenseItem.description = req.body.description;
	expenseItem.amount = req.body.amount;
	expenseTab.push(expenseItem);
	const newUser = new User({
		username: req.body.username,
		expenses: expenseTab
	});
	await newUser.save();
	res.json({ message: 'Enregistrement effectué avec succès' });
	console.log('données sauvegardées dans la base de données');
});

module.exports = router;
