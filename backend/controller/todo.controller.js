import Todo from '../model/todo_model.js';

export const createTodo = async (req,res)=>{
    const todo = new Todo({
        text:req.body.text,
        completed:req.body.completed
    })

    try {
        const newtodo =await todo.save()
        res.status(201).json({message:"Created Successfully",newtodo})
    } catch (error) {
        console.log(error);
        res.status(400).json({message:"Bruuuuu Error!!"})
        
    }
}

export const getTodos = async (req,res)=>{


    try {
        const todos = await Todo.find();
        res.status(201).json({message:"Todos fetceg suceess full", todos})
        
    } catch (error) {
        console.log(error);
        res.status(400).json({message:"Anable to fech your todos"})
        
    }
}


export const todoUpdate = async (req,res)=>{

    try {
        const todo = await Todo.findByIdAndUpdate(req.params.id,res.body,{
            new:true,
        })
        res.status(201).json({message:"Todos update suceess full", todo})

    } catch (error) {
         console.log(error);
        res.status(400).json({message:"Anable to update your todos"})
        
    }
}

export const todoDelete = async (req,res)=>{
    try {
        const todod = await Todo.findByIdAndDelete(req.params.id)
        res.status(201).json({message:"Todos deleted suceess full"})
        
    } catch (error) {
         console.log(error);
        res.status(400).json({message:"Anable to delete your todos"})
        
    }
}