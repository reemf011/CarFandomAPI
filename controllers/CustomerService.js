const CustService_Services = require('../services/CustomerService');

module.exports.getCustServiceEmp = async (req, res) => {
    try{
        const Employees = await CustService_Services.findAllEmployees();
        res.send({Employees});

    } catch(err){
        res.status(500);
        res.send({
            error: err
        });
    }

};

module.exports.postCustService = async(req,res)=>{
    const CustServiceInfo ={
        ID: req.body.ID,
        Name:req.body.Name,
        phonenumber:req.body.phonenumber,
        Email:req.body.Email
    };
    try{
        const createdCusrService = await customerservice.addNewCustomer(CustServiceInfo);
        return res.status(201).send({
            msg:'Customer created successfully',
            customerid: createdcustomer.ID
        });
    }catch(err){
        return res.status(500).send({
            error:err.message 
        });
    }
};