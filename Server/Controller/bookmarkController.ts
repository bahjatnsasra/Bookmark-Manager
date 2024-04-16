import { AppError } from "../ErrorHandler/appError";
import { bookmark } from "../Interfaces/bookmark";
import { BookmarkService } from "../Service/bookmarkService";
import { Request, Response } from "express";

const bookmarkService = new BookmarkService()
export class BookmarkController{
    async getBookmark(req: Request, res: Response){
        try {
            const bookmarkID: string = req.params.id
            const bookmark = await bookmarkService.getBookmark(bookmarkID)
            res.status(200).json({message:"Bookmark" , object: bookmark})
        } catch (error) {
            error instanceof AppError ? 
            res.status(error.statusCode).json({message: error.message , object: error}) :
            res.status(500).json({message: "Something Went Wrong" , object: error})
        }
    }

    async createBookmark(req: Request, res: Response){
        try {
            const bookmarkData: bookmark = req.body
            const newBookmark = await bookmarkService.createBookmark(bookmarkData)
            res.status(200).json({message:"Bookmark created" , object: newBookmark})
        } catch (error) {
            error instanceof AppError ? 
            res.status(error.statusCode).json({message: error.message , object: error}) :
            res.status(500).json({message: "Something Went Wrong" , object: error})
        }
    }

    async deleteBookmark(req: Request, res: Response){
        try {
            const bookmarkID: string = req.params.id
            const bookmark = await bookmarkService.deleteBookmark(bookmarkID)
            res.status(200).json({message:"Bookmark deleted" , object: bookmark})
        } catch (error) {
            error instanceof AppError ? 
            res.status(error.statusCode).json({message: error.message , object: error}) :
            res.status(500).json({message: "Something Went Wrong" , object: error})
        }
    }

    async updateBookmark(req: Request, res: Response){
        try {
            const bookmarkID: string = req.params.id
            const bookmarkData: bookmark = req.body
            const bookmark = await bookmarkService.updateBookmark(bookmarkData,bookmarkID)
            res.status(200).json({message:"Bookmark updated" , object: bookmark})
        } catch (error) {
            error instanceof AppError ? 
            res.status(error.statusCode).json({message: error.message , object: error}) :
            res.status(500).json({message: "Something Went Wrong" , object: error})
        }
    }
}