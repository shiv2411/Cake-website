const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const user=require('./users.model').schema;
const cakes=require('./cakes.model').schema;
//const cake=require('cake');
const schema = new Schema({
    User: user,
   Cakes: [cakes],
    Address: { type: String },
   Price: { type: String },
   createdDate: { type: Date, default: Date.now },
   orderID: mongoose.Types.ObjectId
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('PlaceOrder', schema,'PlaceOrder');