const {Schema, model} = require('mongoose');

const CustomerServiceSchema = new Schema({
    custServiveID:{
        type:'int',
        required: true
    },
    custServiceName:{
        type:'String',
        required: true
    },
    custServiceRole:{
        type:'String',
        required: true
    },
    custServiceEmail:{
        type:'String',
        required: true
    },
    custServicePhoneNum:{
        type:'int',
        required: true
    },
    custServiceAge:{
        type:'int',
        required: true
    },
    custServiceSalary:{
        type:'int',
        required: true
    }

});

const CustomerServiceModel = model('Customer Service', CustomerServiceSchema);
module.exports = CustomerServiceModel;