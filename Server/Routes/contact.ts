import express from 'express';
const router = express.Router();
export default router;
import {DisplayContactListPage} from '../Controllers/contact';

/*GET contact-list page- with /contact-list */
router.get('/', DisplayContactListPage)

/* display edit/:id page - with /contact-list/edit:id*/