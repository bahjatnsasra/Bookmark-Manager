import { Router } from 'express';
import { TabController } from '../Controller/tabController';
const tabController = new TabController()

const router = Router();


router.get('/:id/get' , tabController.getTabByID)
router.post('/create' , tabController.createTab)
router.put('/addCategory' , tabController.addTabCategory)
router.delete('/:id/delete' , tabController.deleteTab)


export = router;