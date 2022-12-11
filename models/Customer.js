const {Schema, model}=require('mongoose');
const CustomerSchema= new Schema({
    Name:{
     
        type:'String',
        required: true
    },
    phonenumber:{
        type:'Number',
        required: true
    },

    Email:{
     
        type:'String',
        required: true
    },
    password:{
        type: 'String',
        required:true
    }
});
const CustomerModel = model('customer',CustomerSchema);
module.exports=CustomerModel;