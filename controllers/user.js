import User from '../models/user.js'
const register =  async(req,res)=>{
    try {
        const {name,email,password}=req.body;
    
          if(!name || !email || !password){
            return res.status(400).json({
                message:"Please fill All Fields",
                success:true
            })
        }
    
      const user = new User({name,email,password});
      await user.save();
      res.status(201).json({
        message:"Register User Successfully",
        success:true
      })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            message:error,
            success:false
        })
    }
    }
    
export default register