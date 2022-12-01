const carService = require('../services/car');

module.exports.getCar = async (req, res) => {
    try {
        const car = await carService.findAllProducts();
        res.send({car});
    } catch (err) {
        res.status(500);
        res.send({
            error: err
        });
    }
};