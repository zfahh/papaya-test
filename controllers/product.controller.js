const Product = require('../models/product.model')

exports.test = (req, res) => {
    res.send('Hello zaifah from controller')
}

exports.productCreate = (req, res, next) => {
    let product = new Product({
        name: req.body.name,
        price: req.body.price
    })

    product.save((error) => {
        if (error) {
            return next(error)
        }
        res.send('Product create successs')
    })
}

exports.productDetail = (req, res, next) => {
    Product.findById(req.params.id, (err, product) => {
        if (err) return next(err)
        res.send(product)
    })
}

exports.productUpdate = (req, res, next) => {
    Product.findByIdAndUpdate(req.params.id, { $set: req.body }, (err, product) => {
        if (err) return next(err)
        res.send('product update')
    })
}

exports.productDelete = (req, res, next) => {
    Product.findByIdAndDelete(req.params.id, (err) => {
        if (err) return next(err)
        res.send('product delete')
    })
}

exports.products = (req, res, next) => {
    Product.find({}, (err, products) => {
        if (err) return next(err)
        res.send(products)
    })
}
