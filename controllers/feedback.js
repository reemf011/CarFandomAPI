const feedbackService = require('../services/Feedback');

module.exports.getFeedback = async (req, res) => {
    try {
        const feedback = await feedbackService.findAllProducts();
        res.send({feedback});
    } catch (err) {
        res.status(500);
        res.send({
            error: err
        });
    }
};