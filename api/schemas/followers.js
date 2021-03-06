const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//Importing userSchema
const userSchema = require('./userDetails');
 
const followerSchema = Schema({
	user: {
        type: Schema.Types.ObjectId,

        ref: "User"
    },
    
    follower: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
});

const Follower = mongoose.model('Follower', followerSchema);
module.exports = Follower; 
