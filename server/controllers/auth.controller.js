const models = require('../models')
const bcrypt = require('bcrypt')


exports.register = async(req, res)=>{
    try {
                console.log("insidee the register API",req.body);

        const {firstname,lastname,email,phone,password} = req.body;
        const existing = await models.users.findOne({
            where:{email_id:email, mobile:phone}
        });
        if(existing){
            return res.send({
                status:false,
                messag:"email or phone number alredy exist"
            });
        }
        const salt = await bcrypt.genSalt(10);
        const addhash  = await bcrypt.hash(password,salt);
        const createEntry = await models.users.create({
            mobile:phone,
            name:firstname,
            email_id:email,
            password:addhash,
            confirm_password:password,

        });
        return res.send({
            status:true,
            message:"registered successfully"
        });
    } catch (error) {
        console.log(error);
        res.send({
            status:false,
            error:error
        });
    }
}