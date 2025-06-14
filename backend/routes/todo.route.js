import express from 'express'
import { createTodo, getTodos, todoDelete, todoUpdate } from '../controller/todo.controller.js';

const router = express.Router()

router.post("/create",createTodo)
router.get("/fetch",getTodos)
router.put("/update/:id",todoUpdate)
router.delete("/delete/:id",todoDelete)
 
export default router

