const {Schema, model} = require ('mongoose');
const FeedbackSchema = new Schema ({
    
    feedbackID: {
        type: 'Number',
        required: true
    },

    customername: {
        type: 'String',
        required: true
    },

    feedback_content: {
        type: 'String',
        required: true
    }
});


const FeedbackModel = model('feedback', FeedbackSchema);

module.exports = FeedbackModel;