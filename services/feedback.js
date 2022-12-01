const FeedbackModel = require('../models/Feedback');

module.exports.findAllProducts = async () => {
    try{
        const feedback = await FeedbackModel.find();
        return feedback;
    } catch (err) {
        throw new Error ('Could not retrieve feedback');
    }
};