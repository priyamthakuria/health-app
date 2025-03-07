const mongoose=require('mongoose')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema= new mongoose.Schema({
    username:{
        type : String ,
        required : true,
        trim: true,
        lowercase:true,
        unique:true,
        minlength: [3, 'username must be atleast 3 char long']
    },
    email:{
        type : String ,
        required : true,
        trim: true,
        lowercase:true,
        unique:true,
        minlength: [13, 'email must be atleast 13 char long']
    },
    password:{
        type : String ,
        required : true,
        trim: true,
        select: false,
        // minlength: [5, 'password must be atleast 5 char long']
    },
})

userSchema.methods.generateAuthToken= function(){
    const token = jwt.sign({_id:this._id},process.env.JWT_SECRET)
    return token;
}

userSchema.methods.comparePassword= async function(password){
    return await bcrypt.compare(password,this.password);
}

userSchema.statics.hashPassword= async function(password){
    return await bcrypt.hash(password,10);
}

const userModel = mongoose.model('user',userSchema)


module.exports=userModel;