import { Router } from 'express';
import { CategoryController } from '../Controller/categoryController';
const categoryController = new CategoryController()

const router = Router();



router.get('/:id/get' , categoryController.getCategory)
router.post('/create' , categoryController.createCategory)
router.put('/addBookmark' , categoryController.addBookmarkToCategory)
router.delete('/:id/delete' , categoryController.deleteCategory)


export = router;