const mongoose = require('mongoose')
const Schema = mongoose.Schema


const transactionSchema = new Schema ({
    amount: {type: Number, required: true},
    description: {type: String, required: true},
    date: {type: Date, default: Date.now},
    type: {type: String, enum: ['Deposit', 'Withdrawal'], required: true}
}, {timestamps: true})


module.exports = mongoose.model('Account', accountSchema)