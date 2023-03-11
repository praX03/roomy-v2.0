const User = require("../models/User");
const bcrypt = require('bcrypt');
class usercontrols{
// User registration
static register = async (req, res) => {
    try {
      const {email, password,cpassword}=req.body;
      const userExist = await User.findOne({ email:email });
		if (userExist) {

			return res.status(422).json({ msg: "User already exists!" });
		} else if (password != cpassword) {
			return res.status(422).json({ msg: "Passwords Do Not Match" });
		}
    else{
      const hashPassword = await bcrypt.hash(password,10);
      req.body.password=hashPassword;
      const user = new User(req.body);
      const result = await user.save();
      res.status(201).json({ success: true, user: result });
    }
   } catch (error) {
      console.log(error);
      res.status(400).json({ success: false, message: error.message+"hello" });
    }
  }
 
  //user login
  static login = async(req, res)=>{
    try{
      const {email,password} =req.body;
      const result= await User.findOne({email:email});
      if(result==null){
        
        res.send(false);
      }
      else{
       
        const isMatch=await bcrypt.compare(password,result.password);
        
        if(result.email==email&&isMatch){
          res.send(true);
        }
        else{
          res.send(false);
        }
      }
        
    }
    catch(error){
      res.send(error);
    }
    }

  //dashboard 
  static dashboard = async(req, res)=>{
try{
  const  result = await User.findOne({_id:req.params.id});
  res.send(result);
}
catch(error){
  res.send(error);
}
    }
  }
  module.exports = usercontrols;
