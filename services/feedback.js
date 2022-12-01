const FeedbackModel = require('../models/feedback');

module.exports.findAllProducts = async () => {
    try{
        const feedback = await FeedbackModel.find();
        return feedback;
    } catch (err) {
        throw new Error ('Could not retrieve feedback');
    }
};