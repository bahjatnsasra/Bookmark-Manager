import { Tab } from "../DataBase/Models/tab";
import { AppError } from "../ErrorHandler/appError";
export class TabRepository {
    async createTab(tabName: string){
        try {
            const newTab = new Tab({name : tabName})
            await newTab.save()
            return newTab
        } catch (error) {
            throw(new AppError("Something went wrong", 500))
        }
    }
    async getTab(tabID: string){
        try {
            const tab = await Tab.findById(tabID).populate("categories").exec()
            if(!tab) throw(new AppError('Tab not found' , 404))
            return tab
        } catch (error) {
            throw(error)
        }
    }

    async addCategoryToTab(tabID: string ,  categoryID: string){
        try {
            const tab = await Tab.findById(tabID).exec()
            if(!tab) throw(new AppError('Tab not found' , 404))
            await tab.updateOne({$push: {categories:categoryID}})
            return tab
        } catch (error) {
            throw(new AppError("Something went wrong", 500))
        }
    }

    async deleteTab(tabID: string){
        try {
            const tab = await Tab.findById(tabID).exec()
            if(!tab) throw(new AppError('Tab not found' , 404))
            await tab.deleteOne()
        } catch (error) {
            throw(new AppError("Something went wrong", 500))
        }
    }

    
}