import  Express  from "express";
import { DataBaseManager } from "./DataBase/DB_manager";
import TabApi from './Routes/tabRoutes'
import CategoryApi from './Routes/categoryRoutes'
import BookmarkApi from './Routes/bookmarkRoutes'

import 'dotenv/config'

const DB_manager = new DataBaseManager()

const app = Express()
app.use(Express.json())
app.use(Express.urlencoded({extended : false}))
DB_manager.connectToDB()

app.use('/Tab',TabApi)
app.use('/Category',CategoryApi)
app.use('/Bookmark',BookmarkApi)




const port = process.env.PORT
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});