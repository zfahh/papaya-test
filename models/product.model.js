const mongoose =  require('mongoose')
const Schema = mongoose.Schema

let productSchema = new Schema({
    name: { type: String, required: true, max: 100 },
    price: { type: Number, require: true }
})

module.exports = mongoose.model('Product', productSchema)
