import { Request ,Response } from 'express';
import { TabService } from "../Service/tabService";
import { AppError } from '../ErrorHandler/appError';
const tabService = new TabService();

export class TabController {
    
    async getTabByID(req: Request , res: Response){
        try {
            const tabID = req.params.id
            const tab =  await tabService.getTabByID(tabID)
            res.status(200).json({message: "Tab" , object: tab})
        } catch (error) {
            error instanceof AppError ?
            res.status(error.statusCode).json({message: error.message , object: error}) :
            res.status(500).json({message: "Something Went Wrong" , object: error})
        }
    }

    async createTab(req: Request , res: Response){
        try {
            const tabName = req.body.tabName
            const tab =  await tabService.createTab(tabName)
            res.status(200).json({message: "Tab Created Succesfully" , object: tab})
        } catch (error) {
            res.status(500).json({message: "Error in creating Tab" , object: error})
        }
    }

    async addTabCategory(req: Request , res: Response){
        try {
            const tabID = req.body.tabID
            const categoryID = req.body.categoryID
            const tab = tabService.updateTab(tabID,categoryID)
            res.status(200).json({message: "Tab Created Succesfully" , object: tab})
        } catch (error) {
            error instanceof AppError ?
            res.status(error.statusCode).json({message: error.message , object: error}) :
            res.status(500).json({message: "Error in updating Tab" , object: error})
        }
    }

    async deleteTab(req: Request , res: Response){
        try {
            const tabID = req.params.id
            await tabService.deleteTab(tabID)
            res.status(200).json({message: "Tab Deleted Succesfully" , object: {}})
        } catch (error) {
            error instanceof AppError ?
            res.status(error.statusCode).json({message: error.message , object: error}) :
            res.status(500).json({message: "Error in deleting Tab" , object: error})
        }
    }
    
}