import { AppError } from "../ErrorHandler/appError";
import { TabRepository } from "../Repositories/tabRepository";
const tabRepository = new TabRepository();

export class TabService {
    async getTabByID(tabID: string){
        try {
            const tab =  await tabRepository.getTab(tabID)
            return tab
        } catch (error) {
            throw error
        }
    }

    async createTab(tabName: string){
        try {
            const tab = await tabRepository.createTab(tabName)
            return tab
        } catch (error) {
            throw error
        }
    }

    async updateTab(tabID: string, categoryID: string){
        try {
            const tab = await tabRepository.addCategoryToTab(tabID, categoryID)
            return tab
        } catch (error) {
            throw error
        }
    }

    async deleteTab(tabID: string){
        try {
            await tabRepository.deleteTab(tabID)
        } catch (error) {
            throw error
        }
    }
    
}