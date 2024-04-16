import { bookmark } from "../Interfaces/bookmark";
import { BookmarkRepositories } from "../Repositories/bookmarkRepository";
import { CategoryRepository } from "../Repositories/categoryRepository";
const bookmarkRepo = new BookmarkRepositories()
const categoryRepo = new CategoryRepository()
export class BookmarkService {
    async getBookmark(bookmarkID:string) {
        try {
            const bookmark = await bookmarkRepo.getBookmark(bookmarkID)
            return bookmark
        } catch (error) {
            throw error
        }
    }

    async createBookmark(bookmarkData: bookmark ) {
        try {
            const bookmark = await bookmarkRepo.createBookmark(bookmarkData)
            const bookmarkID = bookmark._id.toString()
            const categoryID = bookmarkData.category
            await categoryRepo.addBookmarkToCategory(categoryID,bookmarkID)
            return bookmark
        } catch (error) {
            throw error
        }
    }

    async updateBookmark(bookmarkData: bookmark, bookmarkID: string) {
        try {
            const bookmark = await bookmarkRepo.updateBookmark(bookmarkData,bookmarkID)
            return bookmark
        } catch (error) {
            throw error
        }
    }

    async deleteBookmark(bookmarkID: string) {
        try {
            const bookmark = await bookmarkRepo.deleteBookmark(bookmarkID)
            return bookmark
        } catch (error) {
            throw error
        }
    }

}