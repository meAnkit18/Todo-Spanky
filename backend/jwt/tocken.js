import jwt from 'jsonwebtoken'
import User from '../model/user.model.js'


export const generateTockenAndSaveInCookies = async(userid,res)=>{
  const tocken =  jwt.sign({userid},process.env.JWT_SECRET_KEY,
    {
        expiresIn:"10d"
    }
   )

   res.cookie("jwt",tocken,{
    httpOnly:true,
    secure:false,
    sameSite:"lax",
    path:"/"
   })

   await User.findByIdAndUpdate(userid,{tocken})
   return tocken;
}