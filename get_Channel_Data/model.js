const mongoose = require('mongoose');

let dataSchema = new mongoose.Schema({
  name: {
    type: String
  },
  logo: {
    type: String
  },
  url: {
    type: String
  },
  country: {
    type: String
  },
  category: {
    type: String
  }
});

let dataModel = mongoose.model('tvlist', dataSchema);

module.exports = dataModel;