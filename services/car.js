const CarModel = require('../models/Car');

module.exports.findAllProducts = async () => {
    try{
        const car = await CarModel.find();
        return car;
    } catch (err) {
        throw new Error ('Could not retreiev car models');
    }
};