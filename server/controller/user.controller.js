const userModel = require('../models/user.model');
const userService= require('../services/user.service.js');
const { validationResult }= require('express-validator');


module.exports.signupUser= async (req,res,next)=>{

    const errors= validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ //400 Bad Request
          errors: errors.array(),
        //   message: "invalid data",
        });
      }


      const { username, email, password }= req.body;

      const hashedPassword= await userModel.hashPassword(password);

      const user= await userService.createUser({
        username,
        email,
        password: hashedPassword,
      });

      const token= user.generateAuthToken();

      res.status(201).json({ token,user });
      // 201 means request was successfully fulfilled and resulted in one or possibly multiple new resources being created.

}

module.exports.loginUser= async (req,res,next)=>{
    const errors= validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ //400 Bad Request
          errors: errors.array(),
        //   message: "invalid data",
        });
      }

      const { email, password }= req.body;

      const user= await userModel.findOne({ email }).select('+password');

      if(!user){
        return res.status(401).json({ message: "Invalid email or password" });
      }

      //401 status == "Unauthorized", indicates that a client's request to a server was unsuccessful because the client's authentication credentials were invalid

      const isMatch= await user.comparePassword(password);

      if(!isMatch){
        return res.status(401).json({ message: "Invalid email or password" });
      }

      const token= user.generateAuthToken();

      res.status(200).json({ token,user });
      // 200 means request was successfully fulfilled.
}

// module.exports = router;
