const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
	name: {
		type : String,
		maxlength: 50
	},
	email: {
		type : String,
		trim : true, /*space 없애주는 역할*/
		unique: 1
	},
	password: {
		type : String,
		minlength: 5
	},
	lastname: {
		type : String,
		maxlength : 50
	},
	role: {
		type: Number,
		default: 0
	},
	image: String,
	token: {
		type : String
	},
	/*token 유효기간*/
	tokenExp: {
		type : Number
	}
})

const User = mongoose.model('User', userSchema)

module.exports = {User}