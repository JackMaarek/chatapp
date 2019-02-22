/*
* Imports
*/
const mongoose = require('mongoose');
const { Schema } = mongoose;
//

/*
* Config
*/
const chatRoomSchema = new Schema({
  name: { type: 'String', required: true },
  title: { type: 'String', required: true },
  dateAdded: { type: 'Date', default: Date.now, required: true },
});

//

/* 
Export
*/
const ChatRoomModel = mongoose.model('chatroom', chatRoomSchema);
module.exports = ChatRoomModel;
//

