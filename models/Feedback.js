const {Schema, model} = require ('mongoose');
const CarSchema = new Schema ({
    
    feedbackID: {
        type: 'Number',
        required: true
    },

    customerID: {
        type: 'Number',
        required: true
    },

    feedback_content: {
        type: 'String',
        required: true
    }
});