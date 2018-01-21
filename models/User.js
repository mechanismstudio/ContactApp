const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const User = new Schema({
   name: {
      type: String,
      required: true
   },
   phoneNum: {
      type: Number
   },
   email: {
      type: String,
      default: 'N/A'
   },
   thumbnail: {
      type: String
   },
   about: {
      type: String
   }
});

module.exports = mongoose.model('Users', User);
