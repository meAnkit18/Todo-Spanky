import mongoose from "mongoose";

const todoschema = new mongoose.Schema({
    text:{
        type:String,
        require:true
    },
    completed:{
        type:Boolean,
        require:true
    }

    
    
})
const Todo = mongoose.model("Todo",todoschema)
export default Todo