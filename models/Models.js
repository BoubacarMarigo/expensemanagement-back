const mongoose = require('mongoose');

const User = mongoose.model('User', {
	username: {
		type: String,
		required: true
	},
	expenses: {
		type: Array,
		default: []
	}
});

module.exports = {
	User: User
};
