import { CategoryRepository } from "../Repositories/categoryRepository"
import { TabRepository } from "../Repositories/tabRepository"
import { category } from "../Interfaces/category"
const categoryRepository = new CategoryRepository()
const tabRepository = new TabRepository()
export class CategoryService {

    async getCategoryByID(categoryID: string){
        try {
            const category =  await categoryRepository.getCategory(categoryID)
            return category
        } catch (error) {
            throw error
        }
    }

    async createCategory(categoryData: category){
        try {
            const newCategory =  await categoryRepository.createCategory(categoryData)
            const categoryID = newCategory._id.toString()
            tabRepository.addCategoryToTab(categoryData.tabID,categoryID)
            return newCategory
        } catch (error) {
            throw error
        }
    }

    

    async addBookmarkToCategory(categoryID: string, bookmarkID: string){
        try {
            const updatedCategory = await categoryRepository.addBookmarkToCategory(categoryID,bookmarkID)
            return updatedCategory
        } catch (error) {
            throw error
        }
    }

    async deleteCategory(categoryID: string){
        try {
            await categoryRepository.deleteCategory(categoryID)
        } catch (error) {
            throw error
        }
    }
}