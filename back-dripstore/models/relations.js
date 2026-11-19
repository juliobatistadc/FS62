const User = require("./userModel");
const Category = require("./categoryModel");
const Images = require("./imagesModel");
const Product = require("./productModel");
const ProductOption = require("./productOptionModel");

Product.hasOne(Images, {foreignKey: "id_product"});
Product.hasOne(ProductOption, {foreignKey: "id_product_options"});

module.exports = {
    User,
    Category,
    Images,
    Product,
    ProductOption
}