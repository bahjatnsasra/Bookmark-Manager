import { Category } from "../DataBase/Models/category";
import { category } from "../Interfaces/category";
import { AppError } from "../ErrorHandler/appError";

export class CategoryRepository {
    async getCategory(categoryID: string){
        try {
            const category = await Category.findById(categoryID).populate("tab").exec()
            if(!category) throw(new AppError("Category Not Found", 404))
            return category
        } catch (error) {
            throw(error)
        }
    }
    async createCategory(categoryData: category){
        try {
            const newCategory = new Category({ name: categoryData.name, tab: categoryData.tabID})
            await newCategory.save()
            return newCategory
        } catch (error) {
            throw(new AppError("Something Went Wrong", 500))
        }
    }
    async addBookmarkToCategory(categoryID: string, bookmarkID: string){
        try {
            const category = await Category.findById(categoryID).exec()
            if(!category) throw(new AppError('Category not found' , 404))
            await category.updateOne({$push: {bookmarks:bookmarkID}})
            return category
        } catch (error) {
            throw(error)
        }
    }
    async deleteCategory(categoryID: string){
        try {
            const category = await Category.findById(categoryID).exec()
            if(!category) throw(new AppError('Category not found' , 404))
            category.deleteOne()
        } catch (error) {
            throw(error)
        }
    }
}