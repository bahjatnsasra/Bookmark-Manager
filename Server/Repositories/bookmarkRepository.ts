import { Bookmark } from "../DataBase/Models/bookmark";
import { AppError } from "../ErrorHandler/appError";
import { bookmark } from "../Interfaces/bookmark";

export class BookmarkRepositories {
    async createBookmark(bookmarkData: bookmark){
        try {
            const newBookmark = new Bookmark(bookmarkData)
            await newBookmark.save()
            return newBookmark;
        } catch (error) {
            throw error
        }
    }
    
    async getBookmark(bookmarkID:string){
        try {
            const bookmark = await Bookmark.findById(bookmarkID).populate("category").exec()
            if(!bookmark) throw(new AppError("bookmark not found" , 404))
            return bookmark;
        } catch (error) {
            throw error
        }
    }
    async updateBookmark(bookmarkData: bookmark , bookmarkID: string){
        try {
            const bookmark = await Bookmark.findByIdAndUpdate({_id: bookmarkID},bookmarkData)
            if(!bookmark) throw(new AppError("bookmark not found" , 404))
            return bookmark
        } catch (error) {
            throw error
        }
    }
    async deleteBookmark(bookmarkID: string){
        try {
            const deletedBookmark =  await Bookmark.findByIdAndDelete(bookmarkID)
            if(!deletedBookmark) throw(new AppError("bookmark not found" , 404))
            return deletedBookmark
        } catch (error) {
            throw error
        }
    }
}