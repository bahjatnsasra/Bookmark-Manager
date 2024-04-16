import { Router } from 'express';
import { BookmarkController } from '../Controller/bookmarkController';
const bookmarkController = new BookmarkController()

const router = Router();



router.get('/:id/get' , bookmarkController.getBookmark)
router.post('/create' , bookmarkController.createBookmark)
router.put('/:id/update' , bookmarkController.updateBookmark)
router.delete('/:id/delete' , bookmarkController.deleteBookmark)


export = router;