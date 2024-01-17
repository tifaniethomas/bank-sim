const mongoose = require('mongoose')
const Schema = mongoose.Schema


const accountSchema = new Schema ({
    user: {type: Schema.Types.ObjectId, ref: "User", required: true},
    balance: {type: Number, default: 0,},
    transactions: [{type: Schema.Types.ObjectId, ref: "Transaction"}]
}, {timestamps: true})


module.exports = mongoose.model('Account', accountSchema)