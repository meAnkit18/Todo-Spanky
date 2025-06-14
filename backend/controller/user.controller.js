import User from "../model/user.model.js";
import {z} from "zod"

const userSchema = z.object({
    username:z.string().min(3,{message:"Enter Atleast 3 char long"}),
    email:z.string().email({message:"Invalid email address"}),
    password:z.string().min(6,{message:"Password should be Atleast 6 characters"}),
})


export const register = async (req,res)=>{
    try {
        // console.log("Register function called")
        // const username  = req.body.username;
        // const email  = req.body.email;
        // const pasaword  = req.body.pasaword;
        // console.log(username,email,password);

        const {username, email, password} = req.body;
        if(!username || !email || !password){
            return res.status(400).json({message:"All fields are requires"})
        }
        const validation = userSchema.safeParse({username, email, password})

        if(!validation.success){
            const errorMessage = validation.error.errors.map((err)=>err.message)
            return res.status(400).json({errors:errorMessage})
        }
        const user = await User.findOne({email})
        if(user){
            return res.status(400).json({message: "User Already exist"})
        }
        const newuser = new User({username,email,password})
        await newuser.save()
        if(newuser){
            res.status(201).json({message:"User registerted Successfully !!",newuser})
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Error Registering User"})
        
    }
}
export const login = (req,res)=>{
    console.log("login function called")
}
export const  logout= (req,res)=>{
    console.log("logout function called")
}