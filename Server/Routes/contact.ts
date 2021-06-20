import express from 'express';
const router = express.Router();
export default router;
import {DisplayAddPage, DisplayContactListPage, DisplayEditPage, ProcessAddPage, ProcessDeletePage, ProcessEditPage} from '../Controllers/contact';

/*GET contact-list page- with /contact-list */
router.get('/', DisplayContactListPage)

/* GET - display /clothing-list/add page. */
router.get('/add', DisplayAddPage);

/* display edit/:id page - with /contact-list/edit:id*/
router.get('/edit/:id', DisplayEditPage);

/* POST - process /clothing-list/add page */
router.post('/add', ProcessAddPage);

/* POST - process /clothing-list/edit/:id page */
router.post('/edit/:id', ProcessEditPage);

/* GET - process /clothing-list/delete/:id */
router.get('/delete/:id', ProcessDeletePage);

