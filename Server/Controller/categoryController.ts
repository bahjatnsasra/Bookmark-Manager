import { CategoryService } from "../Service/categoryService";
import { Request, Response , NextFunction } from "express";
import { category } from '../Interfaces/category'
import { AppError } from "../ErrorHandler/appError";
const categoryService = new CategoryService()
export class CategoryController {
    async getCategory(req: Request, res: Response){
        try {
            const categoryID = req.params.id
            const category = await categoryService.getCategoryByID(categoryID)
            res.status(200).json({message:"Category" , object: category})
        } catch (error) {
            error instanceof AppError ? 
            res.status(error.statusCode).json({message: error.message , object: error}) :
            res.status(500).json({message: "Something Went Wrong" , object: error})
        }
    }

    async createCategory(req: Request, res: Response){
        try {
            const categoryData : category = req.body
            const newCategory = await categoryService.createCategory(categoryData)
            res.status(200).json({message:"Category Created Succesfully" , object: newCategory})
        } catch (error) {
            throw error
        }
    }

    async addBookmarkToCategory(req: Request, res: Response){
        try {
            const categoryID = req.body.categoryID
            const bookmarkID = req.body.bookmarkID
            const category = await categoryService.addBookmarkToCategory(categoryID,bookmarkID)
            res.status(200).json({message:"Bookmark Added To Category Succesfully" , object: category})
        } catch (error) {
            error instanceof AppError ?
            res.status(error.statusCode).json({message: error.message , object: error}) :
            res.status(500).json({message: "Error in updating Tab" , object: error})
        }
    }


    async deleteCategory(req: Request, res: Response){
        try {
            const categoryID = req.params.id
            await categoryService.deleteCategory(categoryID)
            res.status(200).json({message:"Category Deleted Succesfully" , object: {}})
        } catch (error) {
            error instanceof AppError ?
            res.status(error.statusCode).json({message: error.message , object: error}) :
            res.status(500).json({message: "Error in deleting Category" , object: error})
        }
    }
}